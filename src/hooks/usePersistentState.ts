import React, { useState, useEffect } from 'react';

// Function to migrate old data to new site-specific format
function migrateOldData(siteId: string): void {
  if (typeof window === 'undefined') return;
  
  // Check if migration has already been done for this site
  const migrationKey = `migration_done_${siteId}`;
  if (localStorage.getItem(migrationKey)) {
    return; // Migration already done
  }
  
  // Double-check authorization before migrating
  const userInfo = localStorage.getItem('consentbit-userinfo');
  if (!userInfo) {
    return; // No auth data, don't migrate
  }
  
  try {
    const parsed = JSON.parse(userInfo);
    if (!parsed?.sessionToken || !parsed?.email) {
      return; // Not properly authorized, don't migrate
    }
  } catch (error) {
    return; // Invalid auth data, don't migrate
  }
  
  const oldKeys = [
    'isWelcomeScreen', 'isSetUpStep', 'isWelcomeScipt', 'isConfirmPublish', 'isSuccessPublish', 'isCustomizationTab',
    'showPopup', 'showSuccessPopup', 'showAuthPopup', 'showLoadingPopup', 'showChoosePlan', 'showCSVExportAdvanced', 'showWelcomeScreen', 'showSetSetup', 'showPopupWelcomeSetup',
    'showTooltip', 'fadeOut',
    'isExporting', 'isCSVButtonLoading',
    'isSubscribed', 'fetchScripts',
    'userlocaldata', 'sessionTokenFromLocalStorage', 'wf_hybrid_user',
    'script_isSaving', 'script_saveStatus', 'script_showPopup', 'script_isLoading', 'script_showAuthPopup', 'script_copiedScriptIndex',
    'scriptContext_scripts',
    'color', 'bgColor', 'btnColor', 'paraColor', 'secondcolor', 'bgColors', 'headColor', 'secondbuttontext', 'primaryButtonText',
    'size', 'font', 'weight', 'borderRadius', 'buttonRadius', 'cookieExpiration',
    'activeTab', 'activeMode', 'selected', 'selectedOption', 'selectedOptions', 'selectedtext', 'style',
    'expires', 'buttonText',
    'animation', 'easing', 'language',
    'toggleStates',
    'bannerAddedThroughWelcome',
    'skipWelcomeScreen'
  ];
  
  let migratedCount = 0;
  
  oldKeys.forEach(oldKey => {
    const oldValue = localStorage.getItem(oldKey);
    if (oldValue !== null) {
      // Special handling for bannerAddedThroughWelcome -> isBannerAdded
      if (oldKey === 'bannerAddedThroughWelcome') {
        const newKey = `${siteId}_isBannerAdded`;
        localStorage.setItem(newKey, oldValue);
        localStorage.removeItem(oldKey);
        migratedCount++;
      } else if (oldKey === 'wf_hybrid_user') {
        // Special handling for wf_hybrid_user -> consentbit-userinfo
        const newKey = `${siteId}_consentbit-userinfo`;
        localStorage.setItem(newKey, oldValue);
        localStorage.removeItem(oldKey);
        migratedCount++;
      } else {
        const newKey = `${siteId}_${oldKey}`;
        localStorage.setItem(newKey, oldValue);
        localStorage.removeItem(oldKey); // Remove old key after migration
        migratedCount++;
      }
    }
  });

  // Also check for old isBannerAdded key and migrate it
  const oldIsBannerAdded = localStorage.getItem('isBannerAdded');
  if (oldIsBannerAdded !== null) {
    const newKey = `${siteId}_isBannerAdded`;
    localStorage.setItem(newKey, oldIsBannerAdded);
    localStorage.removeItem('isBannerAdded');
    migratedCount++;
  }

  // Mark migration as complete
  localStorage.setItem(migrationKey, 'true');
}

