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
import { use } from "i18next";
import { serialize } from "v8";
import { getCurrentSiteId, listCurrentSiteData, clearCurrentSiteData, clearAllData, clearAuthData, clearAuthIfNotAuthorized, checkMigrationStatus, forceMigration, usePersistentState, debugAuthStatus, forceClearAuthData, clearAllDataIncludingAuth } from "./hooks/usePersistentState";
import { customCodeApi } from "./services/api";
import { CodeApplication } from "./types/types";
import { getSessionTokenFromLocalStorage } from './util/Session';
import { removeAuthStorageItem, getAuthStorageItem, setAuthStorageItem } from './util/authStorage';
import webflow from './types/webflowtypes';
import pkg from '../package.json';

const appVersion = pkg.version;





const App: React.FC = () => {

  // COMMENTED OUT: Clear ALL data including authentication on every reload
  // This was causing unnecessary re-authentication on every reload
  // React.useEffect(() => {
  //   // Clear everything immediately on mount - complete fresh start
  //   clearAllDataIncludingAuth();
  //   
  //   // Also set up a more aggressive clearing to catch any late sessionStorage writes
  //   const clearAgain = () => {
  //     // COMMENTED OUT: const currentKeys = Object.keys(localStorage);
  //     const currentKeys = Object.keys(sessionStorage);
  //     if (currentKeys.length > 0) {
  //       clearAllDataIncludingAuth();
  //     }
  //   };
  //   
  //   // Check again after a short delay to catch any late writes
  //   const timeoutId = setTimeout(clearAgain, 100);
  //   
  //   return () => clearTimeout(timeoutId);
  // }, []);

  const queryClient = useQueryClient();
  const [skipWelcomeScreen, setSkipWelcomeScreen] = usePersistentState("skipWelcomeScreen", false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAppInitializing, setIsAppInitializing] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
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
  
  // Track when scan button becomes available
  useEffect(() => {
    const currentTime = performance.now();
    
    // Check if scan button should be available (authenticated && !isCheckingAuth && !isBannerAdded)
    if (isAuthenticated && !isCheckingAuth && !bannerBooleans.isBannerAdded && globalAuthStartTime) {
      const totalTime = currentTime - globalAuthStartTime;
      console.log('⏱️ [TIMING] Scan Project button available in App.tsx - Total time:', totalTime.toFixed(2), 'ms');
      console.log('⏱️ [TIMING] State check - isAuthenticated:', isAuthenticated, 'isCheckingAuth:', isCheckingAuth, 'isBannerAdded:', bannerBooleans.isBannerAdded);
    }
  }, [isAuthenticated, isCheckingAuth, bannerBooleans.isBannerAdded, globalAuthStartTime]);


  const { user, sessionToken, exchangeAndVerifyIdToken, openAuthScreen, isAuthenticatedForCurrentSite, attemptAutoRefresh } = useAuth();
  const [isFetchWelcomeScripts, setIsFetchWelcomeScripts] = useState(false);
  const [currentSiteId, setCurrentSiteId] = useState<string | null>(null);
  
    // App initialization with clean welcome screen flow
  useEffect(() => {
    const initializeApp = async () => {
      console.log('🚀 [DEBUG] App initialization started');
      const startTime = performance.now();
      
      // Start with welcome screen and loading state
      console.log('🚀 [DEBUG] Setting initial states...');
      componentStates.resetComponentStates();
      componentStates.setIsWelcomeScreen(true);
      setIsAppInitializing(false);
      setIsCheckingAuth(true);
      console.log('🚀 [DEBUG] Initial states set - isCheckingAuth: true');
      
      // Check if user data already exists in sessionStorage - if so, skip auth check
      console.log('🚀 [DEBUG] Checking for existing user data in sessionStorage...');
      const existingUserData = getAuthStorageItem("consentbit-userinfo");
      console.log('🚀 [DEBUG] Existing user data:', existingUserData ? 'Found' : 'Not found');
      
      if (existingUserData && existingUserData !== "null" && existingUserData !== "undefined") {
        console.log('✅ [DEBUG] User data found in sessionStorage, skipping auth check');
        const authStartTime = performance.now();
        setIsAuthenticated(true);
        console.log('🚀 [DEBUG] Set isAuthenticated to true, time:', performance.now() - authStartTime, 'ms');
        console.log('🚀 [DEBUG] Authentication state set to TRUE from sessionStorage');
        
        // Track timing for cached authentication
        if (globalAuthStartTime) {
          const totalTime = performance.now() - globalAuthStartTime;
          console.log('⏱️ [TIMING] Total time from auth start to cached auth complete:', totalTime.toFixed(2), 'ms');
        }
        
        // Always check banner status from API to get accurate status
        console.log('🚀 [DEBUG] Checking banner status from API...');
        const bannerStartTime = performance.now();
        const token = getSessionTokenFromLocalStorage();
        
        if (token) {
          try {
            console.log('🚀 [DEBUG] Making API call to getBannerStyles...');
            const apiStartTime = performance.now();
            
            // Add timeout to prevent hanging API calls
            const apiPromise = customCodeApi.getBannerStyles(token);
            const timeoutPromise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error('API call timeout after 10 seconds')), 10000);
            });
            
            const response = await Promise.race([apiPromise, timeoutPromise]);
            console.log('🚀 [DEBUG] API call completed in:', performance.now() - apiStartTime, 'ms');
            
            // Set banner status based on API response
            if (response && response.appData && response.appData.isBannerAdded === true) {
              // Banner was previously added - show welcome screen with "Customize" button
              console.log('🚀 [DEBUG] Banner was previously added (from API)');
              setSkipWelcomeScreen(false);
              bannerBooleans.setIsBannerAdded(true);
            } else {
              // Response is null, empty, or bannerAdded is not true - show welcome screen with "Scan Project" button
              console.log('🚀 [DEBUG] Banner not added yet (from API)');
              setSkipWelcomeScreen(false);
              bannerBooleans.setIsBannerAdded(false);
            }
          } catch (error) {
            // API call failed or timed out - show welcome screen with default state
            console.log('🚀 [DEBUG] API call failed or timed out:', error);
            if (error instanceof Error && error.message.includes('timeout')) {
              console.log('🚀 [DEBUG] API call timed out after 10 seconds, proceeding with default state');
            }
            setSkipWelcomeScreen(false);
            bannerBooleans.setIsBannerAdded(false);
          }
        } else {
          // No token available - show welcome screen with default state
          console.log('🚀 [DEBUG] No token available, using default banner status');
          setSkipWelcomeScreen(false);
          bannerBooleans.setIsBannerAdded(false);
        }
        
        console.log('🚀 [DEBUG] Banner check completed in:', performance.now() - bannerStartTime, 'ms');
        
        // Set checking auth to false only after all initialization is complete
        console.log('🚀 [DEBUG] Setting isCheckingAuth to false...');
        const finalStartTime = performance.now();
        setIsCheckingAuth(false);
        console.log('🚀 [DEBUG] isCheckingAuth set to false, time:', performance.now() - finalStartTime, 'ms');
        console.log('🚀 [DEBUG] Total initialization time:', performance.now() - startTime, 'ms');
        return; // Exit early since we have user data
      }
      
      try {
        console.log('🚀 [DEBUG] No cached user data, attempting authentication...');
        const authStartTime = performance.now();
        
        // Try fresh background authentication (silent) with timeout
        const authPromise = attemptAutoRefresh();
        const timeoutPromise = new Promise<boolean>((resolve) => {
          setTimeout(() => {
            console.log('🚀 [DEBUG] Authentication timeout after 5 seconds');
            resolve(false);
          }, 5000); // 5 second timeout
        });
        
        const refreshSuccess = await Promise.race([authPromise, timeoutPromise]);
        console.log('🚀 [DEBUG] Authentication completed in:', performance.now() - authStartTime, 'ms, success:', refreshSuccess);
        
        if (refreshSuccess) {
          console.log('🚀 [DEBUG] Authentication successful, setting states...');
          setIsAuthenticated(true);
          
          // Track timing for fresh authentication
          if (globalAuthStartTime) {
            const totalTime = performance.now() - globalAuthStartTime;
            console.log('⏱️ [TIMING] Total time from auth start to fresh auth complete:', totalTime.toFixed(2), 'ms');
          }
          
          // Always check API for current banner status (don't rely on cached data)
          const token = getSessionTokenFromLocalStorage();
          if (token) {
            try {
              console.log('🚀 [DEBUG] Making API call to getBannerStyles...');
              const apiStartTime = performance.now();
              
              // Add timeout to prevent hanging API calls
              const apiPromise = customCodeApi.getBannerStyles(token);
              const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('API call timeout after 10 seconds')), 10000);
              });
              
              const response = await Promise.race([apiPromise, timeoutPromise]);
              console.log('🚀 [DEBUG] API call completed in:', performance.now() - apiStartTime, 'ms');
              
              // Set banner status based on API response (not cached data)
              if (response && response.appData && response.appData.isBannerAdded === true) {
                // Banner was previously added - show welcome screen with "Customize" button
                console.log('🚀 [DEBUG] Banner was previously added (from API)');
                setSkipWelcomeScreen(false);
                bannerBooleans.setIsBannerAdded(true);
              } else {
                // Response is null, empty, or bannerAdded is not true - show welcome screen with "Scan Project" button
                console.log('🚀 [DEBUG] Banner not added yet (from API)');
                setSkipWelcomeScreen(false);
                bannerBooleans.setIsBannerAdded(false);
              }
            } catch (error) {
              // API call failed - show welcome screen
              console.log('🚀 [DEBUG] API call failed:', error);
              setSkipWelcomeScreen(false);
              bannerBooleans.setIsBannerAdded(false);
            }
          } else {
            // No token available - show welcome screen
            console.log('🚀 [DEBUG] No token available');
            setSkipWelcomeScreen(false);
            bannerBooleans.setIsBannerAdded(false);
          }
        } else {
          // Auth failed - show welcome screen
          console.log('🚀 [DEBUG] Authentication failed or timed out');
          setSkipWelcomeScreen(false);
          bannerBooleans.setIsBannerAdded(false);
        }
      } catch (error) {
        // Silent error handling - show welcome screen
        console.log('🚀 [DEBUG] Authentication error:', error);
        setSkipWelcomeScreen(false);
        bannerBooleans.setIsBannerAdded(false);
      } finally {
        // Auth check complete
        console.log('🚀 [DEBUG] Setting isCheckingAuth to false...');
        setIsCheckingAuth(false);
        console.log('🚀 [DEBUG] Total initialization time:', performance.now() - startTime, 'ms');
      }
    };

    initializeApp();
  }, []);

  // Debug authentication state changes
  useEffect(() => {
    // Auth state monitoring
  }, [user, sessionToken, isAuthenticated]);

  // Removed - this is now handled in the main initialization useEffect

 


  // Welcome Screen -> WelcomeScript (Scan Project clicked)
  const handleWelcomeScreen = () => {
    componentStates.setIsWelcomeScreen(false);
     setIsFetchWelcomeScripts(true);
    componentStates.setWelcomeScipt(true);
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
    console.log('⏱️ [TIMING] Global authorization started at:', authStartTime.toFixed(2), 'ms');
    openAuthScreen();
    // The authentication state will be updated when the user completes authorization
    // through the useEffect that depends on user?.email and sessionToken
  };

  const handleWelcomeNeedHelp = () => {
    // Open help modal or redirect to help page
    window.open('https://www.consentbit.com/help-document', '_blank');
  };

  const handleBackToWelcome = () => {
    // Clear the banner added flag and show welcome screen
    bannerBooleans.setIsBannerAdded(false);
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

  
  




  // Removed - this is now handled in the main initialization useEffect

  // REMOVED: This useEffect was causing conflicts with fast sessionStorage-based auth
  // The authentication state is now properly managed in the main initialization useEffect

  // Site change detection - clear scripts when site changes
  useEffect(() => {
    const detectSiteChange = async () => {
      try {
        // Check if we already have site info cached to avoid unnecessary API call
        const cachedSiteInfo = getAuthStorageItem("siteInfo");
        let siteInfo;
        let newSiteId;
        
        if (cachedSiteInfo) {
          try {
            siteInfo = JSON.parse(cachedSiteInfo);
            newSiteId = siteInfo?.siteId;
            console.log('✅ Using cached site info, skipping Webflow API call');
          } catch (error) {
            // Fallback to API call if cached data is invalid
            siteInfo = await webflow.getSiteInfo();
            newSiteId = siteInfo?.siteId;
          }
        } else {
          siteInfo = await webflow.getSiteInfo();
          newSiteId = siteInfo?.siteId;
          // Cache the site info for future use
          if (siteInfo) {
            setAuthStorageItem("siteInfo", JSON.stringify(siteInfo));
          }
        }
        
        if (newSiteId && newSiteId !== currentSiteId) {
          // Site has changed, clear scripts to prevent cross-site contamination
          if (currentSiteId !== null) {
            // Only clear if we had a previous site (not initial load)
            // COMMENTED OUT: localStorage.removeItem('scriptContext_scripts');
            removeAuthStorageItem('scriptContext_scripts');
            
            // Regenerate session token for the new site
            try {
              console.log('🔄 Site changed, regenerating session token for new site:', newSiteId);
              
              // Clear old token first to force complete regeneration
              // COMMENTED OUT: localStorage.removeItem("consentbit-userinfo");
              removeAuthStorageItem("consentbit-userinfo");
              console.log('🗑️ Cleared old session token to force regeneration');
              
              const newTokenData = await exchangeAndVerifyIdToken();
              if (newTokenData) {
                console.log('✅ Session token regenerated successfully for site:', newSiteId);
                console.log('🔍 New token should contain siteId:', newSiteId);
              } else {
                console.error('❌ Failed to regenerate session token for site:', newSiteId);
              }
            } catch (error) {
              console.error('❌ Error regenerating session token:', error);
              // Fallback: just update the site ID in stored data
              // COMMENTED OUT: const userinfo = localStorage.getItem("consentbit-userinfo");
              const userinfo = getAuthStorageItem("consentbit-userinfo");
              if (userinfo) {
                try {
                  const userData = JSON.parse(userinfo);
                  userData.siteId = newSiteId;
                  // COMMENTED OUT: localStorage.setItem("consentbit-userinfo", JSON.stringify(userData));
                  setAuthStorageItem("consentbit-userinfo", JSON.stringify(userData));
                  console.log('⚠️ Fallback: Updated stored site ID to:', newSiteId);
                } catch (error) {
                  console.error('Error updating stored site ID:', error);
                }
              }
            }
          }
          setCurrentSiteId(newSiteId);
        }
      } catch (error) {
        // Silent error handling
      }
    };
    
    detectSiteChange();
  }, [currentSiteId, exchangeAndVerifyIdToken]);

  // Version-based script registration - run once when user is authenticated
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

      // Check if scripts were already registered in this session to avoid unnecessary API calls
      const scriptsRegistered = sessionStorage.getItem(`scripts_registered_${appVersion}`);
      if (scriptsRegistered) {
        return; // Scripts already registered for this version in this session
      }

      try {
        // Get site info for script application
        const siteInfo = await webflow.getSiteInfo();

        if (appVersion === '1.0.0') {
          const result = await customCodeApi.registerAnalyticsBlockingScript(token);
          
          // Apply the registered script
          if (result && result.result) {
            const params: CodeApplication = {
              targetType: 'site',
              targetId: siteInfo.siteId,
              scriptId: result.result.id,
              location: 'header',
              version: result.result.version
            };
            await customCodeApi.applyScript(params, token);
          }
        } else if (appVersion === '2.0.0' || appVersion === '2.0.1') {
          const result = await customCodeApi.registerV2BannerCustomCode(token);
          
          // Apply the registered script
          if (result && result.result) {
            const params: CodeApplication = {
              targetType: 'site',
              targetId: siteInfo.siteId,
              scriptId: result.result.id,
              location: 'header',
              version: result.result.version
            };
            await customCodeApi.applyV2Script(params, token);
          }
        }
        
        // Mark scripts as registered for this version in this session
        sessionStorage.setItem(`scripts_registered_${appVersion}`, 'true');
      } catch (error) {
        // Silent error handling - script registration will be retried on next auth
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

  // App initialization delay removed - now handled in automatic token refresh useEffect











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



  return (
   <div>
   

      {skipWelcomeScreen ? (
        <CustomizationTab onAuth={handleBackToWelcome} isAuthenticated={isAuthenticated} initialActiveTab={customizationInitialTab} />
      ) : componentStates.isWelcomeScreen ? (
        (() => {
          console.log('🚀 [DEBUG] Rendering WelcomeScreen with props:', {
            isAuthenticated,
            isCheckingAuth,
            isBannerAdded: bannerBooleans.isBannerAdded,
            skipWelcomeScreen,
            isWelcomeScreen: componentStates.isWelcomeScreen
          });
          return (
        <WelcomeScreen 
          onAuthorize={handleWelcomeAuthorize}
          onNeedHelp={handleWelcomeNeedHelp}
          authenticated={isAuthenticated}
          handleWelcomeScreen={handleWelcomeScreen}
          isCheckingAuth={isCheckingAuth}
          isBannerAdded={bannerBooleans.isBannerAdded}
          onCustomize={handleCustomize}
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
        />
      )}
       
     
    </div>
  );
};

export default App;

