import { aw } from 'framer-motion/dist/types.d-6pKw1mTI';
import webflow, { WebflowAPI } from '../types/webflowtypes';


const ccpaTranslations = {
    English: {
        heading: "Opt-out Preference",
        description: "We use third-party cookies that help us analyze how you use this website, store your preferences, and provide the content and advertisements that are relevant to you. We do not sell your information. However, you can opt out of these cookies by checking Do Not Share My Personal Information and clicking the Save My Preferences button. Once you opt out, you can opt in again at any time by unchecking Do Not Share My Personal Information and clicking the Save My Preferences button",
        doNotShare: ".Do Not Share My Personal Information",
        savePreference: "Save My Preference",
        cancel: "Cancel"
    },
    Spanish: {
        heading: "Preferencia de Exclusión",
        description: "Utilizamos cookies de terceros que nos ayudan a analizar cómo utiliza este sitio web, almacenar sus preferencias y proporcionar contenido y anuncios relevantes para usted. No vendemos su información. Sin embargo, puede optar por no recibir estas cookies marcando No Compartir Mi Información Personal y haciendo clic en el botón Guardar Mis Preferencias. Una vez que opte por no participar, puede volver a participar en cualquier momento desmarcando No Compartir Mi Información Personal y haciendo clic en el botón Guardar Mis Preferencias",
        doNotShare: ".No Compartir Mi Información Personal.",
        savePreference: "Guardar Mi Preferencia",
        cancel: "Cancelar"
    },
    French: {
        heading: "Préférence de Désinscription",
        description: "Nous utilisons des cookies tiers qui nous aident à analyser votre utilisation de ce site web, à stocker vos préférences et à fournir du contenu et des publicités pertinents pour vous. Nous ne vendons pas vos informations. Cependant, vous pouvez désactiver ces cookies en cochant Ne Pas Partager Mes Informations Personnelles et en cliquant sur le bouton Enregistrer Mes Préférences. Une fois désactivé, vous pouvez réactiver à tout moment en décochant Ne Pas Partager Mes Informations Personnelles et en cliquant sur le bouton Enregistrer Mes Préférences",
        doNotShare: ".Ne Pas Partager Mes Informations Personnelles.",
        savePreference: "Enregistrer Mes Préférences",
        cancel: "Annuler"
    },
    German: {
        heading: "Abmeldepräferenzen",
        description: "Wir verwenden Cookies von Drittanbietern, die uns helfen, Ihre Nutzung dieser Website zu analysieren, Ihre Präferenzen zu speichern und relevante Inhalte und Werbung bereitzustellen. Wir verkaufen Ihre Informationen nicht. Sie können diese Cookies jedoch deaktivieren, indem Sie 'Meine persönlichen Informationen nicht weitergeben' auswählen und auf 'Meine Präferenzen speichern' klicken. Sobald deaktiviert, können Sie dies jederzeit rückgängig machen, indem Sie die Auswahl von 'Meine persönlichen Informationen nicht weitergeben' aufheben und erneut auf 'Meine Präferenzen speichern' klicken.",
        doNotShare: "Meine persönlichen Informationen nicht weitergeben",
        savePreference: "Meine Präferenzen speichern",
        cancel: "Abbrechen"
    },
    Swedish: {
        heading: "Avregistreringspreferens",
        description: "Vi använder tredjepartscookies som hjälper oss att analysera hur du använder denna webbplats, lagra dina preferenser och tillhandahålla innehåll och annonser som är relevanta för dig. Vi säljer inte din information. Du kan dock välja bort dessa cookies genom att kryssa i 'Dela Inte Min Personliga Information' och klicka på 'Spara Mina Preferenser'-knappen. När du väljer bort kan du välja tillbaka när som helst genom att avmarkera 'Dela Inte Min Personliga Information' och klicka på 'Spara Mina Preferenser'-knappen",
        doNotShare: "Dela Inte Min Personliga Information",
        savePreference: "Spara Mina Preferenser",
        cancel: "Avbryt"
    },
    Dutch: {
        heading: "Afmeldingsvoorkeur",
        description: "We gebruiken cookies van derden die ons helpen bij het analyseren van hoe u deze website gebruikt, het opslaan van uw voorkeuren en het leveren van inhoud en advertenties die relevant voor u zijn. We verkopen uw informatie niet. U kunt deze cookies echter uitschakelen door 'Deel Mijn Persoonlijke Informatie Niet' aan te vinken en op de 'Sla Mijn Voorkeuren Op'-knop te klikken. Zodra u zich afmeldt, kunt u zich opnieuw aanmelden door het vinkje bij 'Deel Mijn Persoonlijke Informatie Niet' te verwijderen en op de 'Sla Mijn Voorkeuren Op'-knop te klikken",
        doNotShare: "Deel Mijn Persoonlijke Informatie Niet",
        savePreference: "Sla Mijn Voorkeuren Op",
        cancel: "Annuleren"
    },
    Portuguese: {
        heading: "Preferência de Exclusão",
        description: "Utilizamos cookies de terceiros que nos ajudam a analisar como você utiliza este site, armazenar suas preferências e fornecer conteúdos e anúncios relevantes para você. Não vendemos suas informações. No entanto, você pode desativar esses cookies marcando a opção Não Compartilhar Minhas Informações Pessoais e clicando no botão Salvar Minhas Preferências. Após desativar, você pode ativar novamente a qualquer momento desmarcando a opção e clicando no botão Salvar Minhas Preferências.",
        doNotShare: "Não Compartilhar Minhas Informações Pessoais",
        savePreference: "Salvar Minhas Preferências",
        cancel: "Cancelar"
    },
    Italian: {
        heading: "Preferenza di Opt-out",
        description: "Utilizziamo cookie di terze parti che ci aiutano ad analizzare come utilizzi questo sito web, a memorizzare le tue preferenze e a fornire contenuti e annunci pertinenti. Non vendiamo le tue informazioni. Tuttavia, puoi disattivare questi cookie selezionando Non Condividere le Mie Informazioni Personali e facendo clic sul pulsante Salva le Mie Preferenze. Una volta disattivato, puoi riattivarlo in qualsiasi momento deselezionando l'opzione e facendo clic sul pulsante Salva le Mie Preferenze.",
        doNotShare: "Non Condividere le Mie Informazioni Personali",
        savePreference: "Salva le Mie Preferenze",
        cancel: "Annulla"
    }
};

