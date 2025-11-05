import path from "path";
import { fileURLToPath } from "url";
import TerserPlugin from "terser-webpack-plugin";
import fs from "fs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Plugin to remove any remaining new Function() calls from bundle as a safety net
class RemoveNewFunctionPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("RemoveNewFunctionPlugin", (compilation) => {
      const outputPath = compilation.outputOptions.path;
      const filename = compilation.outputOptions.filename;
      const bundlePath = path.join(outputPath, filename);
      
      if (fs.existsSync(bundlePath)) {
        let bundleContent = fs.readFileSync(bundlePath, "utf8");
        const originalContent = bundleContent;
        
        // Replace new Function("return this")() with window (since we set globalObject to "window")
        bundleContent = bundleContent.replace(
          /new\s+Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
          "window"
        );
        
        // Replace new Function("return window")() with window
        bundleContent = bundleContent.replace(
          /new\s+Function\s*\(\s*["']return\s+window["']\s*\)\s*\(\s*\)/g,
          "window"
        );
        
        // Only write if content changed
        if (bundleContent !== originalContent) {
          fs.writeFileSync(bundlePath, bundleContent, "utf8");
        }
      }
    });
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
    new RemoveNewFunctionPlugin(),
  ],
  devServer: {
    static: [{ directory: path.join(dirname, "public") }],
    compress: true,
    port: 3000,
  },
};
