import { useState } from 'react';
import { useAppState } from './useAppState';
import webflow from '../types/webflowtypes';
import createCookiePreferences from './gdprPreference';
import createCookieccpaPreferences from './ccpaPreference';
import { getSessionTokenFromLocalStorage } from '../util/Session'; 
import { customCodeApi } from '../services/api';
import { CodeApplication, ScriptRegistrationRequest } from 'src/types/types';
import { useAuth } from '../hooks/userAuth';
import { usePersistentState, getCurrentSiteId } from './usePersistentState';
import pkg from '../../package.json';

const appVersion = pkg.version;
const base_url = "https://consentbit-test-server.web-8fb.workers.dev"


export interface BannerConfig {
  language: string;
  color: string;
  btnColor: string;
  headColor: string;
  paraColor: string;
  secondcolor: string;
  buttonRadius: number | string;
  animation: string;
  primaryButtonText: string;
  secondbuttontext: string;
  toggleStates?: {
    customToggle?: boolean;
    disableScroll?: boolean;
    closebutton?: boolean;
  };
  Font?: string;
borderRadius: number | string;
}
type BreakpointAndPseudo = {
  breakpoint: string;
  pseudoClass: string;
};
export const useBannerCreation = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccessPublish, setShowSuccessPublish] = useState(false);
  const { user, exchangeAndVerifyIdToken } = useAuth();
  const [siteInfo, setSiteInfo] = usePersistentState<{ siteId: string; siteName: string; shortName: string } | null>("siteInfo", null);

  
  const {
    bannerBooleans,
    bannerStyles,
    bannerUI,
    bannerAnimation,
    bannerToggleStates,
    bannerLanguages
  } = useAppState();

  const handleBannerSuccess = () => {
    setShowSuccess(true);
    setShowLoading(false);
    setIsCreating(false);
  };

  const handleBannerError = (error: any) => {
    setIsCreating(false);
    setShowLoading(false);
  };

  const handleSuccessPublishProceed = () => {
    setShowSuccessPublish(false);
  };

  const handleSuccessPublishGoBack = () => {
    setShowSuccessPublish(false);
  };

  const createSimpleGDPRBanner = async (selectedElement: any, config: BannerConfig, animationAttribute: string) => {
    try {
      // Check if the selected element can have children
      if (!selectedElement?.children) {
        throw new Error("Selected element cannot have children.");
      }

      // Add ConsentBit class name to the selected element
      try {
        const consentBitStyle = await webflow.getStyleByName("ConsentBit") || await webflow.createStyle("ConsentBit");
        if (selectedElement.setStyles) {
          await selectedElement.setStyles([consentBitStyle]);
        }
      } catch (error) {
        // Continue if style application fails
      }
      
      // Step 1: Create main banner div as child of selected element
      const newDiv = await selectedElement.prepend(webflow.elementPresets.DivBlock);
      if (!newDiv) {
        throw new Error("Failed to create banner div");
      }
      
      // Step 2: Set DOM ID exactly like GDPR function
      if ((newDiv as any).setDomId) {
        await (newDiv as any).setDomId("consent-banner");
      }
      
      const styleNames = {
        divStyleName: "consentbit-gdpr_banner_div",
        paragraphStyleName: "consentbit-gdpr_banner_text",
        buttonContainerStyleName: "consentbit-banner_button_container",
        prefrenceButtonStyleName: "consentbit-banner_button_preference",
        declineButtonStyleName: "consentbit-banner_button_decline",
        buttonStyleName: "consentbit-banner_accept",
        headingStyleName: "consentbit-banner_headings",
        innerDivStyleName: "consentbit-innerdiv",
        secondBackgroundStyleName: "consentbit-banner_second-bg",
        closebutton: 'close-consent'
      };
      const styles = await Promise.all(
        Object.values(styleNames).map(async (name) => {
          return (await webflow.getStyleByName(name)) || (await webflow.createStyle(name));
        })
      );
      const [
        divStyle, paragraphStyle, buttonContainerStyle, prefrenceButtonStyle, declineButtonStyle, buttonStyle, headingStyle, innerDivStyle, secondBackgroundStyle, closebutton
      ] = styles;
      const animationAttributeMap = {
        "fade": "fade",
        "slide-up": "slide-up",
        "slide-down": "slide-down",
        "slide-left": "slide-left",
        "slide-right": "slide-right",
        "select": "select", // No attribute if "select"
      };
      // Debug: Log banner styles before creating property map

      const divPropertyMap: Record<string, string> = {
        "background-color": `${config.color}`,
        "position": "fixed",
        "z-index": "99999",
        "padding-top": "20px",
        "padding-right": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "border-radius": `4px`,
        "display": "none",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
        "font-family": `${config.Font}`,
        "right": "3%",
        "transform": "translate3d(0px, 0, 0)",
        "left": "auto",
        "bottom": "3%",
        "width": "438px",
        "min-height": "220px",
      };

      // Debug: Log the final property map
     
      const responsivePropertyMap: Record<string, string> = {
        "max-width": "100%",
        "width": "100%",
        "bottom": "0",
        "left": "0",
        "right": "0",
        "top": "auto",
        "transform": "none"
      };
      const responsiveOptions = { breakpoint: "small" } as BreakpointAndPseudo;

      const paragraphPropertyMap: Record<string, string> = {
        "color": config.paraColor,
        "font-size": "16px",
        "font-weight": "400",
        "line-height": "1.5",
        "text-align": "left",
        "margin-top": "0",
        "margin-right": "0",
        "margin-bottom": "10px",
        "margin-left": "0",
        "display": "block",
        "width": "100%",
      };

      const buttonContainerPropertyMap: Record<string, string> = {
        "display": "flex",
        "justify-content": "right",
        "margin-top": "10px",
        "width": "100%",
      };

      const buttonPropertyMap: Record<string, string> = {
        "border-radius": "2px",
        "background-color": "rgb(0, 0, 0)",
        "color": "rgb(255, 255, 255)",
        "font-family": "Montserrat",
        "cursor": "pointer",
        "margin-left": "5px",
        "margin-right": "5px",
        "min-width": "80px",
        "text-align": "center",
        "display": "flex",
        "justify-content": "center",
        
      };
      
      const responsivebuttonPropertyMap: Record<string, string> = {
        "margin-bottom": "10px",
        "flex-direction": "column",
        "justify-content": "center",
        "text-align": "center",
        "display": "flex",
        "row-gap": "12px"

      };
      const responsivebuttonOptions = { breakpoint: "small" } as BreakpointAndPseudo;

      const declineButtonPropertyMap: Record<string, string> = {
        "border-radius": "2px",
        "background-color": "#C9C9C9",
        "color": "rgb(0, 0, 0)",
        "font-family": "Montserrat",
        "cursor": "pointer",
        "margin-left": "5px",
        "margin-right": "5px",
        "min-width": "80px",
        "text-align": "center",
        "display": "flex",
        "justify-content": "center",

      };

      const linktextPropertyMap: Record<string, string> = {
        "border-radius": "2px",
        "background-color": "transparent !important",
        "color": "rgb(0, 0, 0)",
        "font-family": "Montserrat",
        "cursor": "pointer",
        "margin-left": "5px",
        "margin-right": "5px",
        "min-width": "80px",
        "text-align": "center",
        "display": "flex",
        "justify-content": "center",

      };



      const headingPropertyMap: Record<string, string> = {
        "color": `${config.headColor}`,
        "font-size": "20px",
        "font-weight": "400px",
        "text-align": "left",
        "margin-top": "0",
        "margin-bottom": "10px",
        "width": "100%",
      };
      const innerdivPropertyMap: Record<string, string> = {
        "max-width": "877px",
        "margin-left": "auto",
        "margin-right": "auto",
      };

      const secondbackgroundPropertyMap: Record<string, string> = {
        "position": "absolute",
        "background-color": `${config.color}`,
        "width": "35%",
        "right": "0px",
        "height": "100%",
        "z-index": "-3",
        "opacity": "30%",
        "bottom": "0px",
        "border-bottom-right-radius": "4px",
        "border-top-right-radius": "4px"
      };

      const CloseButtonPropertyMap: Record<string, string> = {
        "color": "#000",
        "justify-content": "center",
        "align-items": "center",
        "width": "25px",
        "height": "25px",
        "display": "flex",
        "position": "absolute",
        "top": "5%",
        "left": "auto",
        "right": "2%",
        "z-index": "99",
        "cursor": "pointer",
        "font-family": "'Montserrat', sans-serif",
      };

      
      await divStyle.setProperties(divPropertyMap);
      await divStyle.setProperties(responsivePropertyMap, responsiveOptions);
      await paragraphStyle.setProperties(paragraphPropertyMap);
      await buttonContainerStyle.setProperties(buttonContainerPropertyMap);
      await headingStyle.setProperties(headingPropertyMap);
      await innerDivStyle.setProperties(innerdivPropertyMap);
      await secondBackgroundStyle.setProperties(secondbackgroundPropertyMap);
      await closebutton.setProperties(CloseButtonPropertyMap);
      // Line 316: Properties applied to buttonContainerStyle
       await buttonContainerStyle.setProperties(buttonContainerPropertyMap);
       await prefrenceButtonStyle.setProperties(declineButtonPropertyMap);
       await declineButtonStyle.setProperties(declineButtonPropertyMap);
       await buttonStyle.setProperties(buttonPropertyMap);

// Line 318: Style attached to button container element
      if (newDiv.setStyles) {
        await newDiv.setStyles([divStyle]);
      }
      
      // Debug: Log the actual DOM element after styling
      
      if (newDiv.setCustomAttribute) {
        await newDiv.setCustomAttribute("data-animation", bannerAnimation.animation);
        await newDiv.setCustomAttribute("data-cookie-banner", bannerToggleStates.toggleStates.disableScroll ? "true" : "false");
      }
      await newDiv.setCustomAttribute("data-all-banners","false");
     
      // Step 5: Create inner div as child of newDiv
      const innerdiv = await newDiv.append(webflow.elementPresets.DivBlock);
      if (!innerdiv) {
        throw new Error("Failed to create inner div");
      }
      await innerdiv.setStyles([innerDivStyle]);

      // Step 6: Create heading as child of innerdiv
      const tempHeading = await innerdiv.append(webflow.elementPresets.Heading);
      if (!tempHeading) {
        throw new Error("Failed to create heading");
      }
      
      await headingStyle.setProperties(headingPropertyMap);
      
      if (tempHeading.setHeadingLevel) {
        await tempHeading.setHeadingLevel(2);
      }
      if (tempHeading.setStyles) {
        await tempHeading.setStyles([headingStyle]);
      }
      if (tempHeading.setTextContent) {
        await tempHeading.setTextContent('Cookie Settings');
      }

      // Step 7: Create paragraph as child of innerdiv
      const tempParagraph = await innerdiv.append(webflow.elementPresets.Paragraph);
      if (!tempParagraph) {
        throw new Error("Failed to create paragraph");
      }
      
      await paragraphStyle.setProperties(paragraphPropertyMap);
      
      if (tempParagraph.setStyles) {
        await tempParagraph.setStyles([paragraphStyle]);
      }
      if (tempParagraph.setTextContent) {
        await tempParagraph.setTextContent('We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.');
      }

      // Step 8: Create button container as child of innerdiv
      const buttonContainer = await innerdiv.append(webflow.elementPresets.DivBlock);
      if (!buttonContainer) {
        throw new Error("Failed to create button container");
      }
      
      await buttonContainerStyle.setProperties(buttonContainerPropertyMap);
      if (buttonContainer.setStyles) {
        await buttonContainer.setStyles([buttonContainerStyle]);
      }

      // Step 9: Create preferences button as child of buttonContainer
      const prefrenceButton = await buttonContainer.append(webflow.elementPresets.Button);
      if (!prefrenceButton) {
        throw new Error("Failed to create preferences button");
      }
      await prefrenceButton.setStyles([prefrenceButtonStyle]);
      await prefrenceButton.setTextContent('Preferences');
      
      if ((prefrenceButton as any).setDomId) {
        await (prefrenceButton as any).setDomId("preferences-btn"); // Type assertion
      }

      // Step 10: Create accept button as child of buttonContainer
      const acceptButton = await buttonContainer.append(webflow.elementPresets.Button);
      if (!acceptButton) {
        throw new Error("Failed to create accept button");
      }
      
      await acceptButton.setStyles([buttonStyle]);
      if ((acceptButton as any).setDomId) {
        await (acceptButton as any).setDomId("accept-btn"); // Type assertion
      }
     
      await acceptButton.setTextContent('Accept');

      // Step 11: Create decline button as child of buttonContainer
      const declineButton = await buttonContainer.append(webflow.elementPresets.Button);
      if (!declineButton) {
        throw new Error("Failed to create decline button");
      }
      await declineButton.setStyles([declineButtonStyle]);
      await declineButton.setTextContent('Reject');
      
      if ((declineButton as any).setDomId) {
        await (declineButton as any).setDomId("decline-btn"); // Type assertion
      }
    } catch (error) {
      throw error;
    }
  };

  const createSimpleCCPABanner = async (selectedElement: any, config: BannerConfig, animationAttribute: string) => {
    try {
      // Check if the selected element can have children
      if (!selectedElement?.children) {
        throw new Error("Selected element cannot have children.");
      }

      // Add ConsentBit class name to the selected element
      try {
        const consentBitStyle = await webflow.getStyleByName("ConsentBit") || await webflow.createStyle("ConsentBit");
        if (selectedElement.setStyles) {
          await selectedElement.setStyles([consentBitStyle]);
        }
      } catch (error) {
        // Continue if style application fails
      }

      // Step 1: Create main CCPA banner div as child of selected element
      const newDiv = await selectedElement.prepend(webflow.elementPresets.DivBlock);
      if (!newDiv) {
        throw new Error("Failed to create CCPA banner div");
      }
      
      // Step 2: Set DOM ID to match existing structure (initial-consent-banner for simple CCPA banner)
      if ((newDiv as any).setDomId) {
        await (newDiv as any).setDomId("initial-consent-banner");
      }
      
      const styleNames = {
        divStyleName: "consentbit-ccpa-banner-div",
        paragraphStyleName: "consentbit-ccpa-banner-text",
        buttonContainerStyleName: "consentbit-ccpa-button-container",
        headingStyleName: "consentbit-ccpa-banner-heading",
        linktextstyle: "consentbit-ccpa-linkblock",
        innerDivStyleName: "consentbit-ccpa-innerdiv",
        secondBackgroundStyleName: "consentbit-banner-ccpasecond-bg",
        closebutton: `close-consentbit`,
      };
      const styles = await Promise.all(
        Object.values(styleNames).map(async (name) => {
          return (await webflow.getStyleByName(name)) || (await webflow.createStyle(name));
        })
      );
      const [
        divStyle,
        paragraphStyle,
        buttonContainerStyle,
        headingStyle,
        Linktext,
        innerDivStyle,
        secondBackgroundStyle,
        closebutton
      ] = styles;

      const collection = await webflow.getDefaultVariableCollection();
      const webflowBlue = await collection?.createColorVariable("Webflow Blue", "rgba(255, 255, 255, 1)");
      const webflowBlueValue = (webflowBlue as any)?.value || "rgba(255, 255, 255, 1)";

      const animationAttributeMap = {
        "fade": "fade",
        "slide-up": "slide-up",
        "slide-down": "slide-down",
        "slide-left": "slide-left",
        "slide-right": "slide-right",
        "select": "select", // No attribute if "select"
      };

      const animationAttribute = "fade";
      
      const divPropertyMap: Record<string, string> = {
        "background-color": `${config.color}`,
        "position": "fixed",
        "z-index": "99999",
        "padding-top": "20px",
        "padding-right": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "border-radius": `4px`,
        "display": "none",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
        "font-family": `${config.Font}`,
        "right": "3%",
        "transform": "translate3d(0px, 0, 0)",
        "left": "auto",
         "bottom":"3%",
         "width" :"438px",
         "min-height": "220px",
      };
     
      
      await divStyle.setProperties(divPropertyMap);
      
      if (newDiv.setStyles) {
        await newDiv.setStyles([divStyle]);
      }
      const responsivePropertyMap: Record<string, string> = {
        "max-width": "100%",
        "width": "100%",
        "bottom": "0",
        "left": "0",
        "right": "0",
        "top": "auto",
        "transform": "none"
      };
      const responsiveOptions = { breakpoint: "small" } as BreakpointAndPseudo;

      const paragraphPropertyMap: Record<string, string> = {
        "color": `${config.paraColor}`,
        "font-size": "16px",
        "font-weight": "400",
        "line-height": "1.5",
        "text-align": "left",
        "margin-top": "0",
        "margin-right": "0",
        "margin-bottom": "10px",
        "margin-left": "0",
        "display": "block",
        "width": "100%",
      };

      const buttonContainerPropertyMap: Record<string, string> = {
        "display": "flex",
        "justify-content": "left",
        "margin-top": "10px",
        "width": "100%",
      };

      const declineButtonPropertyMap: Record<string, string> = {
        "border-radius": "48px",
        "cursor": "pointer",
        "background-color": "rgba(241, 241, 241, 1)",
        "color": "rgba(72, 57, 153, 1)",
        "margin-left": "5px",
        "margin-right": "5px",
        "min-width": "80px",
      };

      const linktextPropertyMap: Record<string, string> = {
        "border-radius": "48px",
        "cursor": "pointer",
        "background-color": "transparent !important",
        "color": "rgba(72, 57, 153, 1)",
        "margin-left": "5px",
        "margin-right": "5px",
        "min-width": "80px",
      };
      const headingPropertyMap: Record<string, string> = {
        "color": `${config.headColor}`,
        "font-size": "20px",
        "font-weight": "500",
        "text-align": "left",
        "margin-top": "0",
        "margin-bottom": "10px",
        "width": "100%",
      };
      const innerdivPropertyMap: Record<string, string> = {
        "max-width": "877px",
        "margin-left": "auto",
        "margin-right": "auto",
      };
      const secondbackgroundPropertyMap: Record<string, string> = {
        "position": "absolute",
        "background-color": `${config.color}`,
        "width": "35%",
        "right": "0px",
        "height": "100%",
        "z-index": "-3",
        "opacity": "30%",
        "bottom": "0px",
        "border-bottom-right-radius": `4px`,
        "border-top-right-radius": `4px`
      };
      const CloseButtonPropertyMap: Record<string, string> = {
        "color": "#000",
        "justify-content": "center",
        "align-items": "center",
        "width": "25px",
        "height": "25px",
        "display": "flex",
        "position": "absolute",
        "top": "5%",
        "left": "auto",
        "right": "2%",
        "z-index": "99",
        "cursor": "pointer",
        "font-family": "'Montserrat', sans-serif",
      };
      

      await divStyle.setProperties(divPropertyMap);
      await divStyle.setProperties(responsivePropertyMap, responsiveOptions);
      await paragraphStyle.setProperties(paragraphPropertyMap);
      await buttonContainerStyle.setProperties(buttonContainerPropertyMap);
      await Linktext.setProperties(linktextPropertyMap);
      await headingStyle.setProperties(headingPropertyMap);
      await innerDivStyle.setProperties(innerdivPropertyMap);
      await secondBackgroundStyle.setProperties(secondbackgroundPropertyMap);
      await closebutton.setProperties(CloseButtonPropertyMap)

       if (newDiv.setStyles) {
        await newDiv.setStyles([divStyle]);
      }

       if (newDiv.setCustomAttribute) {
         await newDiv.setCustomAttribute("data-animation", "fade");
         await newDiv.setCustomAttribute("data-cookie-banner", "false");
       }
       await newDiv.setCustomAttribute("data-all-banners","false");

      // Create innerdiv as child of newDiv
      const innerdiv = await newDiv.append(webflow.elementPresets.DivBlock);
      await innerdiv.setStyles([innerDivStyle]);
      
      // Create heading as child of innerdiv
      const tempHeading = await innerdiv.append(webflow.elementPresets.Heading);
      if (!tempHeading) {
        throw new Error("Failed to create heading");
      }
      
      if (tempHeading.setHeadingLevel) {
        await tempHeading.setHeadingLevel(2);
      }
      if (tempHeading.setStyles) {
        await tempHeading.setStyles([headingStyle]);
      }
      if (tempHeading.setTextContent) {
        await tempHeading.setTextContent("We value your privacy");
      }
      
      // Create paragraph as child of innerdiv
      const tempParagraph = await innerdiv.append(webflow.elementPresets.Paragraph);
      if (!tempParagraph) {
        throw new Error("Failed to create paragraph");
      }
      if (tempParagraph.setStyles) {
        await tempParagraph.setStyles([paragraphStyle]);
      }
      
      if (tempParagraph.setTextContent) {
        await tempParagraph.setTextContent("We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.");
      }
      
      // Create buttonContainer as child of innerdiv
      const buttonContainer = await innerdiv.append(webflow.elementPresets.DivBlock);
      if (!buttonContainer) {
        throw new Error("Failed to create button container");
      }
      await buttonContainer.setStyles([buttonContainerStyle]);

      // Create prefrenceButton as child of buttonContainer
      const prefrenceButton = await buttonContainer.append(webflow.elementPresets.LinkBlock);
      if (!prefrenceButton) {
        throw new Error("Failed to create decline button");
      }
      await prefrenceButton.setStyles([Linktext]);
      await prefrenceButton.setTextContent('Do Not Share My Personal Information');
  
      if ((prefrenceButton as any).setDomId) {
        await (prefrenceButton as any).setDomId("do-not-share-link"); 
      }
         
      
    } catch (error) {
      throw error;
    }
  };
  

  const createGDPRPreferencesWithExistingFunction = async (selectedElement: any, config: BannerConfig) => {
    try {
      
      // Call createCookiePreferences with all required parameters - black text for content, config colors for buttons
        await createCookiePreferences(
        ["essential", "analytics", "marketing", "preferences"], // selectedPreferences array
        config.language,           // language
        config.color,             // color (background)
        config.btnColor,          // btnColor
        config.headColor,         // headColor
        config.paraColor,         // paraColor 
        config.secondcolor, 
        typeof config.buttonRadius === 'number' ? config.buttonRadius : parseInt(config.buttonRadius as string), // buttonRadius
        config.animation,         // animation
        config.toggleStates?.customToggle || false, // customToggle
        config.primaryButtonText, // primaryButtonText
        config.secondbuttontext,  // secondbuttontext
        false,                    // skipCommonDiv (false to create toggle button)
        config.toggleStates?.disableScroll || false, // disableScroll
        config.toggleStates?.closebutton || false  ,  // closebutton
       typeof config.buttonRadius === 'number' 
       ? config.buttonRadius 
       : parseInt(config.buttonRadius as string),
       config.Font,
       "", // privacyUrl
       selectedElement // targetDiv
      );
      
    } catch (error) {
      throw error;
    }
  };

  const createCCPAPreferencesWithExistingFunction = async (selectedElement: any, config: BannerConfig) => {
    try {
      
      // Call createCookieccpaPreferences with all required parameters - black text for content, config colors for buttons
      await createCookieccpaPreferences(
        config.language,           // language
        config.color,             // color (background)
        config.btnColor,          // btnColor
        config.headColor,         // headColor
        config.paraColor,         // paraColor      
        config.secondcolor,       // secondcolor
        typeof config.buttonRadius === 'number' ? config.buttonRadius : parseInt(config.buttonRadius as string), // buttonRadius
        config.animation,         // animation
        config.primaryButtonText, // primaryButtonText
        config.secondbuttontext,  // secondbuttontext
        config.toggleStates?.disableScroll || false, // disableScroll
        config.toggleStates?.closebutton || false,   // closebutton
        true,                     // skipCommonDiv (true to avoid duplicate toggle button)
        config.Font ,
        typeof config.buttonRadius === 'number' 
          ? config.buttonRadius 
          : parseInt(config.buttonRadius as string),
        "", // privacyUrl
        selectedElement // targetDiv
      );    
    } catch (error) {
      throw error;
    }
  };
   // Import and use the openAuthScreen from useAuth hook that includes automatic silent auth
   const { openAuthScreen } = useAuth();
    
  const  fetchAnalyticsBlockingsScriptsV2 = async () => {
    try {
      const token = getSessionTokenFromLocalStorage();
      if (!token) {
        openAuthScreen();
        return;
      }

      const siteIdinfo = await webflow.getSiteInfo();
      setSiteInfo(siteIdinfo);

      // First, register the script to get the hosting location
      const hostingScript = await customCodeApi.registerV2BannerCustomCode(token, siteIdinfo.siteId);

      if (hostingScript && hostingScript.result) {
        try {
          // Get the hosted location URL
          const hostedLocation = hostingScript.result.hostedLocation;
          
          if (hostedLocation) {
            try {
              // Fetch the script content from the hosting location
              const scriptResponse = await fetch(hostedLocation);
              if (!scriptResponse.ok) {
                throw new Error(`Failed to fetch script: ${scriptResponse.status}`);
              }
              const scriptContent = await scriptResponse.text();
              
              // Register as inline script with the fetched content
              const inlineScriptData: ScriptRegistrationRequest = {
                siteId: siteIdinfo.siteId,
                isHosted: false,
                scriptData: {
                  displayName: `ConsentBit Banner Script (Inline)`,
                  version: hostingScript.result.version || '1.0.0',
                  sourceCode: scriptContent
                }
              };
              
              const inlineScriptResult = await customCodeApi.registerScript(inlineScriptData, token);
              
              // Apply the inline script to the site head
              if (inlineScriptResult && inlineScriptResult.result) {
                const params: CodeApplication = {
                  targetType: 'site',
                  targetId: siteIdinfo.siteId,
                  scriptId: inlineScriptResult.result.id,
                  location: 'header',
                  version: inlineScriptResult.result.version
                };
                const applyScriptResponse = await customCodeApi.applyV2Script(params, token);
              }
            } catch (fetchError) {
              console.error("Error fetching script content or registering inline script:", fetchError);
              // Fallback to original hosted script registration
              const params: CodeApplication = {
                targetType: 'site',
                targetId: siteIdinfo.siteId,
                scriptId: hostingScript.result.id,
                location: 'header',
                version: hostingScript.result.version
              };
              const applyScriptResponse = await customCodeApi.applyV2Script(params, token);
            }
          } else {
            // If no hostedLocation, apply the original script
            const params: CodeApplication = {
              targetType: 'site',
              targetId: siteIdinfo.siteId,
              scriptId: hostingScript.result.id,
              location: 'header',
              version: hostingScript.result.version
            };
            const applyScriptResponse = await customCodeApi.applyV2Script(params, token);
          }
        }
        catch (error) {
          throw error;
        }
      } else {
      }
    }
    catch (error) {
    }
  };

  const createCompleteBannerStructureWithExistingFunctions = async (config: BannerConfig) => {
    try {
      setIsCreating(true);

      // Get selected element
      const selectedElement = await webflow.getSelectedElement();
      if (!selectedElement) {
        throw new Error('No element selected');
      }

      // Determine animation attribute
      const animationAttribute = config.animation && config.animation !== 'none' ? config.animation : '';

      // Remove existing banners using correct IDs from your structure
      const existingBanners = await webflow.getAllElements();
      for (const element of existingBanners) {
        try {
          // Check if element exists and is valid before accessing its methods
          if (!element) {
            continue;
          }

          // Check for DOM ID using getDomId method
          if (typeof (element as any).getDomId === 'function') {
            try {
              const domId = await (element as any).getDomId();
              if (domId && (domId === 'consent-banner' || domId === 'initial-consent-banner' || 
                           domId === 'main-banner' || domId === 'main-consent-banner' || 
                           domId === 'toggle-consent-btn')) {
                if (typeof element.remove === 'function') {
                  await element.remove();
                }
              }
            } catch (domIdError) {
              // Element might be missing, skip it
              continue;
            }
          }
          // Also check for custom attributes as fallback
          else if (typeof element.getCustomAttribute === 'function') {
            try {
              const customId = await element.getCustomAttribute('id');
              if (customId && (customId === 'consent-banner' || customId === 'initial-consent-banner' || 
                             customId === 'main-banner' || customId === 'main-consent-banner' || 
                             customId === 'toggle-consent-btn')) {
                if (typeof element.remove === 'function') {
                  await element.remove();
                }
              }
            } catch (customAttrError) {
              // Element might be missing, skip it
              continue;
            }
          }
        } catch (cleanupError) {
          // Continue with next element instead of failing completely
        }
      }

      // Create simple banners first
      try {
        await createSimpleGDPRBanner(selectedElement, config, animationAttribute);
        await createGDPRPreferencesWithExistingFunction(selectedElement, config);
       // await createSimpleCCPABanner(selectedElement, config, animationAttribute);
      } catch (bannerCreationError) {
        // Continue with the process even if banner creation fails
      }

      // // Create preference modals
      // try {
      //   await createCCPAPreferencesWithExistingFunction(selectedElement, config);
      // } catch (ccpaError) {
      //   // Continue with the process even if CCPA creation fails
      // }
      
      await fetchAnalyticsBlockingsScriptsV2();
      setIsCreating(false);
      
    } catch (error) {
      setIsCreating(false);
      throw error;
    }

  }
  return {
    createCompleteBannerStructureWithExistingFunctions,
    isCreating,
    showLoading,
    showSuccess,
    showSuccessPublish,
    handleSuccessPublishProceed,
    handleSuccessPublishGoBack
  };
};

// Debug: Add function to inspect banner element in DOM
(window as any).inspectBannerElement = () => {
  
  // Look for banner elements
  const bannerElements = document.querySelectorAll('[id*="consent-banner"], [class*="cookie-banner"], [data-cookie-banner]');
  
  bannerElements.forEach((element, index) => {
  });
  
  // Also check for any elements with black background
  const allElements = document.querySelectorAll('*');
  const blackElements = Array.from(allElements).filter(el => {
    const bgColor = window.getComputedStyle(el).backgroundColor;
    return bgColor === 'rgb(0, 0, 0)' || bgColor === '#000000' || bgColor === 'black';
  });
  
};

export default useBannerCreation;


