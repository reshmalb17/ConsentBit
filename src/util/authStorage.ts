/**
 * Authentication Storage Utility
 * Uses sessionStorage for authentication data (cleared when tab closes)
 * Uses localStorage for other persistent app data
 */

export interface AuthData {
  sessionToken: string;
  firstName: string;
  email: string;
  siteId: string;
  exp: number;
}

export interface SiteInfo {
  siteId: string;
  name: string;
  shortName: string;
  // Add other site info properties as needed
}

// Authentication keys that should use sessionStorage
const AUTH_KEYS = [
  'consentbit-userinfo',
  'siteInfo',
  'explicitly_logged_out'
];

/**
 * Check if a key is an authentication key
 */
function isAuthKey(key: string): boolean {
  return AUTH_KEYS.includes(key) || key.includes('consentbit-userinfo') || key.includes('wf_hybrid_user');
}

/**
 * Get storage instance based on key type
 */
function getStorage(key: string): Storage {
  return isAuthKey(key) ? sessionStorage : localStorage;
}

/**
 * Set item in appropriate storage
 */
export function setAuthStorageItem(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  
  const storage = getStorage(key);
  storage.setItem(key, value);
  
  console.log(`🔐 Stored ${isAuthKey(key) ? 'auth' : 'app'} data in ${isAuthKey(key) ? 'sessionStorage' : 'localStorage'}:`, key);
}

/**
 * Get item from appropriate storage
 */
export function getAuthStorageItem(key: string): string | null {
  if (typeof window === 'undefined') return null;
  
  const storage = getStorage(key);
  return storage.getItem(key);
}

/**
 * Remove item from appropriate storage
 */
export function removeAuthStorageItem(key: string): void {
  if (typeof window === 'undefined') return;
  
  const storage = getStorage(key);
  storage.removeItem(key);
  
  console.log(`🗑️ Removed ${isAuthKey(key) ? 'auth' : 'app'} data from ${isAuthKey(key) ? 'sessionStorage' : 'localStorage'}:`, key);
}

/**
 * Clear all authentication data (sessionStorage)
 */
export function clearAuthData(): void {
  if (typeof window === 'undefined') return;
  
  const keysToRemove: string[] = [];
  
  // Clear from sessionStorage
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key && isAuthKey(key)) {
      sessionStorage.removeItem(key);
      keysToRemove.push(key);
    }
  }
  
  // Also clear from localStorage (for migration purposes)
  AUTH_KEYS.forEach(key => {
    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
      keysToRemove.push(key);
    }
  });
  
  console.log('🧹 Cleared authentication data:', keysToRemove);
}

/**
 * Clear all app data (localStorage) but preserve auth data
 */
export function clearAppData(): void {
  if (typeof window === 'undefined') return;
  
  const keysToRemove: string[] = [];
  
  // Get all localStorage keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && !isAuthKey(key)) {
      localStorage.removeItem(key);
      keysToRemove.push(key);
    }
  }
  
  console.log('🧹 Cleared app data:', keysToRemove);
}

/**
 * Clear all data (both localStorage and sessionStorage)
 */
export function clearAllData(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.clear();
  sessionStorage.clear();
  
  console.log('🧹 Cleared all data from both localStorage and sessionStorage');
}

/**
 * Get authentication data from sessionStorage
 */
export function getAuthData(): AuthData | null {
  const authData = getAuthStorageItem('consentbit-userinfo');
  if (!authData) return null;
  
  try {
    return JSON.parse(authData);
  } catch (error) {
    console.error('Error parsing auth data:', error);
    return null;
  }
}

/**
 * Set authentication data in sessionStorage
 */
export function setAuthData(authData: AuthData): void {
  setAuthStorageItem('consentbit-userinfo', JSON.stringify(authData));
}

/**
 * Get site info from sessionStorage
 */
export function getSiteInfo(): SiteInfo | null {
  const siteInfo = getAuthStorageItem('siteInfo');
  if (!siteInfo) return null;
  
  try {
    return JSON.parse(siteInfo);
  } catch (error) {
    console.error('Error parsing site info:', error);
    return null;
  }
}

/**
 * Set site info in sessionStorage
 */
export function setSiteInfo(siteInfo: SiteInfo): void {
  setAuthStorageItem('siteInfo', JSON.stringify(siteInfo));
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  const authData = getAuthData();
  if (!authData) return false;
  
  // Check if token is expired
  const now = Math.floor(Date.now() / 1000);
  return authData.exp > now;
}

/**
 * Migration function to move existing auth data from localStorage to sessionStorage
 */
export function migrateAuthDataToSessionStorage(): void {
  if (typeof window === 'undefined') return;
  
  console.log('🔄 Migrating authentication data from localStorage to sessionStorage...');
  
  AUTH_KEYS.forEach(key => {
    const value = localStorage.getItem(key);
    if (value) {
      sessionStorage.setItem(key, value);
      localStorage.removeItem(key);
      console.log(`✅ Migrated ${key} to sessionStorage`);
    }
  });
  
  // Also migrate any site-specific auth keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.includes('consentbit-userinfo') || key.includes('wf_hybrid_user'))) {
      const value = localStorage.getItem(key);
      if (value) {
        sessionStorage.setItem(key, value);
        localStorage.removeItem(key);
        console.log(`✅ Migrated ${key} to sessionStorage`);
      }
    }
  }
  
  console.log('✅ Migration completed');
}

/**
 * Debug function to show current storage state
 */
export function debugStorageState(): void {
  if (typeof window === 'undefined') return;
  
  console.log('🔍 Current Storage State:');
  console.log('📦 localStorage keys:', Object.keys(localStorage));
  console.log('🔐 sessionStorage keys:', Object.keys(sessionStorage));
  
  const authData = getAuthData();
  const siteInfo = getSiteInfo();
  
  console.log('👤 Auth data:', authData);
  console.log('🏢 Site info:', siteInfo);
  console.log('✅ Is authenticated:', isAuthenticated());
}
