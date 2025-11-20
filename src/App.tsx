import React, { useState,useEffect } from "react";
import "./style/styless.css";
import WelcomeScreen from "./components/WelcomeScreen";
import SetupStep from "./components/SetupStep";
import WelcomeScipt from "./components/WelcomeScript";
import CustomizationTab from "./components/CustomizationTab";
import ConfirmPublish from "./components/ConfirmPublish";
import SuccessPublish from "./components/SuccessPublish";
import { useQueryClient } from "@tanstack/react-query";
import { useAppState } from "./hooks/useAppState";  
import { useAuth } from "./hooks/userAuth";
import { serialize } from "v8";
import { getCurrentSiteId, listCurrentSiteData, clearCurrentSiteData, clearAllData, clearAuthData, clearAuthIfNotAuthorized, checkMigrationStatus, forceMigration, usePersistentState, debugAuthStatus, forceClearAuthData, clearAllDataIncludingAuth } from "./hooks/usePersistentState";
import { customCodeApi } from "./services/api";
import { CodeApplication } from "./types/types";
import { getSessionTokenFromLocalStorage } from './util/Session';
import { removeAuthStorageItem, getAuthStorageItem, setAuthStorageItem, getAuthData } from './util/authStorage';
import webflow from './types/webflowtypes';
import pkg from '../package.json';

// Import images for tooltip
const errorsheild = new URL("./assets/warning-2.svg", import.meta.url).href;
const crossmark = new URL("./assets/group.svg", import.meta.url).href;

const appVersion = pkg.version;






