// src/util/session.ts
import { getAuthStorageItem, removeAuthStorageItem } from './authStorage';

export function getSessionTokenFromLocalStorage() {
  // COMMENTED OUT: const userinfo = localStorage.getItem("consentbit-userinfo");
  const userinfo = getAuthStorageItem("consentbit-userinfo");
  if (!userinfo) return null;
  try {
    const tokenss = JSON.parse(userinfo);
    return tokenss?.sessionToken || null;
  } catch {
    // Invalid JSON, clear it
    // COMMENTED OUT: localStorage.removeItem("consentbit-userinfo");
    removeAuthStorageItem("consentbit-userinfo");
    return null;
  }
}
