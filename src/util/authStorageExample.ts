/**
 * Example usage of the new sessionStorage-based authentication system
 * This file demonstrates how to use the authStorage utilities
 */

import { 
  setAuthData, 
  getAuthData, 
  setSiteInfo, 
  getSiteInfo, 
  isAuthenticated, 
  clearAuthData,
  debugStorageState,
  migrateAuthDataToSessionStorage
} from './authStorage';

// Example: Setting authentication data
export function exampleSetAuth() {
  const authData = {
    sessionToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    firstName: 'John',
    email: 'john@example.com',
    siteId: '68b6f97a340de1e96cb8c175',
    exp: Math.floor(Date.now() / 1000) + 3600 // 1 hour from now
  };
  
  setAuthData(authData);
  console.log('✅ Authentication data stored in sessionStorage');
}

// Example: Setting site information
export function exampleSetSiteInfo() {
  const siteInfo = {
    siteId: '68b6f97a340de1e96cb8c175',
    name: 'My Website',
    shortName: 'my-site'
  };
  
  setSiteInfo(siteInfo);
  console.log('✅ Site info stored in sessionStorage');
}

// Example: Checking authentication status
export function exampleCheckAuth() {
  const isAuth = isAuthenticated();
  console.log('🔐 User is authenticated:', isAuth);
  
  if (isAuth) {
    const authData = getAuthData();
    const siteInfo = getSiteInfo();
    console.log('👤 User data:', authData);
    console.log('🏢 Site info:', siteInfo);
  }
  
  return isAuth;
}

// Example: Clearing authentication data
export function exampleLogout() {
  clearAuthData();
  console.log('🚪 User logged out - auth data cleared from sessionStorage');
}

// Example: Debug current storage state
export function exampleDebugStorage() {
  debugStorageState();
}

// Example: Manual migration (usually done automatically)
export function exampleMigration() {
  migrateAuthDataToSessionStorage();
  console.log('🔄 Migration completed');
}

// Example: Complete authentication flow
export function exampleAuthFlow() {
  console.log('🚀 Starting authentication flow example...');
  
  // 1. Check if already authenticated
  if (isAuthenticated()) {
    console.log('✅ Already authenticated');
    return;
  }
  
  // 2. Set up authentication data
  exampleSetAuth();
  exampleSetSiteInfo();
  
  // 3. Verify authentication
  const isAuth = exampleCheckAuth();
  
  if (isAuth) {
    console.log('🎉 Authentication flow completed successfully!');
  } else {
    console.log('❌ Authentication failed');
  }
  
  // 4. Debug storage state
  exampleDebugStorage();
}

// Make functions available globally for testing
if (typeof window !== 'undefined') {
  (window as any).authExamples = {
    setAuth: exampleSetAuth,
    setSiteInfo: exampleSetSiteInfo,
    checkAuth: exampleCheckAuth,
    logout: exampleLogout,
    debugStorage: exampleDebugStorage,
    migration: exampleMigration,
    authFlow: exampleAuthFlow
  };
  
  console.log('🔧 Auth examples available globally as window.authExamples');
}
