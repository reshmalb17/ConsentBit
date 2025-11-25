const fs = require('fs');
const path = require('path');

// Verification script to check for new Function and eval patterns
function verifyBundle() {
  console.log('🔍 Verifying bundle files for marketplace compliance...\n');
  
  const filesToCheck = [
    { path: path.join(__dirname, '..', 'public', 'bundle.js'), name: 'public/bundle.js', description: 'Source bundle (before packaging)' },
    { path: path.join(__dirname, '..', 'bundle', 'bundle.js'), name: 'bundle/bundle.js', description: 'Final bundle (in bundle directory)' }
  ];
  
  let allClean = true;
  
  // Check each bundle file
  filesToCheck.forEach(({ path: filePath, name, description }) => {
    if (fs.existsSync(filePath)) {
      console.log(`Checking: ${name} (${description})`);
      const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for new Function patterns (case-insensitive)
    const newFunctionPattern = /new\s*Function\s*\(/gi;
    const functionMatches = content.match(newFunctionPattern);
    
    if (functionMatches && functionMatches.length > 0) {
      allClean = false;
      console.log(`  ❌ FOUND ${functionMatches.length} instance(s) of 'new Function'`);
      console.log(`  Sample matches:`);
      functionMatches.slice(0, 3).forEach((match, i) => {
        const index = content.indexOf(match);
        const context = content.substring(Math.max(0, index - 20), Math.min(content.length, index + 50));
        console.log(`    ${i + 1}. ...${context}...`);
      });
      console.log('');
    } else {
      console.log('  ✅ No "new Function" patterns found');
    }
    
    // Check for eval() patterns (case-insensitive)
    // Check for: eval(, (0, eval)(, await eval(, etc.
    const evalPatterns = [
      /\beval\s*\(/gi,                    // eval(
      /\(0,\s*eval\)\s*\(/gi,            // (0, eval)(
      /await\s*eval\s*\(/gi,              // await eval(
      /await\s*\(0,\s*eval\)\s*\(/gi      // await (0, eval)(
    ];
    
    let evalFound = false;
    evalPatterns.forEach((pattern, index) => {
      const matches = content.match(pattern);
      if (matches && matches.length > 0) {
        evalFound = true;
        allClean = false;
        console.log(`  ❌ FOUND ${matches.length} instance(s) of 'eval' pattern ${index + 1}`);
        matches.slice(0, 2).forEach((match, i) => {
          const matchIndex = content.indexOf(match);
          const context = content.substring(Math.max(0, matchIndex - 20), Math.min(content.length, matchIndex + 50));
          console.log(`    ${i + 1}. ...${context}...`);
        });
      }
    });
    
      if (!evalFound) {
        console.log('  ✅ No "eval" patterns found\n');
      } else {
        console.log('');
      }
    } else {
      console.log(`  ⚠ File not found: ${name}\n`);
    }
  });
  
  // Check bundle.zip if it exists (this is what gets submitted)
  const bundleZip = path.join(__dirname, '..', 'bundle.zip');
  if (fs.existsSync(bundleZip)) {
    const stats = fs.statSync(bundleZip);
    console.log(`Checking: bundle.zip (${(stats.size / 1024).toFixed(2)} KB)`);
    console.log('  ℹ This is the file that gets submitted to the marketplace');
    console.log('  ℹ It contains bundle/bundle.js which was already checked above\n');
  } else {
    console.log('  ⚠ bundle.zip not found - run "npm run build" first\n');
  }
  
  // Final result
  console.log('━'.repeat(50));
  if (allClean) {
    console.log('✅ VERIFICATION PASSED');
    console.log('   Bundle is marketplace compliant!');
    console.log('   ✓ No "new Function" patterns detected');
    console.log('   ✓ No "eval" patterns detected');
  } else {
    console.log('❌ VERIFICATION FAILED');
    console.log('   Bundle contains prohibited patterns!');
    console.log('   Please run: npm run build');
  }
  console.log('━'.repeat(50));
  
  process.exit(allClean ? 0 : 1);
}

verifyBundle();
