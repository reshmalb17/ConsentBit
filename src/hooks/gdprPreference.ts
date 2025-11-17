import exp from 'constants';
import webflow, { WebflowAPI } from '../types/webflowtypes';
import { getTranslation } from '../util/translation-utils';

type BreakpointAndPseudo = {
  breakpoint: string;
  pseudoClass: string;
};

const logo = new URL("../assets/icon.svg", import.meta.url).href;
const brandLogo = new URL("../assets/BrandImage.png", import.meta.url).href;


// Helper function to get or create an ass
const getOrCreateAsset = async (): Promise<any> => {
  try {
    // First, try to get existing assets to see if we already have this image
    const assets = await webflow.getAllAssets();
    const existingAsset = assets.find(asset => {
      // Add null checks for all properties
      const hasConsentIcon = asset.name && asset.name === 'consent-icon';
      
      return hasConsentIcon;
    });
    
    if (existingAsset) {
      return existingAsset;
    }

    // If asset doesn't exist, create it from local file
    
    // Fetch the local SVG file
    const response = await fetch(logo);
    if (!response.ok) {
      throw new Error(`Failed to fetch local file: ${response.status} ${response.statusText}`);
    }
    
    const blob = await response.blob();
    
    // Create file from blob with simple name
    const file = new File([blob], 'consent-icon.svg', {
      type: 'image/svg+xml',
    });
    
    const newAsset = await (webflow as any).createAsset(file);
    return newAsset;
  } catch (error) {
    console.error('Error getting or creating asset:', error);
    throw error;
  }
};