const App: React.FC = () => {


  const queryClient = useQueryClient();
  const [skipWelcomeScreen, setSkipWelcomeScreen] = usePersistentState("skipWelcomeScreen", false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAppInitializing, setIsAppInitializing] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isBannerStatusLoading, setIsBannerStatusLoading] = useState(true);
  const [customizationInitialTab, setCustomizationInitialTab] = useState("Settings");
  
  // Global timing tracking for authorization flow
  const [globalAuthStartTime, setGlobalAuthStartTime] = useState<number | null>(null);
  
  
  const {
    bannerStyles,
    bannerUI,
    bannerConfig,
    bannerBooleans,
    popups,
    tooltips,
    siteData,
    buttons,
    bannerAnimation,
    localStorage: localStorageData,
    componentStates,
  } = useAppState();
  
  // Auto-dismiss tooltip after 5 seconds (same as CustomizationTab and ConfirmPublish)
  useEffect(() => {
    if (tooltips.showTooltip) {
      console.log('[App] Tooltip is showing - starting auto-dismiss timer (5 seconds)');
      const timer = setTimeout(() => {
        console.log('[App] ⏰ Timer fired after 5 seconds - starting fade out');
        tooltips.setFadeOut(true);
        setTimeout(() => {
          console.log('[App] 🎬 Hiding tooltip after fade animation');
          tooltips.setShowTooltip(false);
          tooltips.setFadeOut(false);
          console.log('[App] ✅ Tooltip hidden successfully');
        }, 300); // Wait for fade-out animation
      }, 5000); // 5 seconds
      return () => {
        console.log('[App] 🧹 Cleaning up tooltip timer');
        clearTimeout(timer);
      };
    }
  }, [tooltips.showTooltip, tooltips.setFadeOut, tooltips.setShowTooltip]);
  
  // Track when scan button becomes available
  useEffect(() => {
    const currentTime = performance.now();
    
    // Check if scan button should be available (authenticated && !isCheckingAuth && !isBannerAdded)
  }, [isAuthenticated, isCheckingAuth, bannerBooleans.isBannerAdded, globalAuthStartTime]);

  
  const { user, sessionToken, exchangeAndVerifyIdToken, openAuthScreen, isAuthenticatedForCurrentSite, attemptAutoRefresh } = useAuth();
  const [isFetchWelcomeScripts, setIsFetchWelcomeScripts] = useState(false);
  const [currentSiteId, setCurrentSiteId] = useState<string | null>(null);
  
    // App initialization with clean welcome screen flow
  useEffect(() => {
    const initializeApp = async () => {
      // Always reset to welcome screen on app launch
      console.log("[App] Initializing - resetting to welcome screen");
      setSkipWelcomeScreen(false);
      componentStates.resetComponentStates();
      componentStates.setIsWelcomeScreen(true);
      
      setIsAppInitializing(false);
      setIsCheckingAuth(true);
      
      // Set overall timeout for authorization check (15 seconds)
      const authTimeout = setTimeout(() => {
        console.warn("Authorization check timeout - proceeding with default state");
        setSkipWelcomeScreen(false);
        bannerBooleans.setIsBannerAdded(false);
        setIsAuthenticated(false);
        setIsBannerStatusLoading(false);
        setIsCheckingAuth(false);
      }, 15000);
      
      try {
        // Get existing user data from sessionStorage
        const existingUserDataStr = sessionStorage.getItem("consentbit-userinfo");
        let existingUserData = null;
        if (existingUserDataStr && existingUserDataStr !== "null" && existingUserDataStr !== "undefined") {
          try {
            existingUserData = JSON.parse(existingUserDataStr);
          } catch (e) {
            console.error("Error parsing user data:", e);
          }
        }
        
        // Get current site info from Webflow with timeout
        const siteInfoPromise = webflow.getSiteInfo();
        const siteInfoTimeout = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('getSiteInfo timeout after 5 seconds')), 5000);
        });
        
        let siteInfo;
        try {
          siteInfo = await Promise.race([siteInfoPromise, siteInfoTimeout]);
        } catch (error) {
          console.error("Error getting site info:", error);
          clearTimeout(authTimeout);
          setSkipWelcomeScreen(false);
          bannerBooleans.setIsBannerAdded(false);
          setIsAuthenticated(false);
          setIsBannerStatusLoading(false);
          setIsCheckingAuth(false);
          return;
        }
        
        // If user data doesn't exist, or siteId doesn't match, exchange token and store again
        if (!existingUserData) {
          console.log("No user data found, exchanging token...");
          try {
            const exchangePromise = exchangeAndVerifyIdToken();
            const exchangeTimeout = new Promise((_, reject) => {
              setTimeout(() => reject(new Error('Token exchange timeout after 10 seconds')), 10000);
            });
            await Promise.race([exchangePromise, exchangeTimeout]);
            
            // Re-fetch user data after exchange
            const newUserDataStr = sessionStorage.getItem("consentbit-userinfo");
            if (newUserDataStr && newUserDataStr !== "null" && newUserDataStr !== "undefined") {
              try {
                existingUserData = JSON.parse(newUserDataStr);
              } catch (e) {
                console.error("Error parsing user data after exchange:", e);
              }
            }
          } catch (error: any) {
            console.error("Error exchanging token:", error);
            // Check if it's a server error (500) and log appropriately
            if (error?.message?.includes('500') || error?.message?.includes('Internal server error')) {
              console.warn("Server error during token exchange - this may be a temporary issue. The app will continue with limited functionality.");
            }
            // Continue with default state if token exchange fails
          }
        } else if (existingUserData.siteId && siteInfo?.siteId) {
          if (existingUserData.siteId !== siteInfo.siteId) {
            console.log("Site ID mismatch, exchanging token...", {
              storedSiteId: existingUserData.siteId,
              currentSiteId: siteInfo.siteId
            });
            try {
              const exchangePromise = exchangeAndVerifyIdToken();
              const exchangeTimeout = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Token exchange timeout after 10 seconds')), 10000);
              });
              await Promise.race([exchangePromise, exchangeTimeout]);
              
              // Re-fetch user data after exchange
              const newUserDataStr = sessionStorage.getItem("consentbit-userinfo");
              if (newUserDataStr && newUserDataStr !== "null" && newUserDataStr !== "undefined") {
                try {
                  existingUserData = JSON.parse(newUserDataStr);
                } catch (e) {
                  console.error("Error parsing user data after exchange:", e);
                }
              }
            } catch (error: any) {
              console.error("Error exchanging token:", error);
              // Check if it's a server error (500) and log appropriately
              if (error?.message?.includes('500') || error?.message?.includes('Internal server error')) {
                console.warn("Server error during token exchange - this may be a temporary issue. The app will continue with existing data.");
              }
              // Continue with existing data if token exchange fails
            }
          }
        }
        
        // Get token from existing user data
        const token = existingUserData?.sessionToken;
        
        if (token && siteInfo?.siteId) {
          try {
            // Check banner status from API
            const apiPromise = customCodeApi.getBannerStyles(token, siteInfo.siteId);
            const timeoutPromise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error('API call timeout after 10 seconds')), 10000);
            });
            
            const response = await Promise.race([apiPromise, timeoutPromise]);
            
            // Clear the auth timeout since we completed successfully
            clearTimeout(authTimeout);
            
            // Set banner status based on API response
            if (response && response.isBannerAdded === true) {
              setSkipWelcomeScreen(false);
              bannerBooleans.setIsBannerAdded(true);
              setIsAuthenticated(true);
            } else {
              setSkipWelcomeScreen(false);
              bannerBooleans.setIsBannerAdded(false);
              setIsAuthenticated(!!token);
            }
            setIsBannerStatusLoading(false);
          } catch (error) {
            console.error("Error checking banner status:", error);
            clearTimeout(authTimeout);
            setSkipWelcomeScreen(false);
            bannerBooleans.setIsBannerAdded(false);
            setIsAuthenticated(!!token);
            setIsBannerStatusLoading(false);
          }
        } else {
          // No token or siteId available
          clearTimeout(authTimeout);
          setSkipWelcomeScreen(false);
          bannerBooleans.setIsBannerAdded(false);
          setIsAuthenticated(false);
          setIsBannerStatusLoading(false);
        }
      } catch (error) {
        console.error("Error initializing app:", error);
        clearTimeout(authTimeout);
        setSkipWelcomeScreen(false);
        bannerBooleans.setIsBannerAdded(false);
        setIsAuthenticated(false);
        setIsBannerStatusLoading(false);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    initializeApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on app launch

  // Update isAuthenticated state when user authentication changes
  useEffect(() => {
    // Check if we have a session token (either from hook or storage)
    const tokenFromStorage = getSessionTokenFromLocalStorage();
    const hasToken = !!(sessionToken || tokenFromStorage);
    
    // Check if we have user email (either from hook or storage)
    const authData = getAuthData();
    const hasEmail = !!(user?.email || authData?.email);
    
    const isUserAuthenticated = hasToken && hasEmail;
    
    console.log("[App] isAuthenticated update:", {
      userEmail: user?.email || "none",
      sessionToken: sessionToken ? "exists" : "none",
      tokenFromStorage: tokenFromStorage ? "exists" : "none",
      authDataEmail: authData?.email || "none",
      hasToken,
      hasEmail,
      isUserAuthenticated
    });
    
    setIsAuthenticated(isUserAuthenticated);
  }, [user, sessionToken]);

  // Removed - this is now handled in the main initialization useEffect
  useEffect(() => {
    const registerVersionBasedScripts = async () => {
      
      // Only register scripts if user is authenticated and has session token
      if (!isAuthenticated || !sessionToken || !user?.email) {
        return;
      }

      const token = getSessionTokenFromLocalStorage();
      if (!token) {
        return;
      }
      

      try {
        const siteInfo = await webflow.getSiteInfo();
        
        // Get the stored siteId from authentication (this is the correct siteId that matches the server)
        const storedSiteId = getCurrentSiteId();

        if (appVersion === '1.0.0') {
          const result = await customCodeApi.registerAnalyticsBlockingScript(token);
          
          // Apply the registered script
          if (result && result.result) {
            const params: CodeApplication = {
              targetType: 'site',
              targetId: siteInfo.siteId, // Use siteInfo.siteId for application
              scriptId: result.result.id,
              location: 'header',
              version: result.result.version
            };
            const applyResult = await customCodeApi.applyScript(params, token);
          } else {
          }
        } else if (appVersion === '2.0.0' || appVersion === '2.0.1') {
          const result = await customCodeApi.registerV2BannerCustomCode(token, siteInfo.siteId);
          // Apply the registered script
          if (result && result.result) {
            const params: CodeApplication = {
              targetType: 'site',
              targetId: siteInfo.siteId, // Use URL if available, fallback to siteId
              scriptId: result.result.id,
              location: 'header',
              version: result.result.version
            };
            const applyResult = await customCodeApi.applyV2Script(params, token);
            
            // Script should be added by server via custom code block
            
          } else {
          }
        }
      } catch (error) {
        
      }
    };

    // Delay script registration to ensure authentication is fully settled
    const timer = setTimeout(() => {
      registerVersionBasedScripts();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isAuthenticated, sessionToken, user?.email]); // Trigger when auth state changes

  // Call postInstallationCall only once on first launch, after authentication is ready
  useEffect(() => {
    // Only proceed if authentication is ready
    if (!isAuthenticated || !sessionToken) {
      console.log("postInstallationCall: Waiting for authentication...", {
        isAuthenticated,
        hasSessionToken: !!sessionToken
      });
      return;
    }

    // Check if we've already called this (prevent multiple calls)
    const hasCalled = getAuthStorageItem("postInstallationCalled");
    if (hasCalled === "true") {
      console.log("postInstallationCall: Already called, skipping...");
      return;
    }

    const callPostInstallation = async () => {
      console.log("postInstallationCall: Starting...");
      console.log("postInstallationCall: isAuthenticated =", isAuthenticated);
      console.log("postInstallationCall: sessionToken =", sessionToken ? "exists" : "null");
      
      try {
        const token = getSessionTokenFromLocalStorage();
        console.log("postInstallationCall: token from storage =", token ? "exists" : "null");
        
        if (token) {
          const siteInfo = await webflow.getSiteInfo();
          console.log("postInstallationCall: siteInfo =", siteInfo);
          console.log("postInstallationCall: siteId =", siteInfo?.siteId);
          
          if (siteInfo?.siteId) {
            // Call the API - it will handle checking if already processed
            console.log("postInstallationCall: Calling API...");
            try {
              const result = await customCodeApi.postInstalltionCall(token, siteInfo.siteId);
              console.log("postInstallationCall: API result =", result);
              
              // Mark as called to prevent duplicate calls
              setAuthStorageItem("postInstallationCalled", "true");
              
              // API returns { success: true, message: 'Already processed' } if already called
              // or { success: true, message: 'Successfully processed' } if just processed
            } catch (apiError: any) {
              // Handle CORS and other API errors gracefully
              // CORS errors typically show as "Failed to fetch" or "NetworkError"
              const errorMessage = apiError?.message || String(apiError);
              if (errorMessage.includes('CORS') || 
                  errorMessage.includes('Failed to fetch') || 
                  errorMessage.includes('NetworkError') ||
                  errorMessage.includes('Access-Control')) {
                console.warn("postInstallationCall: CORS error detected - server may not have proper CORS headers configured. This is a server-side issue and won't block the app.");
              } else {
                console.error("postInstallationCall: API error:", apiError);
              }
              // Don't throw - this is a non-critical call
            }
          } else {
            console.log("postInstallationCall: No siteId available");
          }
        } else {
          console.log("postInstallationCall: No token available");
        }
      } catch (error) {
        // Silently handle error - don't block app
        console.error("postInstallationCall: Error calling postInstallationCall:", error);
      }
    };

    callPostInstallation();
  }, [isAuthenticated, sessionToken]); // Trigger when authentication is ready

 


  // Welcome Screen -> WelcomeScript (Scan Project clicked)
  const handleWelcomeScreen = async () => {
    console.log('[handleWelcomeScreen] Scan Project button clicked - starting');
    try {
      // Check if site is published before scanning
      let isPublished = false;
      let siteInfo = null;        siteInfo = await webflow.getSiteInfo();

      
      try {
        console.log('[handleWelcomeScreen] Site info received:', siteInfo);
        
        // Check publication status using domains[].lastPublished from getSiteInfo()
        // If any domain has a non-null lastPublished value, site is published
        if (siteInfo?.domains && siteInfo.domains.length > 0) {
          const hasPublishedDomain = siteInfo.domains.some(domain => 
            domain.lastPublished !== null && domain.lastPublished !== undefined
          );
          
          isPublished = hasPublishedDomain;
          console.log('[handleWelcomeScreen] Checking domains for lastPublished');
          siteInfo.domains.forEach((domain, index) => {
            console.log(`[handleWelcomeScreen] Domain ${index}: url=${domain.url}, lastPublished=${domain.lastPublished}`);
          });
          console.log('[handleWelcomeScreen] Is published (based on lastPublished):', isPublished);
        } else {
          // No domains found, assume not published
          isPublished = false;
          console.log('[handleWelcomeScreen] No domains found in siteInfo, assuming not published');
        }
        
        console.log('[handleWelcomeScreen] Final isPublished result:', isPublished);
      } catch (checkError) {
        console.error('[handleWelcomeScreen] Error during publication check:', checkError);
        // If check fails, we'll proceed anyway but show a warning
        isPublished = false;
      }
      
      // If site doesn't appear to be published, notify user and STOP scanning
      if (!isPublished) {
        console.log('[handleWelcomeScreen] Site is not published - showing notification and blocking scan');
        console.warn('[handleWelcomeScreen] 🚨 SITE NOT PUBLISHED - BLOCKING SCAN');
        
        // Show custom tooltip notification (same style as CustomizationTab and ConfirmPublish)
        tooltips.setShowTooltip(true);
        tooltips.setFadeOut(false);
        console.log('[handleWelcomeScreen] ✅ Tooltip notification set to show');
        
        // STOP here - don't proceed with scanning
        return;
      }
      
      // Site is published - proceed with scanning
      console.log('[handleWelcomeScreen] Site is published - proceeding with scan');
      console.log('[handleWelcomeScreen] Current states - isWelcomeScreen:', componentStates.isWelcomeScreen);
      
      componentStates.setIsWelcomeScreen(false);
      setIsFetchWelcomeScripts(true);
      componentStates.setWelcomeScipt(true);
      
      console.log('[handleWelcomeScreen] States updated - isWelcomeScreen:', componentStates.isWelcomeScreen, 'isWelcomeScipt:', componentStates.isWelcomeScipt);
      console.log('[handleWelcomeScreen] Scan initiated successfully');
    } catch (error) {
      console.error('[handleWelcomeScreen] Unexpected error:', error);
      // On error, show notification and don't proceed (fail closed for safety)
      webflow.notify({ 
        type: "error", 
        message: "Could not verify publication status. Please ensure your site is published before scanning." 
      });
      // Auto-dismiss notification after 5 seconds
      setTimeout(() => {
        const selectors = [
          '[data-wf-notification]',
          '.w-notification',
          '[class*="notification"]',
          '[class*="Notification"]',
          '.notification-container',
          '[role="alert"]'
        ];
        
        let notification: Element | null = null;
        for (const selector of selectors) {
          notification = document.querySelector(selector);
          if (notification) break;
        }
        
        if (notification) {
          const closeSelectors = [
            'button[aria-label*="close" i]',
            'button[aria-label*="dismiss" i]',
            '[class*="close"]',
            '[class*="dismiss"]',
            '[class*="Close"]',
            'button:last-child',
            'svg[class*="close"]',
            'svg[class*="Close"]'
          ];
          
          let closeButton: Element | null = null;
          for (const selector of closeSelectors) {
            closeButton = notification.querySelector(selector);
            if (closeButton && closeButton instanceof HTMLElement) {
              closeButton.click();
              return;
            }
          }
          
          if (notification instanceof HTMLElement) {
            notification.style.display = 'none';
            notification.style.opacity = '0';
            notification.style.visibility = 'hidden';
          }
        }
      }, 5000);
      // Don't proceed with scanning if we can't verify publication status
      return;
    }
  };

  // WelcomeScript -> SetupStep (Next clicked)
  const handleWelcomeScipt = () => {
    componentStates.resetComponentStates();
    componentStates.setIsSetUpStep(true);
  };

  // WelcomeScript -> WelcomeScreen (Go back)
  const handleWelcomeScriptGoBack = () => {
    // Don't reset script-related states, just change the component
    componentStates.setWelcomeScipt(false);
    componentStates.setIsSetUpStep(false);
    componentStates.setIsConfirmPublish(false);
    componentStates.setIsSuccessPublish(false);
    componentStates.setIsCustomizationTab(false);
    componentStates.setIsWelcomeScreen(true);
    // Don't set fetchScripts to true - scripts are already loaded and preserved in ScriptContext
    // bannerBooleans.setFetchScripts(true); // This was causing re-fetching and loading screen
  };

  // SetupStep -> ConfirmPublish (Proceed to next step clicked)
  const handleSetUpStep = () => {
    // Set all states to false first, then set the one we want
    componentStates.setIsWelcomeScreen(false);
    componentStates.setWelcomeScipt(false);
    componentStates.setIsSetUpStep(false);
    componentStates.setIsSuccessPublish(false);
    componentStates.setIsCustomizationTab(false);
    componentStates.setIsConfirmPublish(true);
  };

  // ConfirmPublish -> SuccessPublish (Publish Banner clicked)
  const handleConfirmPublish = () => {
    componentStates.resetComponentStates();
    componentStates.setIsSuccessPublish(true);
    // Set flag that banner was added through welcome flow
    bannerBooleans.setIsBannerAdded(true);
    componentStates.setIsCustomizationTab(false);
  };

  // ConfirmPublish -> SetupStep (Go back)
  const handleConfirmPublishGoBack = () => {
    // Set all states to false first, then set the one we want
    componentStates.setIsWelcomeScreen(false);
    componentStates.setWelcomeScipt(false);
    componentStates.setIsConfirmPublish(false);
    componentStates.setIsSuccessPublish(false);
    componentStates.setIsCustomizationTab(false);
    componentStates.setIsSetUpStep(true);
  };

  // SuccessPublish -> CustomizationTab (Customize clicked)
  const handleCustomize = () => {
    // Set all states to false first, then set the one we want
    componentStates.setIsWelcomeScreen(false);
    componentStates.setWelcomeScipt(false);
    componentStates.setIsSetUpStep(false);
    componentStates.setIsConfirmPublish(false);
    componentStates.setIsSuccessPublish(false);
    componentStates.setIsCustomizationTab(true);
    // Set initial tab to Customization when coming from Customize button
    setCustomizationInitialTab("Customization");
  };

  // SuccessPublish -> ConfirmPublish (Go back)
  const handleSuccessPublishGoBack = () => {
    // Set all states to false first, then set the one we want
    componentStates.setIsWelcomeScreen(false);
    componentStates.setWelcomeScipt(false);
    componentStates.setIsSetUpStep(false);
    componentStates.setIsSuccessPublish(false);
    componentStates.setIsCustomizationTab(false);
    componentStates.setIsConfirmPublish(true);
  };


  // Welcome screen handlers
  const handleWelcomeAuthorize = () => {
    const authStartTime = performance.now();
    setGlobalAuthStartTime(authStartTime);
    openAuthScreen();
    // The authentication state will be updated when the user completes authorization
    // through the useEffect that depends on user?.email and sessionToken
  };

  const handleWelcomeNeedHelp = () => {
    // Open help modal or redirect to help page
    window.open('https://www.consentbit.com/help-document', '_blank');
  };

  const handleBackToWelcome = () => {
    // Don't clear the banner added flag - preserve the banner status
    // bannerBooleans.setIsBannerAdded(false);
    setSkipWelcomeScreen(false);
    componentStates.resetComponentStates();
    componentStates.setIsWelcomeScreen(true);
    // Reset initial tab to Settings
    setCustomizationInitialTab("Settings");
  };

  // SetupStep -> WelcomeScript (Go back)
  const handleSetupGoBack = () => {
    // Don't reset fetchScripts to preserve script states
    componentStates.setIsSetUpStep(false);
    componentStates.setWelcomeScipt(true);
    // Don't set fetchScripts to true - scripts are already loaded and preserved in ScriptContext
    // bannerBooleans.setFetchScripts(true); // This was causing re-fetching and loading screen
  };

  
  




useEffect(() => {
  const detectSiteChange = async () => {
    try {
      // Always get fresh site info for critical operations
      const siteInfo = await webflow.getSiteInfo();
      const newSiteId = siteInfo?.siteId;
      
      if (!newSiteId) {
        return;
      }
      
      if (newSiteId !== currentSiteId) {
        if (currentSiteId !== null) {
          // Clear site-specific data
          removeAuthStorageItem('scriptContext_scripts');
          
          // Force complete re-authentication for new site
          try {
            removeAuthStorageItem("consentbit-userinfo");
            await exchangeAndVerifyIdToken();
          } catch (error) {
            // Handle gracefully - maybe show re-auth prompt
            // Could set a flag to show re-auth UI
          }
        }
        
        setCurrentSiteId(newSiteId);
        
        // Update cached site info
        setAuthStorageItem("siteInfo", JSON.stringify(siteInfo));
        setAuthStorageItem("currentSiteId", newSiteId);
      }
    } catch (error) {
      // Silent error handling
    }
  };
  
  detectSiteChange();
}, [currentSiteId, exchangeAndVerifyIdToken]);







  // Debug section - remove this in production
  const debugInfo = {
    currentSiteId: getCurrentSiteId(),
    currentSiteData: listCurrentSiteData(),
    migrationStatus: checkMigrationStatus(),
  };


  // Debug function to check auth status
  const handleDebugAuth = () => {
    debugAuthStatus();
  };

  // Data is automatically cleared on every reload (see useEffect above)



  // Debug: Log current screen state
  console.log("[App] Render - Screen state:", {
    skipWelcomeScreen,
    isWelcomeScreen: componentStates.isWelcomeScreen,
    isWelcomeScipt: componentStates.isWelcomeScipt,
    isSetUpStep: componentStates.isSetUpStep,
    isConfirmPublish: componentStates.isConfirmPublish,
    isSuccessPublish: componentStates.isSuccessPublish,
    isCustomizationTab: componentStates.isCustomizationTab,
    isCheckingAuth,
    isAuthenticated
  });

  return (
   <div>
   

      {skipWelcomeScreen ? (
        <CustomizationTab onAuth={handleBackToWelcome} isAuthenticated={isAuthenticated} initialActiveTab={customizationInitialTab} />
      ) : componentStates.isWelcomeScreen ? (
        (() => {
          return (
        <WelcomeScreen 
          onAuthorize={handleWelcomeAuthorize}
          onNeedHelp={handleWelcomeNeedHelp}
          authenticated={isAuthenticated}
          handleWelcomeScreen={handleWelcomeScreen}
          isCheckingAuth={isCheckingAuth}
          isBannerAdded={bannerBooleans.isBannerAdded}
          onCustomize={handleCustomize}
          isBannerStatusLoading={isBannerStatusLoading}
        />
          );
        })()
      ) : componentStates.isWelcomeScipt ? (
        <WelcomeScipt
          isWFetchWelcomeScripts={isFetchWelcomeScripts}
          handleWelcomeScipt={handleWelcomeScipt}
          onGoBack={handleWelcomeScriptGoBack}
        />
      ) : componentStates.isSetUpStep ? (
        <SetupStep
          onGoBack={handleSetupGoBack}
          handleSetUpStep={handleSetUpStep}
        />
      ) : componentStates.isConfirmPublish ? (
        <ConfirmPublish
          onGoBack={handleConfirmPublishGoBack}
          handleCustomize={handleCustomize}
          handleConfirmPublish={handleConfirmPublish}
        />
      ) : componentStates.isSuccessPublish ? (
        <SuccessPublish
          onGoBack={handleSuccessPublishGoBack}
          handleCustomize={handleCustomize}
        />
      ) : componentStates.isCustomizationTab ? (
        <CustomizationTab onAuth={handleBackToWelcome} isAuthenticated={isAuthenticated} initialActiveTab={customizationInitialTab} />
      ) : (
        <WelcomeScreen 
          onAuthorize={handleWelcomeAuthorize}
          onNeedHelp={handleWelcomeNeedHelp}
          authenticated={isAuthenticated}
          handleWelcomeScreen={handleWelcomeScreen}
          isCheckingAuth={isCheckingAuth}
          isBannerAdded={bannerBooleans.isBannerAdded}
          onCustomize={handleCustomize}
          isBannerStatusLoading={isBannerStatusLoading}
        />
      )}
      
      {/* Global tooltip notification for unpublished site */}
      {tooltips.showTooltip && (
        <div className={`global-error-banner ${tooltips.fadeOut ? 'fade-out' : 'fade-in'}`}>
          <img src={errorsheild} alt="errorsheild" />
          <div className="global-error-content">
            <span>Publish your site before scanning</span>
          </div>
          <img src={crossmark} onClick={() => { tooltips.setShowTooltip(false); tooltips.setFadeOut(false); }} alt="" />
        </div>
      )}
       
     
    </div>
  );
};

export default App;