// Function to get site-specific key
function getSiteSpecificKey(key: string): string {
  if (typeof window === 'undefined') return key;
  
  // Special case: siteInfo should not be prefixed as it's used to determine the prefix
  if (key === 'siteInfo') {
    return key;
  }
  
  // Check if user is authorized first
  const userInfo = localStorage.getItem('consentbit-userinfo');
  if (!userInfo) {
    // User not authorized - use default key without site prefix
    return key;
  }
  
  try {
    const parsed = JSON.parse(userInfo);
    // Check if user has valid session token and email (firstName can be empty/undefined)
    if (!parsed?.sessionToken || !parsed?.email) {
      // User not properly authorized - use default key without site prefix
      return key;
    }
  } catch (error) {
    // Invalid auth data - use default key without site prefix
    return key;
  }

  // Special case: siteInfo should only be set after explicit authorization
  if (key === 'siteInfo') {
    // Check if siteInfo already exists - if not, don't allow setting it yet
    const existingSiteInfo = localStorage.getItem('siteInfo');
    if (!existingSiteInfo) {
      // Don't allow setting siteInfo until user explicitly authorizes
      return key;
    }
  }
  
  // User is authorized - now get site-specific key
  const siteInfo = localStorage.getItem('siteInfo');
  let siteId = 'default';
  
  if (siteInfo) {
    try {
      const parsed = JSON.parse(siteInfo);
      siteId = parsed.siteId || parsed.shortName || 'default';
    } catch (e) {
      siteId = 'default';
    }
  }
  
  // If no site info, try to get from current URL
  if (siteId === 'default' && window.location.hostname) {
    // Extract site name from Webflow URL
    const hostname = window.location.hostname;
    
    if (hostname.includes('webflow.com')) {
      // For webflow.com domains, use the subdomain as site identifier
      const parts = hostname.split('.');
      if (parts.length > 2) {
        siteId = parts[0]; // e.g., "mysite" from "mysite.webflow.com"
      }
    } else {
      // For custom domains and localhost, use the full hostname
      siteId = hostname.replace(/[^a-zA-Z0-9]/g, '_');
    }
  }
  
  // IMPORTANT: Only migrate and use site-specific keys if user is authorized AND we have a valid siteId
  if (siteId !== 'default') {
    // Double-check authorization before migrating
    const userInfo = localStorage.getItem('consentbit-userinfo');
    if (userInfo) {
      try {
        const parsed = JSON.parse(userInfo);
        if (parsed?.sessionToken && parsed?.email) {
          // User is properly authorized - migrate and use site-specific key
          migrateOldData(siteId);
          return `${siteId}_${key}`;
        }
      } catch (error) {
        // Invalid auth data - don't migrate, use default key
      }
    }
    // If we get here, user is not authorized - don't migrate, use default key
  }
  
  // Use default key (no site prefix) if not authorized or no valid siteId
  return key;
}

// Utility function to get current site ID
export function getCurrentSiteId(): string {
  if (typeof window === 'undefined') return 'default';
  
  // Check if user is authorized first
  const userInfo = localStorage.getItem('consentbit-userinfo');
  if (!userInfo) {
    // User not authorized - return default
    return 'default';
  }
  
  try {
    const parsed = JSON.parse(userInfo);
    // Check if user has valid session token and email (firstName can be empty/undefined)
    if (!parsed?.sessionToken || !parsed?.email) {
      // User not properly authorized - return default
      return 'default';
    }
  } catch (error) {
    // Invalid auth data - return default
    return 'default';
  }
  
  // User is authorized - now get site ID
  const siteInfo = localStorage.getItem('siteInfo');
  if (siteInfo) {
    try {
      const parsed = JSON.parse(siteInfo);
      return parsed.siteId || parsed.shortName || 'default';
    } catch (e) {
      return 'default';
    }
  }
  
  if (window.location.hostname) {
    const hostname = window.location.hostname;
    
    if (hostname.includes('webflow.com')) {
      const parts = hostname.split('.');
      if (parts.length > 2) {
        return parts[0];
      }
    } else {
      return hostname.replace(/[^a-zA-Z0-9]/g, '_');
    }
  }
  
  return 'default';
}

// Utility function to clear all data for current site
export function clearCurrentSiteData(includeAuth: boolean = false): void {
  if (typeof window === 'undefined') return;
  
  const siteId = getCurrentSiteId();
  const keysToRemove: string[] = [];
  
  // Find all keys that belong to current site
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(`${siteId}_`)) {
      keysToRemove.push(key);
    }
  }
  
  // Remove all site-specific keys
  keysToRemove.forEach(key => localStorage.removeItem(key));
  
  // Also clear authentication data if requested
  if (includeAuth) {
    const authKeys = ['consentbit-userinfo', 'wf_hybrid_user', 'siteInfo'];
    authKeys.forEach(key => {
      if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
        keysToRemove.push(key);
      }
    });
  }
  

}

