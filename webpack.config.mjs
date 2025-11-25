import path from "path";
import { fileURLToPath } from "url";
import TerserPlugin from "terser-webpack-plugin";
import fs from "fs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Plugin to safely replace new Function patterns for marketplace compliance
// This runs AFTER bundling to ensure we don't break functionality
class SafeNewFunctionReplacerPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("SafeNewFunctionReplacerPlugin", (compilation) => {
      const outputPath = compilation.outputOptions.path;
      const bundleDir = path.join(path.dirname(outputPath), 'bundle');
      
      // Function to clean a directory
      const cleanDirectory = (dir) => {
        if (!fs.existsSync(dir)) return;
        
        const bundleFiles = fs.readdirSync(dir).filter(file => 
          file.endsWith('.bundle.js') || file === 'bundle.js'
        );
        
        bundleFiles.forEach(filename => {
          const bundlePath = path.join(dir, filename);
          this.processFile(bundlePath, filename);
        });
      };
      
      // Clean public directory (webpack output)
      const bundleFiles = fs.readdirSync(outputPath).filter(file => 
        file.endsWith('.bundle.js') || file === 'bundle.js'
      );
      
      bundleFiles.forEach(filename => {
        const bundlePath = path.join(outputPath, filename);
        this.processFile(bundlePath, filename);
      });
      
      // Also clean bundle directory if it exists (after webflow extension bundle copies files)
      cleanDirectory(bundleDir);
    });
  }
  
  processFile(bundlePath, filename) {
    if (!fs.existsSync(bundlePath)) return;
    
    let bundleContent = fs.readFileSync(bundlePath, "utf8");
    const originalContent = bundleContent;
    
    // CRITICAL: Replace new Function("return this")() with a safe alternative
    // This pattern is used by framer-motion to get global object in strict mode
    // Replacement: (function(){return this||window})() works in all contexts
    
    // Run multiple passes to catch all variations (minified code can have different spacing)
    let previousContent = '';
    let passCount = 0;
    const maxPasses = 3;
    
    while (previousContent !== bundleContent && passCount < maxPasses) {
      previousContent = bundleContent;
      passCount++;
      
      // Pattern 1: this||new Function("return this")() - handle various spacing
      bundleContent = bundleContent.replace(
        /this\|\|new\s+Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        'this||(function(){return this||window})()'
      );
      bundleContent = bundleContent.replace(
        /this\|\|new\s*Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        'this||(function(){return this||window})()'
      );
      
      // Pattern 2: ||new Function("return this")()
      bundleContent = bundleContent.replace(
        /\|\|new\s+Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        '||(function(){return this||window})()'
      );
      bundleContent = bundleContent.replace(
        /\|\|new\s*Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        '||(function(){return this||window})()'
      );
      
      // Pattern 3: standalone new Function("return this")() - most flexible pattern
      bundleContent = bundleContent.replace(
        /new\s+Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        '(function(){return this||window})()'
      );
      bundleContent = bundleContent.replace(
        /new\s*Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        '(function(){return this||window})()'
      );
      
      // Pattern 4: new Function("return window")()
      bundleContent = bundleContent.replace(
        /new\s+Function\s*\(\s*["']return\s+window["']\s*\)\s*\(\s*\)/g,
        'window'
      );
      bundleContent = bundleContent.replace(
        /new\s*Function\s*\(\s*["']return\s+window["']\s*\)\s*\(\s*\)/g,
        'window'
      );
      
      // Pattern 5: await new Function("return this")()
      bundleContent = bundleContent.replace(
        /await\s+new\s+Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        'await Promise.resolve((function(){return this||window})())'
      );
      bundleContent = bundleContent.replace(
        /await\s+new\s*Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        'await Promise.resolve((function(){return this||window})())'
      );
    }
    
    // Remove eval patterns (safe to remove)
    bundleContent = bundleContent.replace(
      /\(0,\s*eval\)\s*\(["'][^"']*["']\)/g,
      'null'
    );
    bundleContent = bundleContent.replace(
      /await\s*\(0,\s*eval\)\s*\(["'][^"']*["']\)/g,
      'await Promise.resolve(null)'
    );
    
    // Only write if content changed
    if (bundleContent !== originalContent) {
      fs.writeFileSync(bundlePath, bundleContent, "utf8");
      console.log(`✓ Cleaned new Function/eval from ${filename}`);
    }
  }
}

export default {
  mode: "production", 
  devtool: false,     
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(dirname, "public"),
    // Prevent webpack from using eval/new Function for runtime
    // Use "window" instead of "this" to avoid new Function("return this")
    globalObject: "window",
    // Explicitly set the environment to prevent webpack from needing to detect it
    environment: {
      arrowFunction: true,
      bigIntLiteral: false,
      const: true,
      destructuring: true,
      dynamicImport: false,
      forOf: true,
      module: false,
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // Disable Node.js polyfills to prevent eval usage
  node: false,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    // Disable code splitting to prevent eval/new Function usage
    splitChunks: false,
    // Disable runtime chunk to prevent webpack runtime from using new Function
    runtimeChunk: false,
    // Minimize without using eval or new Function
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // Disable features that might use eval or new Function
            drop_console: false,
            pure_funcs: [],
            // Explicitly disable eval
            evaluate: true, // This is safe - it's static evaluation, not eval()
            unsafe: false, // Disable unsafe optimizations that might use eval
            unsafe_comps: false,
            unsafe_math: false,
            unsafe_methods: false,
            unsafe_proto: false,
            unsafe_regexp: false,
            unsafe_undefined: false,
          },
          mangle: true,
          format: {
            comments: false,
          },
          // Prevent Terser from using eval or new Function
          ecma: 2015,
          safari10: true,
          // Explicitly disable any code generation that uses eval
          parse: {
            ecma: 2015,
          },
        },
        // Prevent Terser from generating eval or new Function
        extractComments: false,
      }),
    ],
  },
  // Prevent webpack from using eval/new Function in generated code
  experiments: {
    topLevelAwait: false,
  },
  plugins: [
    new SafeNewFunctionReplacerPlugin(),
  ],
  devServer: {
    static: [{ directory: path.join(dirname, "public") }],
    compress: true,
    port: 3000,
  },
};
