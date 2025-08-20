# How to Export Complete Source Code for Security Review

## Option 1: Share the Git Repository (Recommended)

The most comprehensive way to provide access to the complete source code is to share the Git repository with your security team. This gives them:

1. **Complete History**: All code changes and development history
2. **Full Context**: All configuration files, dependencies, and build processes
3. **Easy Review**: They can use their preferred tools to analyze the code
4. **Version Control**: They can see exactly what version is deployed

### Steps:
1. Ensure the repository is in a private Git hosting service (GitHub, GitLab, etc.)
2. Add security team members as collaborators with read access
3. Provide them with the repository URL and access credentials
4. Share the `SOURCE_CODE_INVENTORY.md` file for context

## Option 2: Create a Source Code Archive

If you need to provide a static copy of the source code:

### Using Git Archive
```bash
# Create a complete source code archive
git archive --format=zip --output=consentbit-source-code.zip HEAD

# Or for a specific branch/commit
git archive --format=zip --output=consentbit-source-code.zip main
```

### Using Manual Archive
```bash
# Create a directory with all source files
mkdir consentbit-source-review
cp -r src/ consentbit-source-review/
cp -r public/ consentbit-source-review/
cp package.json consentbit-source-review/
cp tsconfig.json consentbit-source-review/
cp webpack.config.mjs consentbit-source-review/
cp webflow.json consentbit-source-review/
cp README.md consentbit-source-review/
cp SOURCE_CODE_INVENTORY.md consentbit-source-review/

# Create zip archive
zip -r consentbit-source-code.zip consentbit-source-review/
```

## Option 3: Individual File Export

For specific security review, you can export key files individually:

### Core Application Files
- `src/App.tsx` - Main application logic (84KB, 2241 lines)
- `src/components/Script.tsx` - Script scanning component (44KB, 832 lines)
- `src/components/Customization.tsx` - UI customization (33KB, 698 lines)

### Security-Critical Files
- `src/util/Encryption-Utils.ts` - Encryption implementation
- `src/util/Secure-Data.ts` - Data security handling
- `src/services/api.ts` - All API communications
- `src/hooks/ccpaPreference.ts` - Privacy compliance (21KB, 488 lines)
- `src/hooks/gdprPreference.ts` - Privacy compliance (23KB, 597 lines)

### Configuration Files
- `webpack.config.mjs` - Build configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## What Security Team Should Review

### 1. Data Handling and Privacy
- **File**: `src/hooks/ccpaPreference.ts` and `src/hooks/gdprPreference.ts`
- **Focus**: How user preferences are stored, processed, and transmitted
- **Compliance**: GDPR/CCPA compliance implementation

### 2. Encryption and Security
- **File**: `src/util/Encryption-Utils.ts` and `src/util/Secure-Data.ts`
- **Focus**: Encryption algorithms, key management, data protection
- **Standards**: Industry-standard encryption practices

### 3. API Communications
- **File**: `src/services/api.ts`
- **Focus**: All external API calls, data transmission, authentication
- **Security**: HTTPS usage, data validation, error handling

### 4. Script Scanning Logic
- **File**: `src/components/Script.tsx`
- **Focus**: How third-party scripts are detected and categorized
- **Privacy**: What data is collected during scanning

### 5. Main Application Logic
- **File**: `src/App.tsx`
- **Focus**: Overall data flow, state management, user interactions
- **Integration**: How all components work together

## Build Process Transparency

The `webpack.config.mjs` file shows exactly how the source code is compiled into `bundle.js`. This demonstrates:

1. **No Obfuscation**: Source code is only minified, not obfuscated
2. **Transparent Build**: Every source file is traceable to bundle output
3. **Dependency Management**: All third-party dependencies are clearly listed
4. **Development vs Production**: Clear distinction between development and production builds

## Security Review Checklist

When providing the source code, include this checklist for your security team:

- [ ] **Complete Source Access**: All TypeScript/React source files provided
- [ ] **No Obfuscation**: Code is in plaintext, only minified for production
- [ ] **Privacy Compliance**: GDPR/CCPA implementation reviewed
- [ ] **Data Encryption**: Encryption methods and key management
- [ ] **API Security**: All external communications and data transmission
- [ ] **Third-Party Dependencies**: All npm packages and their purposes
- [ ] **Build Process**: How source code becomes production bundle
- [ ] **Configuration**: All environment variables and settings
- [ ] **Asset Handling**: How images and static files are processed
- [ ] **Error Handling**: How errors and edge cases are managed

## Response to Security Team

You can respond to your security team with:

> "I understand your concern about the `CMP_Script` being only a small part of the application. You're absolutely right - the `bundle.js` contains the compiled version of our complete React/TypeScript application.
> 
> I've provided you with access to the complete source code repository, which contains:
> - **25+ TypeScript/React source files** (~300KB of plaintext code)
> - **15,000+ lines of code** across all components and utilities
> - **Complete build configuration** showing how source becomes bundle.js
> - **All security-relevant files** including encryption, API calls, and privacy compliance
> 
> The `bundle.js` file is simply the minified (not obfuscated) version of all this source code. Every function, API call, and data flow in the application is visible in the plaintext source files.
> 
> Please review the `SOURCE_CODE_INVENTORY.md` file for a complete breakdown of all source files and their purposes. The security-critical files are highlighted for your review." 