// Utility function to clear ALL data including authentication
export function clearAllData(): void {
  if (typeof window === 'undefined') return;
  
  const siteId = getCurrentSiteId();
  const keysToRemove: string[] = [];
  
  // Find all keys that belong to current site
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(`${siteId}_`)) {
      keysToRemove.push(key);
    }
  }
  
  // Remove all site-specific keys
  keysToRemove.forEach(key => localStorage.removeItem(key));
  
  // Clear authentication data
  const authKeys = ['consentbit-userinfo', 'wf_hybrid_user', 'siteInfo'];
  authKeys.forEach(key => {
    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
      keysToRemove.push(key);
    }
  });
  
  // Clear old non-prefixed keys
  const oldKeys = [
    'isWelcomeScreen', 'isSetUpStep', 'isWelcomeScipt', 'isConfirmPublish', 'isSuccessPublish', 'isCustomizationTab',
    'showPopup', 'showSuccessPopup', 'showAuthPopup', 'showLoadingPopup', 'showChoosePlan', 'showCSVExportAdvanced', 'showWelcomeScreen', 'showSetSetup', 'showPopupWelcomeSetup',
    'showTooltip', 'fadeOut', 'isExporting', 'isCSVButtonLoading', 'isSubscribed', 'fetchScripts',
    'userlocaldata', 'sessionTokenFromLocalStorage', 'script_isSaving', 'script_saveStatus', 'script_showPopup', 
    'script_isLoading', 'script_showAuthPopup', 'script_copiedScriptIndex', 'scriptContext_scripts',
    'bannerAddedThroughWelcome', 'isBannerAdded', 'skipWelcomeScreen'
  ];
  
  oldKeys.forEach(key => {
    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
      keysToRemove.push(key);
    }
  });
  

}

// Utility function to clear only authentication data
export function clearAuthData(): void {
  if (typeof window === 'undefined') return;
  
  const authKeys = ['consentbit-userinfo', 'wf_hybrid_user', 'siteInfo', 'explicitly_logged_out'];
  const keysToRemove: string[] = [];
  
  authKeys.forEach(key => {
    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
      keysToRemove.push(key);
    }
  });
  
  // Also clear any site-specific auth keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.includes('consentbit-userinfo') || key.includes('wf_hybrid_user'))) {
      localStorage.removeItem(key);
      keysToRemove.push(key);
    }
  }
  

}

// Utility function to set site info after authorization
export function setSiteInfoAfterAuth(siteInfo: { siteId: string; siteName: string; shortName: string }): void {
  if (typeof window === 'undefined') return;
  
  // Check if user is authorized
  const userInfo = localStorage.getItem('consentbit-userinfo');
  if (!userInfo) {
    return;
  }
  
  try {
    const parsed = JSON.parse(userInfo);
    if (!parsed?.sessionToken || !parsed?.firstName || !parsed?.email) {
      return;
    }
  } catch (error) {
    return;
  }
  
  // User is authorized - set site info
  localStorage.setItem('siteInfo', JSON.stringify(siteInfo));
}

// Utility function to check if user can set site info
export function canSetSiteInfo(): boolean {
  if (typeof window === 'undefined') return false;
  
  const userInfo = localStorage.getItem('consentbit-userinfo');
  if (!userInfo) return false;
  
  try {
    const parsed = JSON.parse(userInfo);
    return !!(parsed?.sessionToken && parsed?.firstName && parsed?.email);
  } catch (error) {
    return false;
  }
}

// Debug function to check auth status
export function debugAuthStatus(): void {
  if (typeof window === 'undefined') return;
  
  const userInfo = localStorage.getItem('consentbit-userinfo');
  const wfHybridUser = localStorage.getItem('wf_hybrid_user');
  const siteInfo = localStorage.getItem('siteInfo');
  const explicitlyLoggedOut = localStorage.getItem('explicitly_logged_out');
  
  if (userInfo) {
    try {
      const parsed = JSON.parse(userInfo);
    } catch (error) {
      // Auth data is corrupted
    }
  }
  
  if (wfHybridUser) {
    try {
      const parsed = JSON.parse(wfHybridUser);
    } catch (error) {
      // Auth data is corrupted
    }
  }
}

