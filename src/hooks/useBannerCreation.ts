import { useState } from 'react';
import webflow from '../types/webflowtypes';
import { customCodeApi } from '../services/api';
import { getSessionTokenFromLocalStorage } from '../util/Session';
import createCookiePreferences from './gdprPreference';
import createCookieccpaPreferences from './ccpaPreference';
import { CodeApplication } from '../types/types';
import pkg from '../../package.json';
import { useAppState } from './useAppState';

const appVersion = pkg.version;

// Translations object from App_backup.tsx
const translations = {
  English: {
    heading: "Cookie Settings",
    description: "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.",
    accept: "Accept",
    reject: "Reject",
    preferences: "Preference",
    ccpa: {
      heading: "We value your Privacy",
      description: "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.",
      doNotShare: "Do Not Share My Personal Information"
    }
  },
  Spanish: {
    heading: "Configuración de Cookies",
    description: "Utilizamos cookies para brindarle la mejor experiencia posible. También nos permiten analizar el comportamiento del usuario para mejorar constantemente el sitio web para usted.",
    accept: "Aceptar",
    reject: "Rechazar",
    preferences: "Preferencias",
    ccpa: {
      heading: "Valoramos tu Privacidad",
      description: "Utilizamos cookies para brindarle la mejor experiencia posible. También nos permiten analizar el comportamiento del usuario para mejorar constantemente el sitio web para usted.",
      doNotShare: "No Compartir Mi Información Personal"
    }
  },
  French: {
    heading: "Paramètres des Cookies",
    description: "Nous utilisons des cookies pour vous offrir la meilleure expérience possible. Ils nous permettent également d'analyser le comportement des utilisateurs afin d'améliorer constamment le site Web pour vous.",
    accept: "Accepter",
    reject: "Refuser",
    preferences: "Préférences",
    ccpa: {
      heading: "Nous Respectons Votre Vie Privée",
      description: "Nous utilisons des cookies pour vous offrir la meilleure expérience possible. Ils nous permettent également d'analyser le comportement des utilisateurs afin d'améliorer constamment le site Web pour vous.",
      doNotShare: "Ne Pas Partager Mes Informations Personnelles"
    }
  },
  German: {
    heading: "Cookie-Einstellungen",
    description: "Wir verwenden Cookies, um Ihnen das bestmögliche Erlebnis zu bieten. Sie helfen uns auch, das Nutzerverhalten zu analysieren, um die Website kontinuierlich für Sie zu verbessern.",
    accept: "Akzeptieren",
    reject: "Ablehnen",
    preferences: "Einstellungen",
    ccpa: {
      heading: "Wir Respektieren Ihre Privatsphäre",
      description: "Wir verwenden Cookies, um Ihnen das bestmögliche Erlebnis zu bieten. Sie helfen uns auch, das Nutzerverhalten zu analysieren, um die Website kontinuierlich für Sie zu verbessern.",
      doNotShare: "Meine persönlichen Informationen nicht weitergeben"
    }
  },
  Swedish: {
    heading: "Cookie-inställningar",
    description: "Vi använder cookies för att ge dig den bästa möjliga upplevelsen. De låter oss också analysera användarbeteende för att ständigt förbättra webbplatsen för dig.",
    accept: "Acceptera",
    reject: "Avvisa",
    preferences: "Inställningar",
    ccpa: {
      heading: "Vi Värdesätter Din Integritet",
      description: "Vi använder cookies för att ge dig den bästa möjliga upplevelsen. De låter oss också analysera användarbeteende för att ständigt förbättra webbplatsen för dig.",
      doNotShare: "Dela Inte Min Personliga Information"
    }
  },
  Dutch: {
    heading: "Cookie-instellingen",
    description: "We gebruiken cookies om u de best mogelijke ervaring te bieden. Ze stellen ons ook in staat om gebruikersgedrag te analyseren om de website voortdurend voor u te verbeteren.",
    accept: "Accepteren",
    reject: "Weigeren",
    preferences: "Voorkeuren",
    ccpa: {
      heading: "We Waarderen Uw Privacy",
      description: "We gebruiken cookies om u de best mogelijke ervaring te bieden. Ze stellen ons ook in staat om gebruikersgedrag te analyseren om de website voortdurend voor u te verbeteren.",
      doNotShare: "Deel Mijn Persoonlijke Informatie Niet"
    }
  },
  Italian: {
    heading: "Impostazioni Cookie",
    description: "Utilizziamo i cookie per fornirti la migliore esperienza possibile. Ci permettono anche di analizzare il comportamento degli utenti per migliorare costantemente il sito web per te.",
    accept: "Accetta",
    reject: "Rifiuta",
    preferences: "Preferenze",
    ccpa: {
      heading: "Rispettiamo la Tua Privacy",
      description: "Utilizziamo i cookie per fornirti la migliore esperienza possibile. Ci permettono anche di analizzare il comportamento degli utenti per migliorare costantemente il sito web per te.",
      doNotShare: "Non Condividere Le Mie Informazioni Personali"
    }
  },
  Portuguese: {
    heading: "Configurações de Cookies",
    description: "Usamos cookies para fornecer a melhor experiência possível. Eles também nos permitem analisar o comportamento do usuário para melhorar constantemente o site para você.",
    accept: "Aceitar",
    reject: "Rejeitar",
    preferences: "Preferências",
    ccpa: {
      heading: "Valorizamos Sua Privacidade",
      description: "Usamos cookies para fornecer a melhor experiência possível. Eles também nos permitem analisar o comportamento do usuário para melhorar constantemente o site para você.",
      doNotShare: "Não Compartilhar Minhas Informações Pessoais"
    }
  }
};

export interface BannerConfig {
  color: string;
  bgColor: string;
  btnColor: string;
  paraColor: string;
  secondcolor: string;
  bgColors: string;
  headColor: string;
  secondbuttontext: string;
  primaryButtonText: string;
  Font: string;
  style: string;
  selected: string;
  weight: string;
  borderRadius: number;
  buttonRadius: number;
  animation: string;
  easing: string;
  language: string;
  toggleStates: {
    customToggle: boolean;
    disableScroll: boolean;
    closebutton: boolean;
  };
}

