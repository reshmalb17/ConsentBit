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
  name?: string;
  siteName?: string;
  shortName: string;
  url?: string;
  // Add other site info properties as needed
}

// ALL keys now use sessionStorage (commented out localStorage usage)
const ALL_KEYS = [
  'consentbit-userinfo',
  'siteInfo',
  'explicitly_logged_out',
  'cookiePreferences',
  'selectedOptions',
  'scriptContext_scripts',
  'cookieBannerAdded',
  'bannerAdded',
  'wf_hybrid_user'
];

/**
 * Check if a key should use sessionStorage (now all keys do)
 */
function isSessionStorageKey(key: string): boolean {
  return true; // All keys now use sessionStorage
}

/**
 * Get storage instance - now always sessionStorage
 */
function getStorage(key: string): Storage {
  return sessionStorage; // Always use sessionStorage now
}

/**
 * Set item in appropriate storage
 */
export function setAuthStorageItem(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  
  const storage = getStorage(key);
  storage.setItem(key, value);
  
  console.log(`🔐 Stored data in sessionStorage:`, key);
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
  
  console.log(`🗑️ Removed data from sessionStorage:`, key);
}

/**
 * Clear all data (sessionStorage only now)
 */
export function clearAuthData(): void {
  if (typeof window === 'undefined') return;
  
  const keysToRemove: string[] = [];
  
  // Clear from sessionStorage
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key) {
      sessionStorage.removeItem(key);
      keysToRemove.push(key);
    }
  }
  
  // COMMENTED OUT: Also clear from localStorage (for migration purposes)
  // AUTH_KEYS.forEach(key => {
  //   if (localStorage.getItem(key) !== null) {
  //     localStorage.removeItem(key);
  //     keysToRemove.push(key);
  //   }
  // });
  
  console.log('🧹 Cleared all data from sessionStorage:', keysToRemove);
}

/**
 * COMMENTED OUT: Clear all app data (localStorage) but preserve auth data
 * Now everything is in sessionStorage
 */
export function clearAppData(): void {
  if (typeof window === 'undefined') return;
  
  // COMMENTED OUT: localStorage usage
  // const keysToRemove: string[] = [];
  
  // // Get all localStorage keys
  // for (let i = 0; i < localStorage.length; i++) {
  //   const key = localStorage.key(i);
  //   if (key && !isAuthKey(key)) {
  //     localStorage.removeItem(key);
  //     keysToRemove.push(key);
  //   }
  // }
  
  console.log('🧹 clearAppData: All data now in sessionStorage, no localStorage to clear');
}

/**
 * Clear all data (sessionStorage only now)
 */
export function clearAllData(): void {
  if (typeof window === 'undefined') return;
  
  // COMMENTED OUT: localStorage.clear();
  sessionStorage.clear();
  
  console.log('🧹 Cleared all data from sessionStorage');
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
 * Migration function to move existing data from localStorage to sessionStorage
 */
export function migrateAuthDataToSessionStorage(): void {
  if (typeof window === 'undefined') return;
  
  console.log('🔄 [DEBUG] Migration function called');
  const migrationStartTime = performance.now();
  
  // Check if migration has already been completed in this session
  const migrationCompleted = sessionStorage.getItem('migration_completed');
  if (migrationCompleted) {
    console.log('🔄 [DEBUG] Migration already completed, skipping');
    return; // Migration already done, skip expensive operations
  }
  
  console.log('🔄 [DEBUG] Migrating essential data from localStorage to sessionStorage...');
  
  // Only migrate essential keys to avoid expensive operations
  const essentialKeys = ['consentbit-userinfo', 'siteInfo', 'explicitly_logged_out'];
  let migratedCount = 0;
  
  essentialKeys.forEach(key => {
    const value = localStorage.getItem(key);
    if (value) {
      sessionStorage.setItem(key, value);
      localStorage.removeItem(key);
      migratedCount++;
      console.log(`✅ [DEBUG] Migrated ${key} to sessionStorage`);
    }
  });
  
  // Mark migration as completed for this session
  sessionStorage.setItem('migration_completed', 'true');
  console.log(`✅ [DEBUG] Migration completed - migrated ${migratedCount} essential keys to sessionStorage in ${performance.now() - migrationStartTime}ms`);
}

/**
 * Debug function to show current storage state
 */
export function debugStorageState(): void {
  if (typeof window === 'undefined') return;
  
  console.log('🔍 Current Storage State:');
  // COMMENTED OUT: console.log('📦 localStorage keys:', Object.keys(localStorage));
  console.log('🔐 sessionStorage keys:', Object.keys(sessionStorage));
  
  const authData = getAuthData();
  const siteInfo = getSiteInfo();
  
  console.log('👤 Auth data:', authData);
  console.log('🏢 Site info:', siteInfo);
  console.log('✅ Is authenticated:', isAuthenticated());
}