// Force clear all auth data and prevent restoration
export function forceClearAuthData(): void {
  if (typeof window === 'undefined') return;
  
  // Clear all auth-related keys
  const authKeys = ['consentbit-userinfo', 'wf_hybrid_user', 'siteInfo', 'explicitly_logged_out'];
  authKeys.forEach(key => localStorage.removeItem(key));
  
  // Clear any site-specific auth keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.includes('consentbit-userinfo') || key.includes('wf_hybrid_user'))) {
      localStorage.removeItem(key);
    }
  }
  
  // Set explicitly logged out flag to prevent restoration
  localStorage.setItem('explicitly_logged_out', 'true');
  

}

// Utility function to clear authentication data if user is not authorized
export function clearAuthIfNotAuthorized(): void {
  if (typeof window === 'undefined') return;
  
  const userInfo = localStorage.getItem('consentbit-userinfo');
  if (!userInfo) {
    return;
  }
  
  try {
    const parsed = JSON.parse(userInfo);
    // Check if user has valid session token and email (firstName can be empty/undefined)
    if (!parsed?.sessionToken || !parsed?.email) {
      clearAuthData();
      // Also clear site info if user is not authorized
      localStorage.removeItem('siteInfo');
    }
  } catch (error) {
    clearAuthData();
    // Also clear site info if auth data is corrupted
    localStorage.removeItem('siteInfo');
  }
}

// Utility function to list all data for current site
export function listCurrentSiteData(): Record<string, any> {
  if (typeof window === 'undefined') return {};
  
  const siteId = getCurrentSiteId();
  const siteData: Record<string, any> = {};
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(`${siteId}_`)) {
      try {
        const value = localStorage.getItem(key);
        siteData[key] = value ? JSON.parse(value) : value;
      } catch (e) {
        siteData[key] = localStorage.getItem(key);
      }
    }
  }
  
  return siteData;
}

// Utility function to check migration status
export function checkMigrationStatus(): { migrated: boolean; oldKeysFound: number; newKeysFound: number } {
  if (typeof window === 'undefined') return { migrated: false, oldKeysFound: 0, newKeysFound: 0 };
  
  const siteId = getCurrentSiteId();
  const migrationKey = `migration_done_${siteId}`;
  const migrated = localStorage.getItem(migrationKey) === 'true';
  
  const oldKeys = [
    'isWelcomeScreen', 'isSetUpStep', 'isWelcomeScipt', 'isConfirmPublish', 'isSuccessPublish', 'isCustomizationTab',
    'showPopup', 'showSuccessPopup', 'showAuthPopup', 'showLoadingPopup', 'showChoosePlan', 'showCSVExportAdvanced', 'showWelcomeScreen', 'showSetSetup', 'showPopupWelcomeSetup',
    'showTooltip', 'fadeOut', 'isExporting', 'isCSVButtonLoading', 'isSubscribed', 'fetchScripts',
    'userlocaldata', 'sessionTokenFromLocalStorage', 'wf_hybrid_user', 'script_isSaving', 'script_saveStatus', 'script_showPopup', 
    'script_isLoading', 'script_showAuthPopup', 'script_copiedScriptIndex', 'scriptContext_scripts',
    'bannerAddedThroughWelcome', 'skipWelcomeScreen'
    
  ];
  
  let oldKeysFound = 0;
  let newKeysFound = 0;
  
  oldKeys.forEach(key => {
    if (localStorage.getItem(key) !== null) oldKeysFound++;
    // Special handling for bannerAddedThroughWelcome -> isBannerAdded
    if (key === 'bannerAddedThroughWelcome') {
      if (localStorage.getItem(`${siteId}_isBannerAdded`) !== null) newKeysFound++;
    } else if (key === 'wf_hybrid_user') {
      // Special handling for wf_hybrid_user -> consentbit-userinfo
      if (localStorage.getItem(`${siteId}_consentbit-userinfo`) !== null) newKeysFound++;
    } else {
      if (localStorage.getItem(`${siteId}_${key}`) !== null) newKeysFound++;
    }
  });

  // Also check for old isBannerAdded key
  if (localStorage.getItem('isBannerAdded') !== null) oldKeysFound++;
  if (localStorage.getItem(`${siteId}_isBannerAdded`) !== null) newKeysFound++;

  // Also check for old wf_hybrid_user key
  if (localStorage.getItem('wf_hybrid_user') !== null) oldKeysFound++;
  if (localStorage.getItem(`${siteId}_consentbit-userinfo`) !== null) newKeysFound++;

  // Also check for old localhost keys and migrate them to dev_localhost
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('localhost_')) {
      oldKeysFound++;
      const newKey = key.replace('localhost_', 'dev_localhost_');
      if (localStorage.getItem(newKey) !== null) newKeysFound++;
    }
  }
  
  return { migrated, oldKeysFound, newKeysFound };
}

