// src/util/session.ts
export function getSessionTokenFromLocalStorage() {
  const userinfo = localStorage.getItem("wf_hybrid_user");
  if (!userinfo) return null;
  try {
    const tokenss = JSON.parse(userinfo);
    return tokenss?.sessionToken || null;
  } catch {
    // Invalid JSON, clear it
    localStorage.removeItem("wf_hybrid_user");
    return null;
  }
}