// Helper to get or create the brand image asset (Brand.png)
const getOrCreateBrandAsset = async (): Promise<any> => {
  try {
    const assets = await webflow.getAllAssets();
    const existingAsset = assets.find(asset => asset.name && asset.name === 'consent-brand');
    if (existingAsset) {
      return existingAsset;
    }

    const response = await fetch(brandLogo);
    if (!response.ok) {
      throw new Error(`Failed to fetch brand file: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const file = new File([blob], 'consent-brand.png', { type: 'image/png' });
    const newAsset = await (webflow as any).createAsset(file);
    return newAsset;
  } catch (error) {
    console.error('Error getting or creating brand asset:', error);
    throw error;
  }
};

const createCookiePreferences = async (selectedPreferences: string[], language: string = "English", color: string = "#ffffff", btnColor: string = "#F1F1F1", headColor: string = "#483999", paraColor: string = "#1F1D40", secondcolor: string = "secondcolor", buttonRadius: number, animation: string, customToggle: boolean, primaryButtonText: string = "#ffffff", secondbuttontext: string = "#4C4A66", skipCommonDiv: boolean = false, disableScroll: boolean, closebutton: boolean = false, borderRadius: number, font: string, privacyUrl: string = "", targetDiv?: any) => {
  
  try {
    const translation = getTranslation(language);

    // Use provided targetDiv if available, otherwise get selected element
    const selectedElement = targetDiv || await webflow.getSelectedElement();
    if (!selectedElement) {
      webflow.notify({ type: "error", message: "No element selected in the Designer." });
      return;
    }

        // Check if the selected element can have children
        if (!selectedElement?.children) {
            webflow.notify({ type: "error", message: "Selected element cannot have children." });
            return;
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

        const newDiv = await selectedElement.prepend(webflow.elementPresets.DivBlock);
    if (!newDiv) {

      webflow.notify({ type: "error", message: "Failed to create div." });
      return;
    }


    const timestamp = Date.now();

    const styleNames = {
      preferenceDiv: `consentbit-preference_div`,
      paragraphStyleNames: `consentbit-prefrence_text`,
      formfield: `consentbit-formblock`,
      preferenceblock: `consentbit-prefrence_block`,
      toggledivs: `consentbit-prefrence_toggle`,
      buttonContainerStyleName: `consentbit-prefrence-container`,
      prefrenceButton: `consentbit-button-preference`,
      checkboxlabeltextstyle: `consentbit-checkbox-label`,
      buttonStyleName: `consebit-prefrence-accept`,
      DeclinebuttonStyleName: `consentbit-prefrence-decline`,
      headingStyleName: `consebit-prefrence-heading`,
      checkboxContainerStyleName: `consentbit-toggle`,
      changepreference: `consentbit-change-preference`,
      closebutton: `consentbit-close`,
      maindiv: 'consentbit-preference'

    };

    const styles = await Promise.all(
      Object.values(styleNames).map(async (name) => {
        return (await webflow.getStyleByName(name)) || (await webflow.createStyle(name));
      })
    );

    const [divStyle, paragraphStyle, formBlockStyle, prefrenceDiv, togglediv, buttonContainerStyle, checkboxlabeltext, prefrenceButtons, buttonStyle, declinebutton, headingStyle, checkboxContainerStyle, changepre, closebuttonStyle, maindivs] = styles;


    const collection = await webflow.getDefaultVariableCollection();

    const animationAttributeMap = {
      "fade": "fade",
      "slide-up": "slide-up",
      "slide-down": "slide-down",
      "slide-left": "slide-left",
      "slide-right": "slide-right",
      "select": "select", // No attribute if "select"
    };

    const animationAttribute = animationAttributeMap[animation] || "";

    const divPropertyMap: Record<string, string> = {
      "background-color": color,
      "max-height": "510px",
      "max-width": "435px",
      "position": "fixed",
      "z-index": "100000",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "border-radius": `${borderRadius}px`,
      "flex-direction": "column",
      "align-items": "center",
      "justify-content": "flex-start",
      "overflow-y": "scroll",
      "padding-top": "20px",
      "padding-right": "20px",
      "padding-bottom": "20px",
      "padding-left": "20px",
      "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
      "font-family":font,
      "display": "flex"
    };

    const responsivePropertyMap: Record<string, string> = {
      "max-width": "23.5rem",
      "width": "100%"

    };
    const responsiveOptions = { breakpoint: "medium" } as BreakpointAndPseudo;

    const paragraphPropertyMap: Record<string, string> = {
      "color": paraColor,
      "font-size": "14px",
      "font-weight": "400",
      "line-height": "1.5",
      "text-align": "left",
      "margin-top": "0",
      "margin-right": "0",
      "margin-bottom": "10px",
      "margin-left": "0",
      "max-width": "400px",
      "display": "block",
      "width": "100%",
    };

    const checkboxContainerPropertyMap: Record<string, string> = {
      "position": "relative",
      "display": "inline-block",
      "width": "50px",
      "background-color": color,
    };

    const mainDivBlockPropertyMap: Record<string, string> = {
      "position": "fixed",
      "top": "0%",
      "right": "0%",
      "bottom": "0%",
      "left": "0%",
      "z-index": "99999",
      "display": "none",
    };

    const prefrencePropertyMap: Record<string, string> = {
      "display": "flex",
      "flex-direction": "column",
      "margin-top": "10px",
      "width": "100%",
    };

    const setTooglePropertyMap: Record<string, string> = {
      "color": "rgba(16, 214, 138, 0)",
      "display": "flex",
      "margin-top": "10px",
      "width": "100%",
      "justify-content": "space-between",
    };

    const buttonContainerPropertyMap: Record<string, string> = {
      "display": "flex",
      "justify-content": "right",
      "margin-top": "10px",
      "width": "100%",
    };

    const buttonPropertyMap: Record<string, string> = {
      "border-radius": `${buttonRadius}px`,
      "cursor": "pointer",
      "background-color": secondcolor,
      "margin-left": "5px",
      "margin-right": "5px",
      "min-width": "80px",
      "color": primaryButtonText,
      "text-align": "center",
      "display": "flex",
      "justify-content": "center",
    };

    const declineButtonPropertyMap: Record<string, string> = {
      "border-radius": `${buttonRadius}px`,
      "cursor": "pointer",
      "background-color": btnColor,
      "color": secondbuttontext,
      "margin-left": "5px",
      "margin-right": "5px",
      "min-width": "80px",
      "text-align": "center",
      "display": "flex",
      "justify-content": "center",
    };


    const headingPropertyMap: Record<string, string> = {
      "color": headColor,
      "font-size": "20px",
      "font-weight": "500",
      "text-align": "left",
      "margin-top": "0",
      "margin-bottom": "10px",
      "width": "100%",
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
      "right": "10",
      "z-index": "99",
      "font-family": "'Montserrat', sans-serif",
      "cursor": "pointer",
    };

    const checkboxlabelPropertyMap: Record<string, string> = {
      "color": "rgba(72, 57, 153, 1)",
      "font-size": "18px",
      "font-weight": "500",
    };

    const changepreferencePropertyMap: Record<string, string> = {
      "height": "55px",
      "width": "55px",
      "border-radius": "50%",
      "background-size": "cover",
      "position": "fixed",
      "z-index": "999",
      "bottom": "3%",
      "left": "2%",
      "cursor": "pointer",
      "background-position-x": "50%",
      "background-position-y": "50%"
    };


    const formPropertyMap: Record<string, string> = {
      "background-color": "rgb(255, 255, 255)", // White background
      "border-radius": "8px", // Rounded corners
      "width": "100%", // Full width
      "max-width": "400px", // Maximum width
      "display": "flex",
      "flex-direction": "column",
    };


    await divStyle.setProperties(divPropertyMap);
    await divStyle.setProperties(responsivePropertyMap, responsiveOptions);
    await paragraphStyle.setProperties(paragraphPropertyMap);
    await prefrenceDiv.setProperties(prefrencePropertyMap)
    await togglediv.setProperties(setTooglePropertyMap)
    await formBlockStyle.setProperties(formPropertyMap)
    await checkboxlabeltext.setProperties(checkboxlabelPropertyMap)
    await buttonContainerStyle.setProperties(buttonContainerPropertyMap);
    await checkboxContainerStyle.setProperties(checkboxContainerPropertyMap)
    await buttonStyle.setProperties(buttonPropertyMap);
    await declinebutton.setProperties(declineButtonPropertyMap)
    await prefrenceButtons.setProperties(declineButtonPropertyMap)
    await changepre.setProperties(changepreferencePropertyMap)
    await closebuttonStyle.setProperties(CloseButtonPropertyMap)
    await headingStyle.setProperties(headingPropertyMap);
    await maindivs.setProperties(mainDivBlockPropertyMap)

    // Note: newDiv will be appended to mainBanner, so we don't apply divStyle to newDiv
    // The mainBanner (consentbit-preference) already has the overlay styles
    // We'll create a content wrapper inside newDiv for the actual banner content

    try {
      // Create a content wrapper div inside newDiv to hold the banner content
      // This wrapper will have the divStyle applied instead of newDiv
      const contentWrapper = await newDiv.append(webflow.elementPresets.DivBlock);
      if (!contentWrapper) {
        throw new Error("Failed to create content wrapper");
      }
      
      // Apply divStyle to contentWrapper instead of newDiv
      if (contentWrapper.setStyles) {
        await contentWrapper.setStyles([divStyle]);
      }

      if (contentWrapper.setCustomAttribute) {
        await contentWrapper.setCustomAttribute("data-animation", animationAttribute);
        await contentWrapper.setCustomAttribute("data-cookie-banner", disableScroll ? "true" : "false");
      }

      // Create heading as child of contentWrapper
      const tempHeading = await contentWrapper.append(webflow.elementPresets.Heading);
      if (!tempHeading) {
        throw new Error("Failed to create heading");
      }
      if (tempHeading.setHeadingLevel) {
        await tempHeading.setHeadingLevel(4);
      }
      if (tempHeading.setStyles) {
        await tempHeading.setStyles([headingStyle]);
      }
      if (tempHeading.setTextContent) {
        await tempHeading.setTextContent(translation.heading);
      } else {
      }

      // Create paragraph as child of contentWrapper
      const tempParagraph = await contentWrapper.append(webflow.elementPresets.Paragraph);
      if (!tempParagraph) {
        throw new Error("Failed to create paragraph");
      }

      if (tempParagraph.setStyles) {
        await tempParagraph.setStyles([paragraphStyle]);
      }

      if (tempParagraph.setTextContent) {
        await tempParagraph.setTextContent(translation.description);
      } else {
      }

      // Create privacy link as child of tempParagraph (if privacyUrl is available)
      let privacyLink = null;
      
      if (privacyUrl && privacyUrl.trim() !== "") {
        privacyLink = await tempParagraph.append(webflow.elementPresets.LinkBlock);
        if (!privacyLink) throw new Error("Failed to create privacy link");

        // Set URL using setSettings method
        try {
          await privacyLink.setSettings('url', privacyUrl, {openInNewTab: true});
        } catch (error) {
        }
      
        if (privacyLink.setTextContent) {
          await privacyLink.setTextContent(` ${translation.moreInfo}`);
        }
      
        if (privacyLink.setDomId) {
          await privacyLink.setDomId("privacy-link-preference");
        }
        
        // Add hover effect for underline
        if (privacyLink.setCustomAttribute) {
          await privacyLink.setCustomAttribute("data-hover-underline", "true");
        }
      
      }

      //divblock///////////////////////////////////////////////////////////////////

             // Create the main banner container with class consentbit-preference as child of targetDiv
       const mainBanner = await selectedElement.append(webflow.elementPresets.DivBlock);
       if (!mainBanner) {
         throw new Error("Failed to create main banner");
       }
       await mainBanner.setStyles([maindivs]);

       // Set DOM ID to main-banner
       if ((mainBanner as any).setDomId) {
         await (mainBanner as any).setDomId("main-banner");
       } else {
       }

       // Create the preference div with class consentbit-preference_div as child of contentWrapper
       const preferenceDiv = await contentWrapper.append(webflow.elementPresets.DivBlock);
       if (!preferenceDiv) {
         throw new Error("Failed to create preference div");
       }
       await preferenceDiv.setStyles([prefrenceDiv]);

       // Set DOM ID to consentbit-preference_div
       if ((preferenceDiv as any).setDomId) {
         await (preferenceDiv as any).setDomId("consentbit-preference_div");
       } else {
       }



      //////////////////////
      // Create prefrenceContainerinner as child of preferenceDiv
      const prefrenceContainerinner = await preferenceDiv.append(webflow.elementPresets.DivBlock);
      if (!prefrenceContainerinner) {
        throw new Error("Failed to create button container");
      }
      await prefrenceContainerinner.setStyles([prefrenceDiv]);

      // Create formBlock as child of prefrenceContainerinner
      const formBlock = await prefrenceContainerinner.append(webflow.elementPresets.FormForm);
      if (!formBlock) {
        throw new Error("Failed to create form block");
      }

      // Get all children of the form block
      const allChildren = await formBlock.getChildren();

      // Find the actual form inside the form wrapper
      const form = allChildren.find(child => child.plugin === "Form");
      if (!form) {
        throw new Error("Failed to find form inside form block");
      }

      // Get all elements inside the form and remove them
      const formElements = await form.getChildren();
      await Promise.all(formElements.map(child => child.remove()));

      // Define labels, corresponding checkbox IDs, and descriptions
      const allSections = [
        {
          label: "Essential",
          id: "necessary-checkbox",
          checked: true,
          description: translation.sections.essential.description
        },
        {
          label: "Analytics",
          id: "analytics-checkbox",
          checked: false,
          description: translation.sections.analytics.description
        },
        {
          label: "Marketing",
          id: "marketing-checkbox",
          checked: false,
          description: translation.sections.marketing.description
        },
        {
          label: "Preferences",
          id: "personalization-checkbox",
          checked: false,
          description: translation.sections.preferences.description
        }
      ];

      // const sections = allSections.filter(section => selectedPreferences.includes(section.label.toLowerCase()));

      
      const sections = allSections.filter(section =>
        selectedPreferences.map(pref => pref.toLowerCase()).includes(section.label.toLowerCase())
      );
      



      // Loop to create multiple sections
      for (const section of sections) {
        
        // 🏗️ Create a wrapper DivBlock inside the form
        const wrapperDiv = await form.append(webflow.elementPresets.DivBlock);
        if (!wrapperDiv) {
          throw new Error(`Failed to create wrapper div for ${section.label}`);
        }



        const prefrenceContainertoggle = await wrapperDiv.append(webflow.elementPresets.DivBlock);
        if (!prefrenceContainertoggle) {
          throw new Error(`Failed to create div block for ${section.label}`);
        }
        await prefrenceContainertoggle.setStyles([togglediv]);


        // 📝 Create Paragraph inside the preference container (Checkbox Label)

        const toggleParagraph = await prefrenceContainertoggle.append(webflow.elementPresets.Paragraph);
        if (!toggleParagraph) {
          throw new Error(`Failed to create paragraph for ${section.label}`);
        }
        await toggleParagraph.setStyles([checkboxlabeltext]);

        if (toggleParagraph.setTextContent) {
          await toggleParagraph.setTextContent(section.label);
        }



        // Create the actual checkbox field

        const checkboxField = await prefrenceContainertoggle.append(webflow.elementPresets.FormCheckboxInput);

        if (!checkboxField) {
          throw new Error(`Failed to create checkbox field for ${section.label}`);
        }


        await checkboxField.setStyles([checkboxContainerStyle]);

        const children = await checkboxField.getChildren();

        
        for (const child of children) {
          if (child.type.includes("Label") && child.setTextContent) {

            await child.setTextContent("");
          }
        }

        for (const child of children) {
          if (child.type.includes("FormCheckboxInput") && child.setCustomAttribute) {

            await child.setCustomAttribute("data-consent-id", section.id);
          }
        }


        // ✅ Set the ID for the checkbox

        if (checkboxField.setDomId) {
          await checkboxField.setDomId(section.id);
        }


        if (checkboxField.setCustomAttribute) {
          await checkboxField.setCustomAttribute("customtoggle", customToggle ? "true" : "false");
        }


        // Create description paragraph

        const wrapperParagraph = await wrapperDiv.append(webflow.elementPresets.Paragraph);
        if (!wrapperParagraph) {
          throw new Error(`Failed to create wrapper paragraph for ${section.label}`);
        }

        // Apply text and styles to wrapper paragraph
        if (wrapperParagraph.setStyles) {
          await wrapperParagraph.setStyles([paragraphStyle]);
        }

        if (wrapperParagraph.setTextContent) {
          await wrapperParagraph.setTextContent(section.description);
        }


      }


      if (!skipCommonDiv) {
        // Create the change-preference div as child of targetDiv
        const mainDivBlock = await selectedElement.append(webflow.elementPresets.DivBlock);
        await mainDivBlock.setStyles([changepre]);

        if (!mainDivBlock) {
          throw new Error("Failed to create main div block");
        }

        if ((mainDivBlock as any).setDomId) {
          await mainDivBlock.setCustomAttribute("scroll-control", "true");
          await (mainDivBlock as any).setDomId("toggle-consent-btn");
        } else {
          console.error("ccpa banner id setteled");
        }

        // Add image to the skip div
        let imageElement: any = null;
        
        try {
          // Create the image element
          await mainDivBlock.append(webflow.elementPresets.Image);
          
          // Get the children to find the image element we just added
          const children = await mainDivBlock.getChildren();
          imageElement = children.find(child => child.type === 'Image');
          
          if (!imageElement) {
            throw new Error("Failed to create image elementssss");
          }

          // Create the asset in Webflow
          const asset = await getOrCreateAsset();
          
          // Set the asset to the image element
          await (imageElement as any).setAsset(asset);
          
        } catch (error) {
          // Continue without asset if creation fails
        }

        // Style the image
        if (imageElement) {
          const imageStyle =
            (await webflow.getStyleByName("consentToggleIcon")) ||
            (await webflow.createStyle("consentToggleIcon"));
          
          await imageStyle.setProperties({
            "width": "55px",
            "height": "55px",
            "border-radius": "50%",
            "background-size": "cover",
            "background-position": "center"
          });
          
          await (imageElement as any).setStyles?.([imageStyle]);

          // Set custom attributes for the image
          if ((imageElement as any).setCustomAttribute) {
            await (imageElement as any).setCustomAttribute("data-consent-toggle", "true");
          }
        }
      }

      ////////////////////////////////////////////////////////////////////////////////////////

      // Conditionally add close button only if closebutton parameter is true
      let Closebuttons = null;
      if (closebutton) {
        Closebuttons = await contentWrapper.append(webflow.elementPresets.Paragraph);
        if (!Closebuttons) {
          throw new Error("Failed to create paragraph");
        }

        if (Closebuttons.setStyles) {
          await Closebuttons.setStyles([closebuttonStyle]);
          await Closebuttons.setTextContent("X");
          await Closebuttons.setCustomAttribute("consentbit","close");
        }
      }

      // Create buttonContainer as child of contentWrapper
      const buttonContainer = await contentWrapper.append(webflow.elementPresets.DivBlock);
      if (!buttonContainer) {
        throw new Error("Failed to create button container");
      }
      await buttonContainer.setStyles([buttonContainerStyle]);

      // Create acceptButton as child of buttonContainer
      const acceptButton = await buttonContainer.append(webflow.elementPresets.Button);
      if (!acceptButton) {
        throw new Error("Failed to create accept button");
      }
      await acceptButton.setStyles([buttonStyle]);
      await acceptButton.setTextContent(translation.acceptAll);

      if ((acceptButton as any).setDomId) {
        await (acceptButton as any).setDomId("save-preferences-btn"); // Type assertion
      } else {
      }

      // Create declineButton as child of buttonContainer
      const declineButton = await buttonContainer.append(webflow.elementPresets.Button);
      if (!declineButton) {
        throw new Error("Failed to create decline button");
      }
      await declineButton.setStyles([declinebutton]);
      await declineButton.setTextContent(translation.reject);

      if ((declineButton as any).setDomId) {
        await (declineButton as any).setDomId("cancel-btn"); // Type assertion
      } else {
      }

      // All elements are already created as children of their appropriate parents
      // mainBanner is already a child of selectedElement (targetDiv), append newDiv to it
      if (mainBanner.append && newDiv) {
        await mainBanner.append(newDiv);
      }
        // Append brand image inside a full-width wrapper at the bottom of the banner
        try {
          const brandWrapper = await contentWrapper.append(webflow.elementPresets.DivBlock);
            const brandWrapperStyle = (await webflow.getStyleByName("consentBrandWrapper")) || (await webflow.createStyle("consentBrandWrapper"));
            await brandWrapperStyle.setProperties({
              "width": "40%",
              "height": "auto",
              "margin-top": "12px",
              "display": "block",
              "align-self": "flex-end",
              "margin-left": "auto"
            });
            await (brandWrapper as any).setStyles([brandWrapperStyle]);

            const brandLink = await (brandWrapper as any).append(webflow.elementPresets.LinkBlock);
            const brandLinkStyle = (await webflow.getStyleByName("consentBrandLink")) || (await webflow.createStyle("consentBrandLink"));
            await brandLinkStyle.setProperties({
              "width": "100%",
              "height": "auto",
              "display": "block"
            });
            await (brandLink as any).setStyles([brandLinkStyle]);
            try {
              await (brandLink as any).setSettings('url', 'https://www.consentbit.com/', { openInNewTab: true });
            } catch (e) {}

            const brandImage = await (brandLink as any).append(webflow.elementPresets.Image);
            const brandAsset = await getOrCreateBrandAsset();
            await (brandImage as any).setAsset(brandAsset);

            const brandStyle = (await webflow.getStyleByName("consentBrandImage")) || (await webflow.createStyle("consentBrandImage"));
            await brandStyle.setProperties({
              "width": "100%",
              "height": "auto",
              "display": "block",
              "object-fit": "contain"
            });
            await (brandImage as any).setStyles?.([brandStyle]);
        } catch (e) {
        }

      // Set bannerAdded to true in sessionStorage
      // COMMENTED OUT: localStorage.setItem('bannerAdded', 'true');
      sessionStorage.setItem('bannerAdded', 'true');
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new CustomEvent('bannerAddedChanged'));

      // webflow.notify({ type: "Success", message: "ConsentBit banner added successfully!" })

    } catch (error) {
      webflow.notify({ type: "error", message: `Error creating preferences: ${error.message}` });
    }
  } catch (error) {
    webflow.notify({ type: "error", message: `Error creating cookie preferences: ${error.message}` });
  } finally {

  }
};

export default createCookiePreferences