// Utility function to force migration
export function forceMigration(): void {
  if (typeof window === 'undefined') return;
  
  const siteId = getCurrentSiteId();
  const migrationKey = `migration_done_${siteId}`;
  localStorage.removeItem(migrationKey); // Remove migration flag
  migrateOldData(siteId); // Run migration again
}

function usePersistentState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const siteSpecificKey = getSiteSpecificKey(key);
  
  // Check if user is authorized for siteInfo
  const isAuthorized = (() => {
    if (key === 'siteInfo') {
      const userInfo = localStorage.getItem('consentbit-userinfo');
      if (!userInfo) return false;
      
      try {
        const parsed = JSON.parse(userInfo);
        return !!(parsed?.sessionToken && parsed?.firstName && parsed?.email);
      } catch (error) {
        return false;
      }
    }
    return true; // For other keys, allow setting
  })();
  
  const [state, setState] = useState<T>(() => {
    if (typeof window === 'undefined') return defaultValue;
    
    // If not authorized for siteInfo, return default value
    if (key === 'siteInfo' && !isAuthorized) {
      return defaultValue;
    }
    
    try {
      // First try to get from new site-specific key
      let savedState = localStorage.getItem(siteSpecificKey);
      
      // If not found, try old key (for backward compatibility)
      if (!savedState && key !== 'siteInfo') {
        // Special handling for isBannerAdded -> bannerAddedThroughWelcome
        if (key === 'isBannerAdded') {
          // First try bannerAddedThroughWelcome
          savedState = localStorage.getItem('bannerAddedThroughWelcome');
          if (savedState) {
            localStorage.setItem(siteSpecificKey, savedState);
            localStorage.removeItem('bannerAddedThroughWelcome');
          } else {
            // Then try old isBannerAdded key
            savedState = localStorage.getItem('isBannerAdded');
            if (savedState) {
              localStorage.setItem(siteSpecificKey, savedState);
              localStorage.removeItem('isBannerAdded');
            }
          }
        } else if (key === 'consentbit-userinfo') {
          // Special handling for consentbit-userinfo -> wf_hybrid_user
          savedState = localStorage.getItem('wf_hybrid_user');
          if (savedState) {
            localStorage.setItem(siteSpecificKey, savedState);
            localStorage.removeItem('wf_hybrid_user');
          }
        } else {
          savedState = localStorage.getItem(key);
          // If found in old key, migrate it immediately
          if (savedState) {
            localStorage.setItem(siteSpecificKey, savedState);
            localStorage.removeItem(key);
          }
        }

        // Also check for old localhost keys and migrate them
        if (!savedState && siteSpecificKey.startsWith('dev_localhost_')) {
          const localhostKey = siteSpecificKey.replace('dev_localhost_', 'localhost_');
          savedState = localStorage.getItem(localhostKey);
          if (savedState) {
            localStorage.setItem(siteSpecificKey, savedState);
            localStorage.removeItem(localhostKey);
          }
        }
      }
      
      if (!savedState || savedState === "undefined") return defaultValue;
      return JSON.parse(savedState);
    } catch (e) {
      return defaultValue;
    }
  });

  // Create a wrapped setState that respects authorization
  const authorizedSetState = React.useCallback((newState: React.SetStateAction<T>) => {
    // For siteInfo, only allow setting if authorized
    if (key === 'siteInfo' && !isAuthorized) {
      return;
    }
    
    // Always update the state, but localStorage will be handled in useEffect
    setState(newState);
  }, [key, isAuthorized]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Special handling for siteInfo - only allow setting if user is authorized
      if (key === 'siteInfo') {
        const userInfo = localStorage.getItem('consentbit-userinfo');
        if (!userInfo) {
          return;
        }
        
        try {
          const parsed = JSON.parse(userInfo);
          if (!parsed?.sessionToken || !parsed?.email) {
            return;
          }
        } catch (error) {
          return;
        }
      }
      
      // Always save to localStorage for non-siteInfo keys, or for siteInfo if authorized
      localStorage.setItem(siteSpecificKey, JSON.stringify(state));
    }
  }, [siteSpecificKey, state, key]);

  return [state, authorizedSetState];
}

export { usePersistentState };