export const useBannerCreation = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccessPublish, setShowSuccessPublish] = useState(false);
    const {
        bannerStyles,
        bannerUI,
        bannerConfig,
        bannerBooleans,
        popups,
        bannerAnimation,
        bannerToggleStates,
        bannerLanguages,
    } = useAppState();

  const handleBannerSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleBannerError = (error: any) => {
    console.error("Banner creation error:", error);
    webflow.notify({ type: "error", message: "An error occurred while creating the banner." });
  };

  const handleSuccessPublishProceed = () => {
    setShowSuccessPublish(false);
    // Add any additional logic for proceeding from success page
  };

  const handleSuccessPublishGoBack = () => {
    setShowSuccessPublish(false);
    // Add any additional logic for going back from success page
  };

  const fetchAnalyticsBlockingsScripts = async () => {
    console.log("Starting V1 analytics blocking script registration...");
    try {
      const token = getSessionTokenFromLocalStorage();
      if (!token) {
        throw new Error("No token available");
      }
      console.log("Token retrieved successfully");

      const siteIdinfo = await webflow.getSiteInfo();
      console.log("Site info retrieved:", siteIdinfo);
      
      const hostingScript = await customCodeApi.registerAnalyticsBlockingScript(token);
      console.log("V1 analytics blocking script registered:", hostingScript);

      if (hostingScript) {
        const scriptId = hostingScript.result.id;
        const version = hostingScript.result.version;
        console.log("Script ID:", scriptId, "Version:", version);

        const params: CodeApplication = {
          targetType: 'site',
          targetId: siteIdinfo.siteId,
          scriptId: scriptId,
          location: 'header',
          version: version
        };
        
        console.log("Applying V1 script with params:", params);
        await customCodeApi.applyScript(params, token);
        console.log("V1 analytics blocking script applied successfully");
      } else {
        console.log("No hosting script returned from registration");
      }
    } catch (error) {
      console.error("Error in fetchAnalyticsBlockingsScripts:", error);
      throw error;
    }
  };

  const fetchAnalyticsBlockingsScriptsV2 = async () => {
    console.log("Starting V2 analytics blocking script registration...");
    try {
      const token = getSessionTokenFromLocalStorage();
      if (!token) {
        throw new Error("No token available");
      }
      console.log("Token retrieved successfully");

      const siteIdinfo = await webflow.getSiteInfo();
      console.log("Site info retrieved:", siteIdinfo);
      
      const hostingScript = await customCodeApi.registerV2BannerCustomCode(token);
      console.log("V2 analytics blocking script registered:", hostingScript);

      if (hostingScript) {
        const scriptId = hostingScript.result.id;
        const version = hostingScript.result.version;
        console.log("Script ID:", scriptId, "Version:", version);

        const params: CodeApplication = {
          targetType: 'site',
          targetId: siteIdinfo.siteId,
          scriptId: scriptId,
          location: 'header',
          version: version
        };
        
        console.log("Applying V2 script with params:", params);
        await customCodeApi.applyV2Script(params, token);
        console.log("V2 analytics blocking script applied successfully");
      } else {
        console.log("No hosting script returned from V2 registration");
      }
    } catch (error) {
      console.error("Error in fetchAnalyticsBlockingsScriptsV2:", error);
      throw error;
    }
  };

     const createGDPRBanner = async (config: BannerConfig, skipCommonDiv: boolean = false) => {
     console.log("=== GDPR BANNER CREATION START ===");
     setIsCreating(true);
     setShowLoading(true);
    
    console.log("Creating GDPR banner with config:", bannerStyles);
    console.log("Language:", bannerLanguages.language);
    console.log("SkipCommonDiv:", skipCommonDiv);
    console.log("bannerAnimation object:", bannerAnimation);
    console.log("bannerAnimation.animation:", bannerAnimation.animation);
    
    try {
      console.log("Starting GDPR banner creation process...");
      // Cleanup existing banners
      console.log("Getting all elements for cleanup...");
      const allElements = await webflow.getAllElements();
      console.log("All elements retrieved:", allElements.length);
      
      const idsToCheck = ["consent-banner", "main-banner", "toggle-consent-btn"];
      console.log("Checking for existing banners with IDs:", idsToCheck);

      const domIdPromises = allElements.map(async (el) => {
        const domId = await el.getDomId?.();
        return { el, domId };
      });

      console.log("Getting DOM IDs for all elements...");
      const elementsWithDomIds = await Promise.all(domIdPromises);
      console.log("DOM IDs retrieved for all elements");
      
      const matchingElements = elementsWithDomIds
        .filter(({ domId }) => domId && idsToCheck.includes(domId))
        .map(({ el }) => el);
      
      console.log("Found matching elements to remove:", matchingElements.length);

      if (matchingElements.length > 0) {
        console.log("Removing existing banner elements...");
        await Promise.all(matchingElements.map(async (el) => {
          try {
            const children = await el.getChildren?.();
            if (children?.length) {
              await Promise.all(children.map(child => child.remove()));
            }
            await el.remove();
          } catch (err) {
            console.error("Error removing element:", err);
          }
        }));
        console.log("Existing banner elements removed");
             } else {
         console.log("No existing banner elements found to remove");
       }

              console.log("Getting selected element for GDPR banner...");
       const selectedElement = await webflow.getSelectedElement();
       console.log("Selected element retrieved:", selectedElement);
       console.log("Selected element methods:", Object.keys(selectedElement || {}));
       if (!selectedElement) {
         throw new Error("No element selected in the Designer.");
       }

       console.log("Creating newDiv for GDPR banner...");
       console.log("webflow.elementPresets.DivBlock:", webflow.elementPresets.DivBlock);
       const newDiv = await selectedElement.before(webflow.elementPresets.DivBlock);
       console.log("newDiv created:", newDiv);
       console.log("newDiv methods:", Object.keys(newDiv || {}));
      if (!newDiv) {
        throw new Error("Failed to create div.");
      }

             if ((newDiv as any).setDomId) {
         console.log("Setting DOM ID for newDiv...");
         await (newDiv as any).setDomId("consent-banner");
         console.log("DOM ID set successfully");
       }

       console.log("Creating style names object...");
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
        divStyle, paragraphStyle, buttonContainerStyle, prefrenceButtonStyle, 
        declineButtonStyle, buttonStyle, headingStyle, innerDivStyle, 
        secondBackgroundStyle, closebutton
      ] = styles;

      
      const animationAttribute = bannerAnimation.animation || "fade";
      console.log("GDPR animationAttribute value:", animationAttribute);

      const divPropertyMap: Record<string, string> = {
        "background-color": config.color,
        "position": "fixed",
        "z-index": "99999",
        "padding-top": "20px",
        "padding-right": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "border-radius": `${config.borderRadius}px`,
        "display": "none",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
        "font-family": config.Font,
      };

      if (window.innerWidth <= 768) {
        divPropertyMap["width"] = "100%";
        divPropertyMap["height"] = "40%";
      }
      divPropertyMap["bottom"] = "3%";

      switch (config.selected) {
        case "left":
          divPropertyMap["left"] = "3%";
          divPropertyMap["right"] = "auto";
          divPropertyMap["transform"] = "translate3d(0px, 0, 0)";
          break;
        case "center":
          divPropertyMap["left"] = "50%";
          delete divPropertyMap["right"];
          divPropertyMap["transform"] = "translate3d(-50%, 0, 0)";
          break;
        case "right":
        default:
          divPropertyMap["right"] = "3%";
          divPropertyMap["transform"] = "translate3d(0px, 0, 0)";
          divPropertyMap["left"] = "auto";
          break;
      }

      switch (config.style) {
        case "bigstyle":
          divPropertyMap["width"] = "370px";
          divPropertyMap["min-height"] = "284px";
          break;
        case "fullwidth":
          divPropertyMap["width"] = "100%";
          divPropertyMap["min-height"] = "167px";
          divPropertyMap["left"] = "0px";
          divPropertyMap["right"] = "0px";
          divPropertyMap["bottom"] = "0px";
          divPropertyMap["transform"] = "translate3d(0px, 0, 0)";
          break;
        case "centeralign":
          divPropertyMap["width"] = "566px";
          divPropertyMap["min-height"] = "167px";
          break;
        case "align":
        case "alignstyle":
        default:
          divPropertyMap["width"] = "438px";
          divPropertyMap["min-height"] = "220px";
          break;
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
      const responsiveOptions = { breakpoint: "small", pseudoClass: "" } as const;

      const paragraphPropertyMap: Record<string, string> = {
        "color": config.paraColor,
        "font-size": "16px",
        "font-weight": `${config.weight}`,
        "line-height": "1.5",
        "text-align": "left",
        "margin-top": "0",
        "margin-right": "0",
        "margin-bottom": "10px",
        "margin-left": "0",
        "display": "block",
        "width": "100%",
      };
      if (config.style === "centeralign") {
        paragraphPropertyMap["text-align"] = "center";
      }

      const buttonContainerPropertyMap: Record<string, string> = {
        "display": "flex",
        "justify-content": "right",
        "margin-top": "10px",
        "width": "100%",
      };
      if (config.style === "centeralign") {
        buttonContainerPropertyMap["justify-content"] = "center";
      }

      const buttonPropertyMap: Record<string, string> = {
        "border-radius": `${config.buttonRadius}px`,
        "cursor": "pointer",
        "background-color": config.secondcolor,
        "margin-left": "5px",
        "margin-right": "5px",
        "min-width": "80px",
        "color": config.primaryButtonText,
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

      const declineButtonPropertyMap: Record<string, string> = {
        "border-radius": `${config.buttonRadius}px`,
        "cursor": "pointer",
        "background-color": config.btnColor,
        "color": config.secondbuttontext,
        "margin-left": "5px",
        "margin-right": "5px",
        "min-width": "80px",
        "text-align": "center",
        "display": "flex",
        "justify-content": "center",
      };

      const secondbackgroundPropertyMap: Record<string, string> = {
        "position": "absolute",
        "background-color": config.bgColors,
        "width": "35%",
        "right": "0px",
        "height": "100%",
        "z-index": "-3",
        "opacity": "30%",
        "bottom": "0px",
        "border-bottom-right-radius": `${config.borderRadius}px`,
        "border-top-right-radius": `${config.borderRadius}px`
      };

      const headingPropertyMap: Record<string, string> = {
        "color": config.headColor,
        "font-size": "20px",
        "font-weight": `${config.weight}`,
        "text-align": "left",
        "margin-top": "0",
        "margin-bottom": "10px",
        "width": "100%",
      };
      if (config.style === "centeralign") {
        headingPropertyMap["text-align"] = "center";
      }

      const innerdivPropertyMap: Record<string, string> = {
        "max-width": "877px",
        "margin-left": "auto",
        "margin-right": "auto",
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

             console.log("Setting style properties...");
       console.log("Setting divStyle properties...");
       await divStyle.setProperties(divPropertyMap);
       console.log("Setting divStyle responsive properties...");
       await divStyle.setProperties(responsivePropertyMap, responsiveOptions);
       console.log("Setting paragraphStyle properties...");
       await paragraphStyle.setProperties(paragraphPropertyMap);
       console.log("Setting buttonContainerStyle properties...");
       await buttonContainerStyle.setProperties(buttonContainerPropertyMap);
       console.log("Setting buttonContainerStyle responsive properties...");
       await buttonContainerStyle.setProperties(responsivebuttonPropertyMap, responsiveOptions);
       console.log("Setting buttonStyle properties...");
       await buttonStyle.setProperties(buttonPropertyMap);
       console.log("Setting declineButtonStyle properties...");
       await declineButtonStyle.setProperties(declineButtonPropertyMap);
       console.log("Setting prefrenceButtonStyle properties...");
       await prefrenceButtonStyle.setProperties(declineButtonPropertyMap);
       console.log("Setting headingStyle properties...");
       await headingStyle.setProperties(headingPropertyMap);
       console.log("Setting secondBackgroundStyle properties...");
       await secondBackgroundStyle.setProperties(secondbackgroundPropertyMap);
       console.log("Setting innerDivStyle properties...");
       await innerDivStyle.setProperties(innerdivPropertyMap);
       console.log("Setting closebutton properties...");
       await closebutton.setProperties(CloseButtonPropertyMap);
              console.log("All style properties set successfully");

              console.log("Applying styles to newDiv...");
       if (newDiv.setStyles) {
         await newDiv.setStyles([divStyle]);
         console.log("Styles applied to newDiv successfully");
       } else {
         console.log("newDiv.setStyles not available");
       }

                               console.log("Setting custom attributes...");
         if (newDiv.setCustomAttribute) {
           // Only set animation attribute if it has a valid value
           if (animationAttribute && animationAttribute.trim() !== "") {
             console.log("Setting data-animation attribute:", animationAttribute);
             try {
               const animationPromise = newDiv.setCustomAttribute("data-animation", animationAttribute);
               const animationTimeout = new Promise((_, reject) => 
                 setTimeout(() => reject(new Error("Animation attribute timeout")), 5000)
               );
               await Promise.race([animationPromise, animationTimeout]);
               console.log("data-animation attribute set successfully");
             } catch (error) {
               console.error("Error setting data-animation attribute:", error);
               throw error;
             }
           } else {
             console.log("Skipping data-animation attribute - no valid animation value");
           }
          
          console.log("Setting data-cookie-banner attribute:", config.toggleStates.disableScroll ? "true" : "false");
          try {
            const cookieBannerPromise = newDiv.setCustomAttribute("data-cookie-banner", config.toggleStates.disableScroll ? "true" : "false");
            const cookieBannerTimeout = new Promise((_, reject) => 
              setTimeout(() => reject(new Error("Cookie banner attribute timeout")), 5000)
            );
            await Promise.race([cookieBannerPromise, cookieBannerTimeout]);
            console.log("data-cookie-banner attribute set successfully");
          } catch (error) {
            console.error("Error setting data-cookie-banner attribute:", error);
            throw error;
          }
          
          console.log("Custom attributes set successfully");
        } else {
          console.log("newDiv.setCustomAttribute not available");
        }

             console.log("=== ELEMENT CREATION PHASE START ===");
       console.log("Creating innerdiv for GDPR banner...");
       console.log("About to call selectedElement.before for innerdiv...");
       console.log("Testing if selectedElement.before is available...");
       console.log("selectedElement.before exists:", !!selectedElement.before);
       console.log("webflow.elementPresets.DivBlock exists:", !!webflow.elementPresets.DivBlock);
       console.log("selectedElement type:", typeof selectedElement);
       console.log("selectedElement keys:", Object.keys(selectedElement || {}));
       
              // Test if we can call the method without hanging
       console.log("About to test selectedElement.before call...");
       let innerdiv: any;
       try {
         console.log("Calling selectedElement.before with DivBlock...");
         // Add timeout to prevent hanging
         const innerdivPromise = selectedElement.before(webflow.elementPresets.DivBlock);
         console.log("innerdivPromise created, waiting for result...");
         const timeoutPromise = new Promise((_, reject) => 
           setTimeout(() => reject(new Error("Element creation timeout")), 10000)
         );
         
         innerdiv = await Promise.race([innerdivPromise, timeoutPromise]) as any;
         console.log("innerdiv created:", innerdiv);
         console.log("innerdiv methods:", Object.keys(innerdiv || {}));
         
         if (innerdiv && innerdiv.setStyles) {
           await innerdiv.setStyles([innerDivStyle]);
           console.log("innerdiv styles applied");
         } else {
           console.log("Failed to apply styles to innerdiv");
         }
       } catch (error) {
         console.error("Error creating innerdiv:", error);
         throw new Error(`Failed to create innerdiv: ${error}`);
       }

      let SecondDiv;
      if (config.style === "alignstyle") {
        SecondDiv = await selectedElement.before(webflow.elementPresets.DivBlock);
        if (SecondDiv.setStyles) {
          await SecondDiv.setStyles([secondBackgroundStyle]);
        }
      }

      const tempHeading = await selectedElement.before(webflow.elementPresets.Heading);
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
        const language = config.language || "English";
        const headingText = translations[language as keyof typeof translations]?.heading || "Cookie Settings";
        console.log("Setting heading text:", headingText, "for language:", language);
        await tempHeading.setTextContent(headingText);
      }

      let Closebuttons = null;
      if (config.toggleStates.closebutton) {
        Closebuttons = await selectedElement.before(webflow.elementPresets.Paragraph);
        if (!Closebuttons) {
          throw new Error("Failed to create paragraph");
        }
        if (Closebuttons.setStyles) {
          await Closebuttons.setStyles([closebutton]);
          await Closebuttons.setTextContent("X");
          await Closebuttons.setCustomAttribute("consentbit", "close");
        }
      }

      const tempParagraph = await selectedElement.before(webflow.elementPresets.Paragraph);
      if (!tempParagraph) {
        throw new Error("Failed to create paragraph");
      }
      if (tempParagraph.setStyles) {
        await tempParagraph.setStyles([paragraphStyle]);
      }
      if (tempParagraph.setTextContent) {
        const language = config.language || "English";
        const paragraphText = translations[language as keyof typeof translations]?.description || "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.";
        console.log("Setting paragraph text:", paragraphText, "for language:", language);
        await tempParagraph.setTextContent(paragraphText);
      }

      const buttonContainer = await selectedElement.before(webflow.elementPresets.DivBlock);
      if (!buttonContainer) {
        throw new Error("Failed to create button container");
      }
      await buttonContainer.setStyles([buttonContainerStyle]);

      const prefrenceButton = await selectedElement.before(webflow.elementPresets.Button);
      if (!prefrenceButton) {
        throw new Error("Failed to create preference button");
      }
      await prefrenceButton.setStyles([prefrenceButtonStyle]);
      const language = config.language || "English";
      await prefrenceButton.setTextContent(translations[language as keyof typeof translations]?.preferences || "Preferences");
      if ((prefrenceButton as any).setDomId) {
        await (prefrenceButton as any).setDomId("preferences-btn");
      }

      const acceptButton = await selectedElement.before(webflow.elementPresets.Button);
      if (!acceptButton) {
        throw new Error("Failed to create accept button");
      }
      await acceptButton.setStyles([buttonStyle]);
      await acceptButton.setTextContent(translations[language as keyof typeof translations]?.accept || "Accept");
      if ((acceptButton as any).setDomId) {
        await (acceptButton as any).setDomId("accept-btn");
      }

      const declineButton = await selectedElement.before(webflow.elementPresets.Button);
      if (!declineButton) {
        throw new Error("Failed to create decline button");
      }
      await declineButton.setStyles([declineButtonStyle]);
      await declineButton.setTextContent(translations[language as keyof typeof translations]?.reject || "Reject");
      if ((declineButton as any).setDomId) {
        await (declineButton as any).setDomId("decline-btn");
      }

      console.log("Starting to append elements to GDPR banner...");
      console.log("newDiv.append exists:", !!newDiv.append);
      console.log("innerdiv exists:", !!innerdiv);
      console.log("tempHeading exists:", !!tempHeading);
      console.log("tempParagraph exists:", !!tempParagraph);
      console.log("buttonContainer exists:", !!buttonContainer);
      
      if (newDiv.append && innerdiv && tempHeading && tempParagraph && buttonContainer) {
        console.log("Appending innerdiv to newDiv...");
        await newDiv.append(innerdiv);
        console.log("innerdiv appended successfully");
        
        if (Closebuttons) {
          console.log("Appending Closebuttons...");
          await newDiv.append(Closebuttons);
        }
        
        if (SecondDiv) {
          console.log("Appending SecondDiv to innerdiv...");
          await innerdiv.append(SecondDiv);
        }
        
        console.log("Appending tempHeading to innerdiv...");
        await innerdiv.append(tempHeading);
        console.log("Appending tempParagraph to innerdiv...");
        await innerdiv.append(tempParagraph);
        console.log("Appending buttonContainer to innerdiv...");
        await innerdiv.append(buttonContainer);

        if (buttonContainer.append && prefrenceButton && declineButton && acceptButton) {
          console.log("Appending buttons to buttonContainer...");
          await buttonContainer.append(prefrenceButton);
          await buttonContainer.append(declineButton);
          await buttonContainer.append(acceptButton);
          console.log("All buttons appended successfully");
        } else {
          console.log("Button append failed - missing elements:", {
            buttonContainerAppend: !!buttonContainer.append,
            prefrenceButton: !!prefrenceButton,
            declineButton: !!declineButton,
            acceptButton: !!acceptButton
          });
        }
      } else {
        console.log("Main append failed - missing elements:", {
          newDivAppend: !!newDiv.append,
          innerdiv: !!innerdiv,
          tempHeading: !!tempHeading,
          tempParagraph: !!tempParagraph,
          buttonContainer: !!buttonContainer
        });
      }

             console.log("=== CALLING createCookiePreferences ===");
             console.log("Parameters:", {
               selectedPreferences: ["essential", "analytics", "marketing", "preferences"],
               language: bannerLanguages.language,
               color: bannerStyles.color,
               btnColor: bannerStyles.btnColor,
               headColor: bannerStyles.headColor,
               paraColor: bannerStyles.paraColor,
               secondcolor: bannerStyles.secondcolor,
               buttonRadius: bannerConfig.buttonRadius,
               animation: bannerAnimation.animation,
               customToggle: bannerToggleStates.toggleStates.customToggle,
               primaryButtonText: bannerStyles.primaryButtonText,
               secondbuttontext: bannerStyles.secondbuttontext,
               skipCommonDiv,
               disableScroll: bannerToggleStates.toggleStates.disableScroll,
               closebutton: bannerToggleStates.toggleStates.closebutton,
               donotshare: bannerToggleStates.toggleStates.donotshare ? "true" : "false"
             });
             
             try {
               console.log("Starting createCookiePreferences...");
               console.log("About to call createCookiePreferences function...");
               
               await createCookiePreferences(
                 ["essential", "analytics", "marketing", "preferences"],
                 bannerLanguages.language,
                 bannerStyles.color,
                 bannerStyles.btnColor,
                 bannerStyles.headColor,
                 bannerStyles.paraColor,
                 bannerStyles.secondcolor,
                 bannerConfig.buttonRadius,
                 bannerAnimation.animation,
                 bannerToggleStates.toggleStates.customToggle,
                 bannerStyles.primaryButtonText,
                 bannerStyles.secondbuttontext,
                 skipCommonDiv,
                 bannerToggleStates.toggleStates.disableScroll,
                 bannerToggleStates.toggleStates.closebutton,                
               );
               
               console.log("createCookiePreferences completed successfully");
               
               // Display list of created DOM elements with IDs
               console.log("=== CREATED DOM ELEMENTS WITH IDs ===");
               try {
                 const allElements = await webflow.getAllElements();
                 const elementsWithIds = [];
                 
                 for (const element of allElements) {
                   try {
                     const domId = await element.getDomId?.();
                     if (domId) {
                       elementsWithIds.push({
                         id: domId,
                         element: element
                       });
                     }
                   } catch (err) {
                     // Skip elements that don't have getDomId method
                   }
                 }
                 
                 console.log("Total elements with DOM IDs:", elementsWithIds.length);
                 elementsWithIds.forEach((item, index) => {
                   console.log(`${index + 1}. DOM ID: "${item.id}"`);
                 });
                 
                 // Show specific banner-related IDs
                 const bannerIds = elementsWithIds.filter(item => 
                   item.id.includes('consent') || 
                   item.id.includes('banner') || 
                   item.id.includes('preference') ||
                   item.id.includes('toggle') ||
                   item.id.includes('accept') ||
                   item.id.includes('decline') ||
                   item.id.includes('preferences')
                 );
                 
                 if (bannerIds.length > 0) {
                   console.log("=== BANNER-RELATED DOM ELEMENTS ===");
                   bannerIds.forEach((item, index) => {
                     console.log(`${index + 1}. Banner Element: "${item.id}"`);
                   });
                 }
                 
               } catch (error) {
                 console.error("Error getting DOM elements:", error);
               }
               
             } catch (error) {
               console.error("Error in createCookiePreferences:", error);
               console.error("Error details:", error.message);
               console.error("Error stack:", error.stack);
               throw error;
             }

      console.log("=== ANALYTICS BLOCKING SCRIPT PHASE ===");
      console.log("Current app version:", appVersion);
      try {
        if (appVersion === '1.0.0') {
          console.log("Using V1 analytics blocking script...");
          await fetchAnalyticsBlockingsScripts();
          console.log("V1 analytics blocking script applied successfully");
        } else {
          console.log("Using V2 analytics blocking script...");
          await fetchAnalyticsBlockingsScriptsV2();
          console.log("V2 analytics blocking script applied successfully");
        }
        
        // Add a delay to ensure script is loaded
        console.log("Waiting for script to load...");
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("Script loading delay completed");
        
        // Check if the script is loaded
        const scripts = document.querySelectorAll('script[src*="consent"]');
        console.log("Found consent scripts:", scripts.length);
        scripts.forEach((script, index) => {
          const scriptElement = script as HTMLScriptElement;
          console.log(`Script ${index}:`, scriptElement.src);
        });
        
                 // Check if the script is loaded in the head
         const headScripts = document.head.querySelectorAll('script');
         console.log("Total scripts in head:", headScripts.length);
         headScripts.forEach((script, index) => {
           const scriptElement = script as HTMLScriptElement;
           if (scriptElement.src && scriptElement.src.includes('consent')) {
             console.log(`Consent script ${index} in head:`, scriptElement.src);
           }
         });
         
        
       
       
         
       } catch (error) {
         console.error("Error applying analytics blocking script:", error);
         throw error;
       }

             console.log("GDPR banner creation completed, setting success timeout...");
       setTimeout(() => {
         console.log("GDPR banner success timeout triggered");
         handleBannerSuccess();
       }, 30000);

    } catch (error) {
      handleBannerError(error);
    } finally {
      setIsCreating(false);
      setShowLoading(false);
    }
  };

  const createCCPABanner = async (config: BannerConfig) => {
    console.log("=== CCPA BANNER CREATION START ===");
    setIsCreating(true);
    setShowLoading(true);
    
    console.log("Creating CCPA banner with config:", config);
    console.log("Language:", config.language);
    console.log("CCPA bannerAnimation object:", bannerAnimation);
    console.log("CCPA bannerAnimation.animation:", bannerAnimation.animation);
    
    try {
      // Cleanup existing banners
      const allElements = await webflow.getAllElements();
      const idsToCheck = ["initial-consent-banner", "main-consent-banner", "toggle-consent-btn"];

      const domIdPromises = allElements.map(async (el) => {
        const domId = await el.getDomId?.();
        return { el, domId };
      });

      const elementsWithDomIds = await Promise.all(domIdPromises);
      const matchingElements = elementsWithDomIds
        .filter(({ domId }) => domId && idsToCheck.includes(domId))
        .map(({ el }) => el);

      await Promise.all(matchingElements.map(async (el) => {
        try {
          const children = await el.getChildren?.();
          if (children?.length) {
            await Promise.all(children.map(child => child.remove()));
          }
          await el.remove();
        } catch (err) {
          console.error("Error removing element:", err);
        }
      }));

      const selectedElement = await webflow.getSelectedElement();
      if (!selectedElement) {
        throw new Error("No element selected in the Designer.");
      }

      const newDiv = await selectedElement.before(webflow.elementPresets.DivBlock);
      if (!newDiv) {
        throw new Error("Failed to create div.");
      }

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
        divStyle, paragraphStyle, buttonContainerStyle, headingStyle,
        Linktext, innerDivStyle, secondBackgroundStyle, closebutton
      ] = styles;

      
      const animationAttribute = bannerAnimation.animation || "fade";
      console.log("CCPA animationAttribute value:", animationAttribute);

      const divPropertyMap: Record<string, string> = {
        "background-color":bannerStyles.color,
        "position": "fixed",
        "z-index": "99999",
        "padding-top": "20px",
        "padding-right": "20px",
        "padding-bottom": "20px",
        "padding-left": "20px",
        "border-radius": `${config.borderRadius}px`,
        "display": "none",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
        "font-family": config.Font,
      };

      if (window.innerWidth <= 768) {
        divPropertyMap["width"] = "100%";
        divPropertyMap["height"] = "40%";
      }
      divPropertyMap["bottom"] = "3%";

      switch (config.selected) {
        case "left":
          divPropertyMap["left"] = "3%";
          divPropertyMap["right"] = "auto";
          divPropertyMap["transform"] = "translate3d(0px, 0, 0)";
          break;
        case "center":
          divPropertyMap["left"] = "50%";
          delete divPropertyMap["right"];
          divPropertyMap["transform"] = "translate3d(-50%, 0, 0)";
          break;
        case "right":
        default:
          divPropertyMap["right"] = "3%";
          divPropertyMap["transform"] = "translate3d(0px, 0, 0)";
          divPropertyMap["left"] = "auto";
          break;
      }

      switch (config.style) {
        case "bigstyle":
          divPropertyMap["width"] = "370px";
          divPropertyMap["min-height"] = "284px";
          break;
        case "fullwidth":
          divPropertyMap["width"] = "100%";
          divPropertyMap["min-height"] = "167px";
          divPropertyMap["left"] = "0px";
          divPropertyMap["right"] = "0px";
          divPropertyMap["bottom"] = "0px";
          divPropertyMap["transform"] = "translate3d(0px, 0, 0)";
          break;
        case "centeralign":
          divPropertyMap["width"] = "566px";
          divPropertyMap["min-height"] = "167px";
          break;
        case "align":
        case "alignstyle":
        default:
          divPropertyMap["width"] = "438px";
          divPropertyMap["min-height"] = "220px";
          break;
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
      const responsiveOptions = { breakpoint: "small", pseudoClass: "" } as const;

      const paragraphPropertyMap: Record<string, string> = {
        "color": config.paraColor,
        "font-size": "16px",
        "font-weight": `${config.weight}`,
        "line-height": "1.5",
        "text-align": "left",
        "margin-top": "0",
        "margin-right": "0",
        "margin-bottom": "10px",
        "margin-left": "0",
        "display": "block",
        "width": "100%",
      };
      if (config.style === "centeralign") {
        paragraphPropertyMap["text-align"] = "center";
      }

      const buttonContainerPropertyMap: Record<string, string> = {
        "display": "flex",
        "justify-content": "left",
        "margin-top": "10px",
        "width": "100%",
      };
      if (config.style === "centeralign") {
        buttonContainerPropertyMap["justify-content"] = "center";
      }

      const declineButtonPropertyMap: Record<string, string> = {
        "border-radius": "48px",
        "cursor": "pointer",
        "background-color": "rgba(241, 241, 241, 1)",
        "color": "rgba(72, 57, 153, 1)",
        "margin-left": "5px",
        "margin-right": "5px",
        "min-width": "80px",
      };

      const headingPropertyMap: Record<string, string> = {
        "color": config.headColor,
        "font-size": "20px",
        "font-weight": `${config.weight}`,
        "text-align": "left",
        "margin-top": "0",
        "margin-bottom": "10px",
        "width": "100%",
      };
      if (config.style === "centeralign") {
        headingPropertyMap["text-align"] = "center";
      }

      const innerdivPropertyMap: Record<string, string> = {
        "max-width": "877px",
        "margin-left": "auto",
        "margin-right": "auto",
      };

      const secondbackgroundPropertyMap: Record<string, string> = {
        "position": "absolute",
        "background-color": config.bgColors,
        "width": "35%",
        "right": "0px",
        "height": "100%",
        "z-index": "-3",
        "opacity": "30%",
        "bottom": "0px",
        "border-bottom-right-radius": `${config.borderRadius}px`,
        "border-top-right-radius": `${config.borderRadius}px`
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
      await Linktext.setProperties(declineButtonPropertyMap);
      await headingStyle.setProperties(headingPropertyMap);
      await innerDivStyle.setProperties(innerdivPropertyMap);
      await secondBackgroundStyle.setProperties(secondbackgroundPropertyMap);
      await closebutton.setProperties(CloseButtonPropertyMap);

      if (newDiv.setStyles) {
        await newDiv.setStyles([divStyle]);
      }

             if (newDiv.setCustomAttribute) {
         // Only set animation attribute if it has a valid value
         if (animationAttribute && animationAttribute.trim() !== "") {
           console.log("Setting CCPA data-animation attribute:", animationAttribute);
           try {
             const animationPromise = newDiv.setCustomAttribute("data-animation", animationAttribute);
             const animationTimeout = new Promise((_, reject) => 
               setTimeout(() => reject(new Error("CCPA animation attribute timeout")), 5000)
             );
             await Promise.race([animationPromise, animationTimeout]);
             console.log("CCPA data-animation attribute set successfully");
           } catch (error) {
             console.error("Error setting CCPA data-animation attribute:", error);
             throw error;
           }
         } else {
           console.log("Skipping CCPA data-animation attribute - no valid animation value");
         }
         
         console.log("Setting CCPA data-cookie-banner attribute:", bannerToggleStates.toggleStates.disableScroll ? "true" : "false");
         try {
           const cookieBannerPromise = newDiv.setCustomAttribute("data-cookie-banner", bannerToggleStates.toggleStates.disableScroll ? "true" : "false");
           const cookieBannerTimeout = new Promise((_, reject) => 
             setTimeout(() => reject(new Error("CCPA cookie banner attribute timeout")), 5000)
           );
           await Promise.race([cookieBannerPromise, cookieBannerTimeout]);
           console.log("CCPA data-cookie-banner attribute set successfully");
         } catch (error) {
           console.error("Error setting CCPA data-cookie-banner attribute:", error);
           throw error;
         }
       }

      // Create inner elements following App_backup.tsx pattern
      console.log("Creating innerdiv for CCPA banner...");
      const innerdiv = await selectedElement.before(webflow.elementPresets.DivBlock);
      console.log("CCPA innerdiv created:", innerdiv);
      await innerdiv.setStyles([innerDivStyle]);
      console.log("CCPA innerdiv styles applied");

      let SecondDiv;
      if (config.style === "alignstyle") {
        SecondDiv = await selectedElement.before(webflow.elementPresets.DivBlock);
        if (SecondDiv.setStyles) {
          await SecondDiv.setStyles([secondBackgroundStyle]);
        }
      }

      const tempHeading = await selectedElement.before(webflow.elementPresets.Heading);
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
        const language = config.language || "English";
        const headingText = translations[language as keyof typeof translations]?.ccpa.heading || "We value your Privacy";
        console.log("Setting CCPA heading text:", headingText, "for language:", language);
        await tempHeading.setTextContent(headingText);
      }

      let Closebuttons = null;
      if (bannerToggleStates.toggleStates.closebutton) {
        Closebuttons = await selectedElement.before(webflow.elementPresets.Paragraph);
        if (!Closebuttons) {
          throw new Error("Failed to create paragraph");
        }
        if (Closebuttons.setStyles) {
          await Closebuttons.setStyles([closebutton]);
          await Closebuttons.setTextContent("X");
          await Closebuttons.setCustomAttribute("consentbit", "close");
        }
      }

      const tempParagraph = await selectedElement.before(webflow.elementPresets.Paragraph);
      if (!tempParagraph) {
        throw new Error("Failed to create paragraph");
      }
      if (tempParagraph.setStyles) {
        await tempParagraph.setStyles([paragraphStyle]);
      }
      if (tempParagraph.setTextContent) {
        const language = config.language || "English";
        const paragraphText = translations[language as keyof typeof translations]?.ccpa.description || "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.";
        console.log("Setting CCPA paragraph text:", paragraphText, "for language:", language);
        await tempParagraph.setTextContent(paragraphText);
      }

      const buttonContainer = await selectedElement.before(webflow.elementPresets.DivBlock);
      if (!buttonContainer) {
        throw new Error("Failed to create button container");
      }
      await buttonContainer.setStyles([buttonContainerStyle]);

      const prefrenceButton = await selectedElement.before(webflow.elementPresets.LinkBlock);
      if (!prefrenceButton) {
        throw new Error("Failed to create preference button");
      }
      await prefrenceButton.setStyles([Linktext]);
      const language = config.language || "English";
      await prefrenceButton.setTextContent(translations[language as keyof typeof translations]?.ccpa.doNotShare || "Do Not Share My Personal Information");
      if ((prefrenceButton as any).setDomId) {
        await (prefrenceButton as any).setDomId("do-not-share-link");
      }

      console.log("Starting to append elements to CCPA banner...");
      console.log("CCPA newDiv.append exists:", !!newDiv.append);
      console.log("CCPA innerdiv exists:", !!innerdiv);
      console.log("CCPA tempHeading exists:", !!tempHeading);
      console.log("CCPA tempParagraph exists:", !!tempParagraph);
      console.log("CCPA buttonContainer exists:", !!buttonContainer);
      
      if (newDiv.append && innerdiv && tempHeading && tempParagraph && buttonContainer) {
        console.log("Appending CCPA innerdiv to newDiv...");
        await newDiv.append(innerdiv);
        console.log("CCPA innerdiv appended successfully");
        
        if (Closebuttons) {
          console.log("Appending CCPA Closebuttons...");
          await newDiv.append(Closebuttons);
        }
        
        if (SecondDiv) {
          console.log("Appending CCPA SecondDiv to innerdiv...");
          await innerdiv.append(SecondDiv);
        }
        
        console.log("Appending CCPA tempHeading to innerdiv...");
        await innerdiv.append(tempHeading);
        console.log("Appending CCPA tempParagraph to innerdiv...");
        await innerdiv.append(tempParagraph);
        console.log("Appending CCPA buttonContainer to innerdiv...");
        await innerdiv.append(buttonContainer);

        if (buttonContainer.append && prefrenceButton) {
          console.log("Appending CCPA button to buttonContainer...");
          await buttonContainer.append(prefrenceButton);
          console.log("CCPA button appended successfully");
        } else {
          console.log("CCPA button append failed - missing elements:", {
            buttonContainerAppend: !!buttonContainer.append,
            prefrenceButton: !!prefrenceButton
          });
        }
      } else {
        console.log("CCPA main append failed - missing elements:", {
          newDivAppend: !!newDiv.append,
          innerdiv: !!innerdiv,
          tempHeading: !!tempHeading,
          tempParagraph: !!tempParagraph,
          buttonContainer: !!buttonContainer
        });
      }

      console.log("=== CALLING createCookieccpaPreferences ===");
      console.log("CCPA Parameters:", {
        language: bannerLanguages.language,
        color: bannerStyles.color,
        btnColor: bannerStyles.btnColor,
        headColor: bannerStyles.headColor,
        paraColor: bannerStyles.paraColor,
        secondcolor: bannerStyles.secondcolor,
        buttonRadius: bannerConfig.buttonRadius,
        animation: bannerAnimation.animation,
        primaryButtonText: bannerStyles.primaryButtonText,
        secondbuttontext: bannerStyles.secondbuttontext,
        disableScroll: bannerToggleStates.toggleStates.disableScroll,
        closebutton: bannerToggleStates.toggleStates.closebutton,
        Font: bannerStyles.Font
      });
      
      try {
        console.log("Starting createCookieccpaPreferences...");
        await createCookieccpaPreferences(
          bannerLanguages.language,
          bannerStyles.color,
          bannerStyles.btnColor,
          bannerStyles.headColor,
          bannerStyles.paraColor,
          bannerStyles.secondcolor,
          bannerConfig.buttonRadius,
          bannerAnimation.animation,
          bannerStyles.primaryButtonText,
          bannerStyles.secondbuttontext,
          bannerToggleStates.toggleStates.disableScroll,
          bannerToggleStates.toggleStates.closebutton,
          false,
          bannerStyles.Font
        );
        
        console.log("createCookieccpaPreferences completed successfully");
        
        // Display list of created DOM elements with IDs for CCPA
        console.log("=== CCPA CREATED DOM ELEMENTS WITH IDs ===");
        try {
          const allElements = await webflow.getAllElements();
          const elementsWithIds = [];
          
          for (const element of allElements) {
            try {
              const domId = await element.getDomId?.();
              if (domId) {
                elementsWithIds.push({
                  id: domId,
                  element: element
                });
              }
            } catch (err) {
              // Skip elements that don't have getDomId method
            }
          }
          
          console.log("Total CCPA elements with DOM IDs:", elementsWithIds.length);
          elementsWithIds.forEach((item, index) => {
            console.log(`${index + 1}. CCPA DOM ID: "${item.id}"`);
          });
          
          // Show specific CCPA banner-related IDs
          const ccpaBannerIds = elementsWithIds.filter(item => 
            item.id.includes('consent') || 
            item.id.includes('banner') || 
            item.id.includes('preference') ||
            item.id.includes('toggle') ||
            item.id.includes('ccpa') ||
            item.id.includes('initial') ||
            item.id.includes('do-not-share')
          );
          
          if (ccpaBannerIds.length > 0) {
            console.log("=== CCPA BANNER-RELATED DOM ELEMENTS ===");
            ccpaBannerIds.forEach((item, index) => {
              console.log(`${index + 1}. CCPA Banner Element: "${item.id}"`);
            });
          }
          
        } catch (error) {
          console.error("Error getting CCPA DOM elements:", error);
        }
        
      } catch (error) {
        console.error("Error in createCookieccpaPreferences:", error);
        throw error;
      }

      console.log("=== CCPA ANALYTICS BLOCKING SCRIPT PHASE ===");
      console.log("Current app version:", appVersion);
      try {
        if (appVersion === '1.0.0') {
          console.log("Using V1 analytics blocking script for CCPA...");
          await fetchAnalyticsBlockingsScripts();
          console.log("V1 analytics blocking script applied successfully for CCPA");
        } else {
          console.log("Using V2 analytics blocking script for CCPA...");
          await fetchAnalyticsBlockingsScriptsV2();
          console.log("V2 analytics blocking script applied successfully for CCPA");
        }
        
        // Add a delay to ensure script is loaded
        console.log("Waiting for CCPA script to load...");
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("CCPA script loading delay completed");
        
        // Check if the script is loaded
        const scripts = document.querySelectorAll('script[src*="consent"]');
        console.log("Found consent scripts for CCPA:", scripts.length);
        scripts.forEach((script, index) => {
          const scriptElement = script as HTMLScriptElement;
          console.log(`CCPA Script ${index}:`, scriptElement.src);
        });
        
        // Check if the script is loaded in the head
        const headScripts = document.head.querySelectorAll('script');
        console.log("Total scripts in head for CCPA:", headScripts.length);
        headScripts.forEach((script, index) => {
          const scriptElement = script as HTMLScriptElement;
          if (scriptElement.src && scriptElement.src.includes('consent')) {
            console.log(`CCPA Consent script ${index} in head:`, scriptElement.src);
          }
        });
        
      } catch (error) {
        console.error("Error applying CCPA analytics blocking script:", error);
        throw error;
      }

             console.log("CCPA banner creation completed, setting success timeout...");
       setTimeout(() => {
         console.log("CCPA banner success timeout triggered");
         handleBannerSuccess();
       }, 20000);

    } catch (error) {
      handleBannerError(error);
    } finally {
      setIsCreating(false);
      setShowLoading(false);
    }
  };

  const createBothBanners = async (config: BannerConfig) => {
    console.log("Starting createBothBanners...");
    try {
      console.log("Creating GDPR banner first...");
      await createGDPRBanner(config, true);
      console.log("GDPR banner created successfully, now creating CCPA banner...");
      await createCCPABanner(config);
      console.log("Both banners created successfully!");
      
      // Show success page after both banners are created
      console.log("Showing SuccessPublish component...");
      setShowSuccessPublish(true);
    } catch (error) {
      console.error("Error in createBothBanners:", error);
      throw error;
    }
  };

  // Simple test function to isolate the issue
  const testSimpleBannerCreation = async () => {
    console.log("=== TESTING SIMPLE BANNER CREATION ===");
    try {
      const selectedElement = await webflow.getSelectedElement();
      if (!selectedElement) {
        throw new Error("No element selected");
      }
      
      console.log("Creating simple div...");
      const simpleDiv = await selectedElement.before(webflow.elementPresets.DivBlock);
      console.log("Simple div created:", simpleDiv);
      
      if (simpleDiv && (simpleDiv as any).setDomId) {
        console.log("Setting DOM ID...");
        await (simpleDiv as any).setDomId("test-banner");
        console.log("DOM ID set successfully");
      }
      
      console.log("Simple banner creation test completed successfully");
    } catch (error) {
      console.error("Simple banner creation test failed:", error);
      throw error;
    }
  };

  return {
    createGDPRBanner,
    createCCPABanner,
    createBothBanners,
    testSimpleBannerCreation,
    isCreating,
    showLoading,
    showSuccess,
    showSuccessPublish,
    handleSuccessPublishProceed,
    handleSuccessPublishGoBack
  };
};
