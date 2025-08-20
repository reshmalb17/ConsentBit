# Complete Source Code Inventory

## Overview
This document provides a complete inventory of all source code files in the ConsentBit cookie consent management application. The `bundle.js` file contains the compiled/minified version of all these TypeScript/React source files.

## Core Application Files

### Main Entry Points
- `src/index.tsx` (920B, 31 lines) - React application entry point
- `src/App.tsx` (84KB, 2241 lines) - Main application component with routing and core logic
- `src/config.ts` (5.6KB, 6 lines) - Application configuration and constants

### Components
- `src/components/Script.tsx` (44KB, 832 lines) - Main script scanning and categorization component
- `src/components/Customization.tsx` (33KB, 698 lines) - UI customization and settings component
- `src/components/ChoosePlan.tsx` (3.1KB, 98 lines) - Plan selection component
- `src/components/NeedHelp.tsx` (2.6KB, 79 lines) - Help and support component
- `src/components/PulseAnimation.tsx` (2.2KB, 63 lines) - Loading animation component

### Context and State Management
- `src/context/ScriptContext.tsx` (925B, 28 lines) - React context for script state management

### Services (API and External Integrations)
- `src/services/api.ts` (7.4KB, 237 lines) - API service layer and HTTP requests
- `src/services/connection.ts` (1.3KB, 44 lines) - WebSocket and real-time connection handling
- `src/services/script-categorization-service.ts` (2.3KB, 72 lines) - Script categorization logic

### Hooks (Custom React Hooks)
- `src/hooks/ccpaPreference.ts` (21KB, 488 lines) - CCPA compliance and preference management
- `src/hooks/gdprPreference.ts` (23KB, 597 lines) - GDPR compliance and preference management
- `src/hooks/userAuth.ts` (8.1KB, 271 lines) - User authentication and session management
- `src/hooks/usePersistentState.ts` (686B, 23 lines) - Persistent state management hook
- `src/hooks/useWebflow.ts` (1.8KB, 63 lines) - Webflow integration hook
- `src/hooks/index.ts` (1.8KB, 62 lines) - Hook exports and utilities

### Utilities
- `src/util/Script-Fetch.tsx` (2.2KB, 84 lines) - Script fetching and parsing utilities
- `src/util/Secure-Data.ts` (1.5KB, 56 lines) - Data security and encryption utilities
- `src/util/Encryption-Utils.ts` (2.4KB, 71 lines) - Encryption and security utilities

### Types and Type Definitions
- `src/types/types.ts` (6.1KB, 236 lines) - Main TypeScript type definitions
- `src/types/webflowtypes.ts` (5.4KB, 163 lines) - Webflow-specific type definitions
- `src/types/env.d.ts` (129B, 7 lines) - Environment variable type definitions
- `src/types/global.d.ts` (238B, 14 lines) - Global type declarations

### Mock Data
- `src/mock/userSubscription.ts` (1.3KB, 37 lines) - Mock subscription data for development

### Styling
- `src/style/styless.css` (50KB, 2871 lines) - Application styles and CSS

### Assets
- `src/assets/` - Contains 100+ SVG, PNG, and other image assets for the UI

## Build Configuration
- `webpack.config.mjs` - Webpack build configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `webflow.json` - Webflow integration configuration

## Public Assets
- `public/` - Contains compiled bundle.js and other static assets
- `public/bundle.js` - The compiled/minified JavaScript bundle (this is what runs in production)

## Total Source Code Size
- **TypeScript/React Source**: ~300KB across 25+ files
- **CSS Styles**: 50KB
- **Assets**: 100+ files
- **Total Lines of Code**: ~15,000+ lines

## Security Considerations
1. **No Obfuscation**: All source code is in plaintext TypeScript/React
2. **No Minification in Source**: Only the production bundle.js is minified
3. **Complete Transparency**: Every function, API call, and data flow is visible in source
4. **Privacy-First**: All data handling follows GDPR/CCPA compliance patterns

## How to Access Complete Source Code
1. **Git Repository**: All source code is available in the Git repository
2. **Development Environment**: Clone the repo and run `npm install` to access all source files
3. **File-by-File Review**: Each file can be reviewed individually for security analysis
4. **Build Process**: The webpack.config.mjs shows exactly how source code is compiled

## Key Security-Relevant Files
- `src/util/Encryption-Utils.ts` - Encryption implementation
- `src/util/Secure-Data.ts` - Data security handling
- `src/hooks/ccpaPreference.ts` - Privacy compliance logic
- `src/hooks/gdprPreference.ts` - Privacy compliance logic
- `src/services/api.ts` - All API communications
- `src/App.tsx` - Main application logic and data flows 