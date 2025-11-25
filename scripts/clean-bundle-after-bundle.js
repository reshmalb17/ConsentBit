const fs = require('fs');
const path = require('path');

// Clean bundle directory after webflow extension bundle copies files
const bundleDir = path.join(__dirname, '..', 'bundle');

if (fs.existsSync(bundleDir)) {
  const files = fs.readdirSync(bundleDir).filter(f => 
    f.endsWith('.bundle.js') || f === 'bundle.js'
  );
  
  files.forEach(filename => {
    const bundlePath = path.join(bundleDir, filename);
    let bundleContent = fs.readFileSync(bundlePath, 'utf8');
    const originalContent = bundleContent;
    
    // Run multiple passes to catch all variations
    for (let i = 0; i < 3; i++) {
      // Pattern 1: this||new Function("return this")()
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
      
      // Pattern 3: standalone new Function("return this")()
      bundleContent = bundleContent.replace(
        /new\s+Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        '(function(){return this||window})()'
      );
      bundleContent = bundleContent.replace(
        /new\s*Function\s*\(\s*["']return\s+this["']\s*\)\s*\(\s*\)/g,
        '(function(){return this||window})()'
      );
    }
    
    if (bundleContent !== originalContent) {
      fs.writeFileSync(bundlePath, bundleContent, 'utf8');
      console.log(`✓ Cleaned new Function from ${filename}`);
    }
  });
}