type BreakpointAndPseudo = {
    breakpoint: string;
    pseudoClass: string;
};

const createCookieccpaPreferences = async (language: string = "English", color: string = "#ffffff", btnColor: string = "#F1F1F1", headColor: string = "#483999", paraColor: string = "#1F1D40", secondcolor: string = "secondcolor", buttonRadius: number, animation: string, primaryButtonText: string = "#ffffff", secondbuttontext: string = "#4C4A66", disableScroll: boolean, _closebutton: boolean = false, skipCommonDiv: boolean = false, Font: string
) => {
    console.log("=== createCookieccpaPreferences START ===");
    console.log("CCPA Parameters received:", { language, color, btnColor, headColor, paraColor, secondcolor, buttonRadius, animation, primaryButtonText, secondbuttontext, disableScroll, _closebutton, skipCommonDiv, Font });
    
    // Add overall timeout for the entire function
    const overallTimeout = setTimeout(() => {
        console.error("createCookieccpaPreferences overall timeout after 30 seconds");
    }, 30000);
    
    try {

        console.log("Getting selected element for CCPA...");
        const selectedElement = await webflow.getSelectedElement();
        if (!selectedElement) {
            console.error("No element selected in the Designer for CCPA.");
            webflow.notify({ type: "error", message: "No element selected in the Designer." });
            return;
        }
        console.log("Selected element retrieved successfully for CCPA");

        console.log("Creating newDiv for CCPA...");
        const newDiv = await selectedElement.before(webflow.elementPresets.DivBlock);
        if (!newDiv) {
            console.error("Failed to create div for CCPA.");
            webflow.notify({ type: "error", message: "Failed to create div." });
            return;
        }
        console.log("newDiv created successfully for CCPA");

        if ((newDiv as any).setDomId) {
            await (newDiv as any).setDomId("main-consent-banner"); // Type assertion
        }

        const timestamp = Date.now();


        const styleNames = {
            preferenceDiv: `consentbit-ccpa_preference`,
            paragraphStyleNames: `consentbit-ccpa_prefrence_text`,
            formfield: `consentbit-ccpa-formblock`,
            preferenceblock: `consentbit-ccpa-prefrence-block`,
            toggledivs: `consentbit-ccpa-prefrence-toggle`,
            buttonContainerStyleName: `consebit-ccpa-prefrence-container`,
            prefrenceButton: `consentbit-ccpa-button-preference`,
            checkboxstyle: "consentbit-change-preference",
            buttonStyleName: `consebit-ccpa-prefrence-accept`,
            DeclinebuttonStyleName: `consebit-ccpa-prefrence-decline`,
            headingStyleName: `consebit-ccpa-prefrence-heading`,
            checkboxContainerStyleName: `consentbit-toggle`,
            // changepreference: `consentbit-ccpa-checkbox`,
            closebutton: 'consent-close'
        };

        console.log("Creating CCPA styles...");
        const styles = await Promise.all(
            Object.values(styleNames).map(async (name) => {
                console.log(`Creating CCPA style: ${name}`);
                try {
                    const existingStyle = await webflow.getStyleByName(name);
                    if (existingStyle) {
                        console.log(`Found existing style: ${name}`);
                        return existingStyle;
                    } else {
                        console.log(`Creating new style: ${name}`);
                        const newStyle = await webflow.createStyle(name);
                        console.log(`Created new style: ${name}`);
                        return newStyle;
                    }
                } catch (error) {
                    console.error(`Error creating style ${name}:`, error);
                    throw error;
                }
            })
        );
        console.log("All CCPA styles created successfully");

        const [divStyle, paragraphStyle, formBlockStyle, prefrenceDiv, togglediv, buttonContainerStyle, prefrenceButtons, changepre, buttonStyle, declinebutton, headingStyle, checkbosstyle, closebutton] = styles;



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

        const animationAttribute = animationAttributeMap[animation] || "";

        const divPropertyMap: Record<string, string> = {
            "background-color": color,
            "position": "fixed",
            "z-index": "99999",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "border-radius": "12px",
            "display": "none",
            "flex-direction": "column",
            "overflow-y": "scroll",
            "align-items": "center",
            "justify-content": "flex-start",
            "padding-top": "20px",
            "padding-right": "20px",
            "padding-bottom": "20px",
            "padding-left": "20px",
            "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
            "font-family": Font,
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

        const prefrencePropertyMap: Record<string, string> = {
            "display": "flex",
            "flex-direction": "column",
            "margin-top": "10px",
            "width": "100%",
        };

        const setTooglePropertyMap: Record<string, string> = {
            "color": "rgba(72, 57, 153, 1)",
            "display": "flex",
            "flex-direction": "row", /* Items are arranged in a row */
            "flex-wrap": "nowrap",   /* Prevents wrapping */
            "direction": "rtl",
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
            "color": primaryButtonText,
            "margin-right": "5px",
            "min-width": "80px",
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

        const CloseButtonPropertyMap: Record<string, string> = {
            "color": "#000",
            "justify-content": "center",
            "align-items": "center",
            "width": "25px",
            "height": "25px",
            "display": "flex",
            "position": "absolute",
            "top": "10",
            "left": "auto",
            "right": "0",
            "font-family": "'Montserrat', sans-serif",
            "z-index": "99",
            "cursor": "pointer",
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

        const changepreferencePropertyMap: Record<string, string> = {
            "height": "55px",
            "width": "55px",
            "border-radius": "50%",
            "background-image": "url('https://cdn.prod.website-files.com/63d5330e6841081487be0bd6/67ebf5ee639d12979361f2bc_consent.png')",
            "background-size": "cover",
            // "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
            "position": "fixed",
            "z-index": "999",
            "bottom": "3%",
            "left": "2%",
            "cursor": "pointer",
            "background-position-x": "50%",
            "background-position-y": "50%"
        };

        const checkboxStyleMap: Record<string, string> = {
            "appearance": "none", // Removes default checkbox styling
            "width": "20px", // Checkbox width
            "height": "20px", // Checkbox height
            "border-radius": "4px", // Rounded corners
            "background-color": color,
            "cursor": "pointer",
        };

        const formPropertyMap: Record<string, string> = {
            "background-color": "rgb(255, 255, 255)", // White background
            "border-radius": "8px", // Rounded corners
            "width": "100%", // Full width
            "max-width": "400px", // Maximum width
            "display": "flex",
            "flex-direction": "column",
        };


        console.log("Setting CCPA style properties...");
        console.log("Setting divStyle properties...");
        await divStyle.setProperties(divPropertyMap);
        console.log("Setting divStyle responsive properties...");
        await divStyle.setProperties(responsivePropertyMap, responsiveOptions);
        console.log("Setting paragraphStyle properties...");
        await paragraphStyle.setProperties(paragraphPropertyMap);
        console.log("Setting prefrenceDiv properties...");
        await prefrenceDiv.setProperties(prefrencePropertyMap);
        console.log("Setting togglediv properties...");
        await togglediv.setProperties(setTooglePropertyMap);
        console.log("Setting formBlockStyle properties...");
        await formBlockStyle.setProperties(formPropertyMap);
        console.log("Setting buttonContainerStyle properties...");
        await buttonContainerStyle.setProperties(buttonContainerPropertyMap);
        console.log("Setting buttonStyle properties...");
        await buttonStyle.setProperties(buttonPropertyMap);
        console.log("Setting changepre properties...");
        await changepre.setProperties(changepreferencePropertyMap);
        console.log("Setting declinebutton properties...");
        await declinebutton.setProperties(declineButtonPropertyMap);
        console.log("Setting prefrenceButtons properties...");
        await prefrenceButtons.setProperties(declineButtonPropertyMap);
        console.log("Setting checkbosstyle properties...");
        await checkbosstyle.setProperties(checkboxStyleMap);
        console.log("Setting headingStyle properties...");
        await headingStyle.setProperties(headingPropertyMap);
        console.log("Setting closebutton properties...");
        await closebutton.setProperties(CloseButtonPropertyMap);
        console.log("All CCPA style properties set successfully");


        if (newDiv.setStyles) {
            await newDiv.setStyles([divStyle]);
        }

                 if (newDiv.setCustomAttribute) {
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
             
             console.log("Setting CCPA data-cookie-banner attribute:", disableScroll ? "true" : "false");
             try {
                 const cookieBannerPromise = newDiv.setCustomAttribute("data-cookie-banner", disableScroll ? "true" : "false");
                 const cookieBannerTimeout = new Promise((_, reject) => 
                     setTimeout(() => reject(new Error("CCPA cookie banner attribute timeout")), 5000)
                 );
                 await Promise.race([cookieBannerPromise, cookieBannerTimeout]);
                 console.log("CCPA data-cookie-banner attribute set successfully");
             } catch (error) {
                 console.error("Error setting CCPA data-cookie-banner attribute:", error);
                 throw error;
             }
         } else {
             console.error("❌ setCustomAttribute method not available on newDiv element");
         }

        console.log("=== CCPA ELEMENT CREATION PHASE START ===");
        try {
            console.log("Creating tempHeading for CCPA...");
            const tempHeading = await selectedElement.before(webflow.elementPresets.Heading);
            console.log("tempHeading created:", tempHeading);
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
                await tempHeading.setTextContent(ccpaTranslations[language as keyof typeof ccpaTranslations].heading);
            }

            const tempParagraph = await selectedElement.before(webflow.elementPresets.Paragraph);
            if (!tempParagraph) {
                throw new Error("Failed to create paragraph");
            }

            if (tempParagraph.setStyles) {
                await tempParagraph.setStyles([paragraphStyle]);
            }

            if (tempParagraph.setTextContent) {
                await tempParagraph.setTextContent(ccpaTranslations[language as keyof typeof ccpaTranslations].description);
            }

            //divblock///////////////////////////////////////////////////////////////////

            const prefrenceContainer = await selectedElement.before(webflow.elementPresets.DivBlock);
            if (!prefrenceContainer) {
                throw new Error("Failed to create button container");
            }
            await prefrenceContainer.setStyles([prefrenceDiv]);

            // Conditionally add close button only if closebutton parameter is true
            let Closebuttons = null;
            if (_closebutton) {
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

            console.log("Creating form block for CCPA...");
            const formBlock = await selectedElement.before(webflow.elementPresets.FormForm);
            console.log("formBlock created:", formBlock);
            if (!formBlock) {
                throw new Error("Failed to create form block");
            }

            console.log("Getting form block children...");
            const allChildren = await formBlock.getChildren();
            console.log("Form block children:", allChildren.length);

            console.log("Finding actual form inside form wrapper...");
            const form = allChildren.find(child => child.plugin === "Form");
            console.log("Form found:", form);
            if (!form) {
                throw new Error("Failed to find form inside form block");
            }

            console.log("Getting form elements and removing them...");
            const formElements = await form.getChildren();
            console.log("Form elements to remove:", formElements.length);
            await Promise.all(formElements.map(child => child.remove()));
            console.log("Form elements removed successfully");

            console.log("Creating DivBlock inside form...");
            const prefrenceContainertoggle = await form.append(webflow.elementPresets.DivBlock);
            console.log("prefrenceContainertoggle created:", prefrenceContainertoggle);
            if (!prefrenceContainertoggle) {
                throw new Error("Failed to create div block inside form");
            }
            console.log("Setting styles for prefrenceContainertoggle...");
            await prefrenceContainertoggle.setStyles([togglediv]);
            console.log("Styles set for prefrenceContainertoggle");

            // Create Paragraph inside the DivBlock (First)
            const toggleParagraph = await prefrenceContainertoggle.append(webflow.elementPresets.Paragraph);
            if (!toggleParagraph) {
                throw new Error("Failed to create paragraph inside div block");
            }

            // Apply styles and text to paragraph
            if (toggleParagraph.setStyles) {
                await toggleParagraph.setStyles([paragraphStyle]);
            }

            if (toggleParagraph.setTextContent) {
                await toggleParagraph.setTextContent(ccpaTranslations[language as keyof typeof ccpaTranslations].doNotShare);
            }

            console.log("Creating checkbox field...");
            const checkboxField = await prefrenceContainertoggle.append(webflow.elementPresets.FormCheckboxInput);
            console.log("checkboxField created:", checkboxField);

            if (!checkboxField) {
                throw new Error("Failed to create checkbox field inside div block");
            }

            console.log("Setting checkbox styles and DOM ID...");
            if ((checkboxField as any).setDomId) {
                await checkboxField.setStyles([checkbosstyle]);
                await (checkboxField as any).setDomId("do-not-share-checkbox"); // Type assertion
                console.log("Checkbox styles and DOM ID set successfully");
            }

            console.log("Getting checkbox field children...");
            const children = await checkboxField.getChildren();
            console.log("Checkbox children:", children.length);
            
            console.log("Clearing checkbox label text...");
            for (const child of children) {
                if (child.type.includes("Label") && child.setTextContent) {
                    await child.setTextContent("");
                    console.log("Cleared label text for child:", child.type);
                }
            }

            console.log("Setting checkbox custom attributes...");
            for (const child of children) {
                if (child.type.includes("FormCheckboxInput") && child.setCustomAttribute) {
                    await child.setCustomAttribute("data-consent-id", "do-not-share-checkbox");
                    console.log("Set custom attribute for child:", child.type);
                }
            }
            console.log("Checkbox children manipulation completed");


            //////////////////////
            const prefrenceContainerinner = await selectedElement.before(webflow.elementPresets.DivBlock);
            if (!prefrenceContainerinner) {
                throw new Error("Failed to create button container");
            }
            await prefrenceContainerinner.setStyles([prefrenceDiv]);

            ////////////////////////////////////////////////////////////////////////////////////////
            const buttonContainer = await selectedElement.before(webflow.elementPresets.DivBlock);
            if (!buttonContainer) {
                throw new Error("Failed to create button container");
            }
            await buttonContainer.setStyles([buttonContainerStyle]);


            const acceptButton = await selectedElement.before(webflow.elementPresets.Button);
            if (!acceptButton) {
                throw new Error("Failed to create accept button");
            }
            await acceptButton.setStyles([buttonStyle]);
            await acceptButton.setTextContent(ccpaTranslations[language as keyof typeof ccpaTranslations].savePreference);

            if ((acceptButton as any).setDomId) {
                await (acceptButton as any).setDomId("save-btn"); // Type assertion
            }

            const declineButtons = await selectedElement.before(webflow.elementPresets.Button);
            if (!declineButtons) {
                throw new Error("Failed to create decline button");
            }
            await declineButtons.setStyles([declinebutton]);
            await declineButtons.setTextContent(ccpaTranslations[language as keyof typeof ccpaTranslations].cancel);

            if ((declineButtons as any).setDomId) {
                await (declineButtons as any).setDomId("close-consent-banner"); // Type assertion
            }



            if (newDiv.append && tempHeading && tempParagraph && buttonContainer && prefrenceContainer) {
                await newDiv.append(tempHeading);
                await newDiv.append(tempParagraph);
                await newDiv.append(prefrenceContainer)
                await newDiv.append(buttonContainer);
                if (Closebuttons) await newDiv.append(Closebuttons)

                if (prefrenceContainer.append && prefrenceContainerinner) {
                    // await prefrenceContainer.append(prefrenceContainertoggle)
                    await prefrenceContainer.append(prefrenceContainerinner)
                }

                if (prefrenceContainerinner.append && formBlock) {
                    await prefrenceContainerinner.append(formBlock)
                    // await prefrenceContainerinner.append(prefeParagraph)
                }

                if (buttonContainer.append && acceptButton && declineButtons) {
                    await buttonContainer.append(acceptButton);
                    await buttonContainer.append(declineButtons);
                }
            }

            // Only create the common div if not skipped
            if (!skipCommonDiv) {
                const mainDivBlock = await selectedElement.before(webflow.elementPresets.DivBlock);
                await mainDivBlock.setStyles([changepre]);

                if (!mainDivBlock) {
                    throw new Error("Failed to create main div block");
                }

                if ((mainDivBlock as any).setDomId) {
                    await mainDivBlock.setCustomAttribute("scroll-control", "true");
                    await (mainDivBlock as any).setDomId("toggle-consent-btn");
                }
            }

            // webflow.notify({ type: "Success", message: "ConsentBit banner added successfully!" });


        } catch (error) {
            webflow.notify({ type: "error", message: "An error occurred while creating the cookie banner." });
        }
    } catch (error) {
        console.error("Error in createCookieccpaPreferences:", error);
        webflow.notify({ type: "error", message: "An error occurred while creating the cookie banner." });
    } finally {
        clearTimeout(overallTimeout);
        console.log("=== createCookieccpaPreferences END ===");
    }
};

export default createCookieccpaPreferences