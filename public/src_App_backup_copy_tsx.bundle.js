"use strict";
(self["webpackChunkconsentbit"] = self["webpackChunkconsentbit"] || []).push([["src_App_backup_copy_tsx"],{

/***/ "./src/App_backup copy.tsx":
/*!*********************************!*\
  !*** ./src/App_backup copy.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_styless_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/styless.css */ "./src/style/styless.css");
/* harmony import */ var _components_Customization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Customization */ "./src/components/Customization.tsx");
/* harmony import */ var _components_Script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Script */ "./src/components/Script.tsx");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api */ "./src/services/api.ts");
/* harmony import */ var _hooks_userAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/userAuth */ "./src/hooks/userAuth.ts");
/* harmony import */ var _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/webflowtypes */ "./src/types/webflowtypes.ts");
/* harmony import */ var _hooks_gdprPreference__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/gdprPreference */ "./src/hooks/gdprPreference.ts");
/* harmony import */ var _hooks_ccpaPreference__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/ccpaPreference */ "./src/hooks/ccpaPreference.ts");
/* harmony import */ var _hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/usePersistentState */ "./src/hooks/usePersistentState.ts");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");
/* harmony import */ var _components_PulseAnimation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PulseAnimation */ "./src/components/PulseAnimation.tsx");
/* harmony import */ var _components_NeedHelp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/NeedHelp */ "./src/components/NeedHelp.tsx");
/* harmony import */ var _components_ChoosePlan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ChoosePlan */ "./src/components/ChoosePlan.tsx");
/* harmony import */ var _components_CSVExportAdvanced__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/CSVExportAdvanced */ "./src/components/CSVExportAdvanced.tsx");
/* harmony import */ var _components_WelcomeScreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/WelcomeScreen */ "./src/components/WelcomeScreen.tsx");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../package.json */ "./package.json");
/* harmony import */ var _util_Session__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/Session */ "./src/util/Session.ts");
/* harmony import */ var _components_donotshare__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/donotshare */ "./src/components/donotshare.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const questionmark = new URL(/* asset import */ __webpack_require__(/*! ./assets/question.svg */ "./src/assets/question.svg"), __webpack_require__.b).href;
const openeye = new URL(/* asset import */ __webpack_require__(/*! ./assets/closedeye.svg */ "./src/assets/closedeye.svg"), __webpack_require__.b).href;
const eye = new URL(/* asset import */ __webpack_require__(/*! ./assets/eye.svg */ "./src/assets/eye.svg"), __webpack_require__.b).href;
const dots = new URL(/* asset import */ __webpack_require__(/*! ./assets/3 dots.svg */ "./src/assets/3 dots.svg"), __webpack_require__.b).href;
const checkedcatogry = new URL(/* asset import */ __webpack_require__(/*! ./assets/tick-square catogeries.svg */ "./src/assets/tick-square catogeries.svg"), __webpack_require__.b).href;
const tickmark = new URL(/* asset import */ __webpack_require__(/*! ./assets/tickmark.svg */ "./src/assets/tickmark.svg"), __webpack_require__.b).href;
const logo = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon.svg */ "./src/assets/icon.svg"), __webpack_require__.b).href;
const errorsheild = new URL(/* asset import */ __webpack_require__(/*! ./assets/warning-2.svg */ "./src/assets/warning-2.svg"), __webpack_require__.b).href;
const crossmark = new URL(/* asset import */ __webpack_require__(/*! ./assets/group.svg */ "./src/assets/group.svg"), __webpack_require__.b).href;
const rightarrow = new URL(/* asset import */ __webpack_require__(/*! ./assets/up arrow.svg */ "./src/assets/up arrow.svg"), __webpack_require__.b).href;
const copyScript = new URL(/* asset import */ __webpack_require__(/*! ./assets/copy script.svg */ "./src/assets/copy script.svg"), __webpack_require__.b).href;
const donotshare = new URL(/* asset import */ __webpack_require__(/*! ./assets/donotshare.png */ "./src/assets/donotshare.png"), __webpack_require__.b).href;












// Add at the top, after other imports

const appVersion = _package_json__WEBPACK_IMPORTED_MODULE_15__.version;


const App = ({ onAuth }) => {
    var _a, _b, _c, _d, _e;
    const [color, setColor] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("color", "#ffffff");
    const [bgColor, setBgColor] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("bgColor", "#ffffff");
    const [btnColor, setBtnColor] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("btnColor", "#C9C9C9");
    const [paraColor, setParaColor] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("paraColor", "#4C4A66");
    const [secondcolor, setSecondcolor] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("secondcolor", "#000000");
    const [bgColors, setBgColors] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("bgColors", "#798EFF");
    const [headColor, setHeadColor] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("headColor", "#000000");
    const [secondbuttontext, setsecondbuttontext] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("secondbuttontext", "#000000");
    const [primaryButtonText, setPrimaryButtonText] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("primaryButtonText", "#FFFFFF");
    const [activeTab, setActiveTab] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("activeTab", "General Settings");
    const [expires, setExpires] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("expires", "");
    const [size, setSize] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("size", "12");
    const [isActive, setIsActive] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("isActive", false);
    const [Font, SetFont] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("Font", "");
    const [selectedtext, settextSelected] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("selectedtext", "left");
    const [style, setStyle] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("style", "align");
    const [activeMode, setActiveMode] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("activeMode", "Simple");
    const [selected, setSelected] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("selected", "right");
    const [selectedOption, setSelectedOption] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("selectedOption", "U.S. State Laws");
    const [weight, setWeight] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("weight", "semibold");
    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [selectedOptions, setSelectedOptions] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("selectedOptions", ["GDPR"]);
    const [siteInfo, setSiteInfo] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("siteInfo", null);
    const [accessToken, setAccessToken] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("accessToken", '');
    const [pages, setPages] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("pages", []);
    const [fetchScripts, setFetchScripts] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("fetchScripts", false);
    const [borderRadius, setBorderRadius] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("borderRadius", 16);
    const [buttonRadius, setButtonRadius] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("buttonRadius", 2);
    const [isLoading, setIsLoading] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("isLoading", false);
    const [userlocaldata, setUserlocaldata] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [showSuccessPopup, setShowSuccessPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showAuthPopup, setShowAuthPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [buttonText, setButtonText] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("buttonText", "Scan Project");
    const [showLoadingPopup, setShowLoadingPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isExporting, setIsExporting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [cookieExpiration, setCookieExpiration] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("cookieExpiration", "120");
    const [showTooltip, setShowTooltip] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [fadeOut, setFadeOut] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const userinfo = localStorage.getItem("wf_hybrid_user");
    const tokenss = JSON.parse(userinfo);
    const [sessionTokenFromLocalStorage, setSessionToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_Session__WEBPACK_IMPORTED_MODULE_16__.getSessionTokenFromLocalStorage)());
    const [showChoosePlan, setShowChoosePlan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isSubscribed, setIsSubscribed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isBannerAdded, setIsBannerAdded] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)("isBannerAdded", false);
    const [isCSVButtonLoading, setIsCSVButtonLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showCSVExportAdvanced, setShowCSVExportAdvanced] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showWelcomeScreen, setShowWelcomeScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const base_url = "https://cb-server.web-8fb.workers.dev";
    // Welcome screen handlers
    const handleWelcomeAuthorize = () => {
        setShowWelcomeScreen(false);
    };
    const handleWelcomeNeedHelp = () => {
        // Open help modal or redirect to help page
        window.open('https://www.consentbit.com/help-document', '_blank');
    };
    const [toggleStates, setToggleStates] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)('toggleStates', {
        customToggle: false,
        resetInteractions: false,
        disableScroll: false,
        storeConsents: false,
        globalvariable: false,
        closebutton: false,
        donotshare: false,
    });
    // Your default states
    const defaultState = {
        animation: "fade",
        easing: "Ease",
        language: "English",
    };
    const [animation, setAnimation] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)('animation', defaultState.animation);
    const [easing, setEasing] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)('easing', defaultState.easing);
    const [language, setLanguage] = (0,_hooks_usePersistentState__WEBPACK_IMPORTED_MODULE_9__.usePersistentState)('language', defaultState.language);
    const handleToggle = (toggleName) => {
        setToggleStates((prev) => {
            const newState = Object.assign(Object.assign({}, prev), { [toggleName]: !prev[toggleName] });
            // If resetInteractions is turned ON, reset to default values
            if (toggleName === "resetInteractions" && newState.resetInteractions) {
                resetToDefaults();
            }
            return newState;
        });
    };
    const resetToDefaults = () => {
        setAnimation(defaultState.animation);
        setEasing(defaultState.easing);
        setLanguage(defaultState.language);
    };
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
        // Add these after the Dutch translations and before the closing brace
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
    const [cookiePreferences, setCookiePreferences] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
        // Get stored preferences from localStorage or use default values
        const savedPreferences = localStorage.getItem("cookiePreferences");
        return savedPreferences
            ? JSON.parse(savedPreferences)
            : {
                marketing: true,
                preferences: true,
                analytics: true,
            };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    }, [cookiePreferences]);
    const toggleCategory = (category) => {
        setCookiePreferences((prev) => {
            const updatedPreferences = Object.assign(Object.assign({}, prev), { [category]: !prev[category] });
            // Save new state to localStorage
            localStorage.setItem("cookiePreferences", JSON.stringify(updatedPreferences));
            return updatedPreferences;
        });
    };
    const handleToggles = (option) => {
        setSelectedOptions((prev) => {
            const updatedOptions = prev.includes(option)
                ? prev.filter((item) => item !== option) // Remove if already selected
                : [...prev, option]; // Add if not selected
            localStorage.setItem("selectedOptions", JSON.stringify(updatedOptions)); // Save immediately
            return updatedOptions;
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
    }, [selectedOptions]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setIsActive(false);
        setTimeout(() => setIsActive(true), 50);
    }, [animation]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // activeMode now uses usePersistentState, so no need to manually save to localStorage
        if (activeMode === "Simple" && activeTab === "Script") {
            setActiveTab("Customization");
        }
        // Force re-render to ensure UI updates
        setTimeout(() => setIsActive(true), 50);
    }, [activeMode]);
    //page fetch
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const fetchPages = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const localstoragedata = localStorage.getItem("wf_hybrid_user");
                if (localstoragedata) {
                    try {
                        const parsed = JSON.parse(localstoragedata);
                        setUserlocaldata(parsed);
                    }
                    catch (error) {
                        // Error parsing localStorage
                    }
                }
                const pagesAndFolders = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getAllPagesAndFolders();
                if (Array.isArray(pagesAndFolders) && pagesAndFolders.length > 0) {
                    // Filter only "Page" types
                    const pages = pagesAndFolders.filter(i => i.type === "Page");
                    // Fetch page names asynchronously
                    const pageDetails = yield Promise.all(pages.map((page) => __awaiter(void 0, void 0, void 0, function* () {
                        return ({
                            id: page.id,
                            name: yield page.getName(),
                        });
                    })));
                    setPages(pageDetails);
                }
            }
            catch (error) {
                // Error fetching pages
            }
        });
        fetchPages();
    }, [_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"]]);
    //banner details
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const fetchbannerdetails = () => __awaiter(void 0, void 0, void 0, function* () {
            const token = (0,_util_Session__WEBPACK_IMPORTED_MODULE_16__.getSessionTokenFromLocalStorage)();
            try {
                if (token) {
                    const response = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.getBannerStyles(token);
                    if (response) {
                        // Set all the values with proper checks
                        if (response.cookieExpiration !== undefined)
                            setCookieExpiration(response.cookieExpiration);
                        if (response.bgColor !== undefined)
                            setBgColor(response.bgColor);
                        if (response.activeTab !== undefined)
                            setActiveTab(response.activeTab);
                        if (response.activeMode !== undefined)
                            setActiveMode(response.activeMode);
                        if (response.selectedtext !== undefined)
                            settextSelected(response.selectedtext);
                        if (response.fetchScripts !== undefined)
                            setFetchScripts(response.fetchScripts);
                        if (response.btnColor !== undefined)
                            setBtnColor(response.btnColor);
                        if (response.paraColor !== undefined)
                            setParaColor(response.paraColor);
                        if (response.secondcolor !== undefined)
                            setSecondcolor(response.secondcolor);
                        if (response.bgColors !== undefined)
                            setBgColors(response.bgColors);
                        if (response.headColor !== undefined)
                            setHeadColor(response.headColor);
                        if (response.secondbuttontext !== undefined)
                            setsecondbuttontext(response.secondbuttontext);
                        if (response.primaryButtonText !== undefined)
                            setPrimaryButtonText(response.primaryButtonText);
                        if (response.Font !== undefined)
                            SetFont(response.Font);
                        if (response.style !== undefined)
                            setStyle(response.style);
                        if (response.selected !== undefined)
                            setSelected(response.selected);
                        if (response.weight !== undefined)
                            setWeight(response.weight);
                        if (response.borderRadius !== undefined)
                            setBorderRadius(response.borderRadius);
                        if (response.buttonRadius !== undefined)
                            setButtonRadius(response.buttonRadius);
                        if (response.animation !== undefined)
                            setAnimation(response.animation);
                        if (response.easing !== undefined)
                            setEasing(response.easing);
                        if (response.language !== undefined)
                            setLanguage(response.language);
                        if (response.buttonText !== undefined)
                            setButtonText(response.buttonText);
                        if (response.isBannerAdded !== undefined)
                            setIsBannerAdded(response.isBannerAdded);
                        if (response.color !== undefined)
                            setColor(response.color);
                    }
                    else {
                        openAuthScreen();
                    }
                }
                else {
                    openAuthScreen();
                }
            }
            catch (error) {
                // Error fetching banner details
            }
        });
        fetchbannerdetails();
    }, []);
    //main function for adding custom code to the head
    const fetchAnalyticsBlockingsScripts = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = (0,_util_Session__WEBPACK_IMPORTED_MODULE_16__.getSessionTokenFromLocalStorage)();
            if (!token) {
                openAuthScreen();
                return;
            }
            const siteIdinfo = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getSiteInfo();
            setSiteInfo(siteIdinfo);
            const hostingScript = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.registerAnalyticsBlockingScript(token);
            if (hostingScript) {
                try {
                    const scriptId = hostingScript.result.id;
                    const version = hostingScript.result.version;
                    const params = {
                        targetType: 'site',
                        targetId: siteIdinfo.siteId,
                        scriptId: scriptId,
                        location: 'header',
                        version: version
                    };
                    const applyScriptResponse = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.applyScript(params, token);
                }
                catch (error) {
                    throw error; // or handle it differently based on your needs
                }
            }
        }
        catch (error) {
            // Component Error
        }
    });
    // const { user } = useAuth();
    const { user, exchangeAndVerifyIdToken } = (0,_hooks_userAuth__WEBPACK_IMPORTED_MODULE_5__.useAuth)();
    // Function to open the authorization popup authorization window
    const openAuthScreen = () => {
        const authWindow = window.open(`${base_url}/api/auth/authorize?state=webflow_designer`, "_blank", "width=600,height=600");
        const onAuth = () => __awaiter(void 0, void 0, void 0, function* () {
            yield exchangeAndVerifyIdToken();
        });
        const checkWindow = setInterval(() => {
            if (authWindow === null || authWindow === void 0 ? void 0 : authWindow.closed) {
                clearInterval(checkWindow);
                onAuth();
            }
        }, 1000);
    };
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_18__.useQueryClient)();
    //authentication
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const stored = localStorage.getItem("wf_hybrid_user");
        if (!(user === null || user === void 0 ? void 0 : user.firstName) && stored) {
            const parsed = JSON.parse(stored);
            if (parsed === null || parsed === void 0 ? void 0 : parsed.sessionToken) {
                exchangeAndVerifyIdToken();
            }
            else {
                // fallback manual restore if no sessionToken (dev/test scenarios)
                queryClient.setQueryData(["auth"], {
                    user: {
                        firstName: parsed.firstName,
                        email: parsed.email,
                    },
                    sessionToken: "",
                });
            }
        }
    }, []);
    //authentication
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const data = localStorage.getItem('wf_hybrid_user');
        if (data) {
            // localStorage.removeItem("wf_hybrid_user"); // ❌ REMOVED: This was clearing settings after auth
        }
        const onAuth = () => __awaiter(void 0, void 0, void 0, function* () {
            yield exchangeAndVerifyIdToken();
        });
        onAuth();
    }, []);
    //GDPR preferences banner
    const handleCreatePreferences = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (skipCommonDiv = false) {
        try {
            const selectedPreferences = Object.entries(cookiePreferences)
                .filter(([_, isChecked]) => isChecked)
                .map(([category]) => category);
            if (!selectedPreferences.includes("essential")) {
                selectedPreferences.push("essential");
            }
            yield (0,_hooks_gdprPreference__WEBPACK_IMPORTED_MODULE_7__["default"])(selectedPreferences, language, color, btnColor, headColor, paraColor, secondcolor, buttonRadius, animation, toggleStates.customToggle, primaryButtonText, secondbuttontext, skipCommonDiv, toggleStates.disableScroll, toggleStates.closebutton, Font);
        }
        catch (error) {
            // Error creating cookie preferences
        }
    });
    //CCPA preferences banner
    const handleCreatePreferencesccpa = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0,_hooks_ccpaPreference__WEBPACK_IMPORTED_MODULE_8__["default"])(language, color, btnColor, headColor, paraColor, secondcolor, buttonRadius, animation, primaryButtonText, secondbuttontext, toggleStates.disableScroll, toggleStates.closebutton, false, Font);
        }
        catch (error) {
            // Error creating cookie preferences
        }
    });
    //banner style
    const previewDimensions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
        switch (style) {
            case "bigstyle":
                return { width: "250px", minHeight: "151px" };
            case "fullwidth":
                return { width: "445px", dislay: "flex" };
            case "centeralign":
                return { width: "303px" };
            default:
                return { width: "318px" }; // Default
        }
    }, [style]);
    //ccpa banner
    const ccpabanner = () => __awaiter(void 0, void 0, void 0, function* () {
        setShowPopup(false); // close the first popup
        setShowLoadingPopup(true); // show loading popup
        setIsLoading(true);
        // const isBannerAlreadyAdded = localStorage.getItem("cookieBannerAdded") === "true";
        try {
            const allElements = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getAllElements();
            const idsToCheck = ["initial-consent-banner", "main-consent-banner", "toggle-consent-btn"];
            // Run domId checks in parallel
            const domIdPromises = allElements.map((el) => __awaiter(void 0, void 0, void 0, function* () {
                var _a;
                const domId = yield ((_a = el.getDomId) === null || _a === void 0 ? void 0 : _a.call(el));
                return { el, domId };
            }));
            const elementsWithDomIds = yield Promise.all(domIdPromises);
            // Filter matching elements
            const matchingElements = elementsWithDomIds
                .filter(({ domId }) => domId && idsToCheck.includes(domId))
                .map(({ el, domId }) => el);
            // Remove matching elements and children
            yield Promise.all(matchingElements.map((el) => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b;
                try {
                    const domId = yield ((_a = el.getDomId) === null || _a === void 0 ? void 0 : _a.call(el));
                    const children = yield ((_b = el.getChildren) === null || _b === void 0 ? void 0 : _b.call(el));
                    if (children === null || children === void 0 ? void 0 : children.length) {
                        yield Promise.all(children.map(child => child.remove()));
                    }
                    yield el.remove();
                }
                catch (err) {
                    console.error("⚠️ Error removing element:", err);
                    _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "Failed to remove a banner." });
                }
            })));
            const selectedElement = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getSelectedElement();
            if (!selectedElement) {
                console.error("❌ No element selected.");
                _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "No element selected in the Designer." });
                return;
            }
            const newDiv = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.DivBlock);
            if (!newDiv) {
                _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "Failed to create div." });
                return;
            }
            if (newDiv.setDomId) {
                yield newDiv.setDomId("initial-consent-banner"); // Type assertion
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
            const styles = yield Promise.all(Object.values(styleNames).map((name) => __awaiter(void 0, void 0, void 0, function* () {
                return (yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getStyleByName(name)) || (yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].createStyle(name));
            })));
            const [divStyle, paragraphStyle, buttonContainerStyle, headingStyle, Linktext, innerDivStyle, secondBackgroundStyle, closebutton] = styles;
            const collection = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getDefaultVariableCollection();
            const webflowBlue = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable("Webflow Blue", "rgba(255, 255, 255, 1)"));
            const webflowBlueValue = (webflowBlue === null || webflowBlue === void 0 ? void 0 : webflowBlue.value) || "rgba(255, 255, 255, 1)";
            const animationAttributeMap = {
                "fade": "fade",
                "slide-up": "slide-up",
                "slide-down": "slide-down",
                "slide-left": "slide-left",
                "slide-right": "slide-right",
                "select": "select", // No attribute if "select"
            };
            const animationAttribute = animationAttributeMap[animation] || "";
            const divPropertyMap = {
                "background-color": color,
                "position": "fixed",
                "z-index": "99999",
                "padding-top": "20px",
                "padding-right": "20px",
                "padding-bottom": "20px",
                "padding-left": "20px",
                "border-radius": `${borderRadius}px`,
                "display": "none",
                "flex-direction": "column",
                "align-items": "center",
                "justify-content": "center",
                "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
                "font-family": Font,
            };
            if (window.innerWidth <= 768) {
                divPropertyMap["width"] = "100%";
                divPropertyMap["height"] = "40%";
            }
            divPropertyMap["bottom"] = "3%";
            switch (selected) {
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
            switch (style) {
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
            const responsivePropertyMap = {
                "max-width": "100%",
                "width": "100%",
                "bottom": "0",
                "left": "0",
                "right": "0",
                "top": "auto",
                "transform": "none"
            };
            const responsiveOptions = { breakpoint: "small" };
            const paragraphPropertyMap = {
                "color": paraColor,
                "font-size": "16px",
                "font-weight": `${weight}`,
                "line-height": "1.5",
                "text-align": `${selectedtext}`,
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "10px",
                "margin-left": "0",
                "display": "block",
                "width": "100%",
            };
            switch (style) {
                case "centeralign":
                    paragraphPropertyMap["text-align"] = "center";
                    break;
            }
            const buttonContainerPropertyMap = {
                "display": "flex",
                "justify-content": "left",
                "margin-top": "10px",
                "width": "100%",
            };
            switch (style) {
                case "centeralign":
                    buttonContainerPropertyMap["justify-content"] = "center";
                    break;
            }
            const declineButtonPropertyMap = {
                "border-radius": "48px",
                "cursor": "pointer",
                "background-color": "rgba(241, 241, 241, 1)",
                "color": "rgba(72, 57, 153, 1)",
                "margin-left": "5px",
                "margin-right": "5px",
                "min-width": "80px",
            };
            const headingPropertyMap = {
                "color": headColor,
                "font-size": "20px",
                "font-weight": `${weight}`,
                "text-align": "left",
                "margin-top": "0",
                "margin-bottom": "10px",
                "width": "100%",
            };
            switch (style) {
                case "centeralign":
                    headingPropertyMap["text-align"] = "center";
                    break;
            }
            const innerdivPropertyMap = {
                "max-width": "877px",
                "margin-left": "auto",
                "margin-right": "auto",
            };
            const secondbackgroundPropertyMap = {
                "position": "absolute",
                "background-color": bgColors,
                "width": "35%",
                "right": "0px",
                "height": "100%",
                "z-index": "-3",
                "opacity": "30%",
                "bottom": "0px",
                "border-bottom-right-radius": `${borderRadius}px`,
                "border-top-right-radius": `${borderRadius}px`
            };
            const CloseButtonPropertyMap = {
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
            yield divStyle.setProperties(divPropertyMap);
            yield divStyle.setProperties(responsivePropertyMap, responsiveOptions);
            yield paragraphStyle.setProperties(paragraphPropertyMap);
            yield buttonContainerStyle.setProperties(buttonContainerPropertyMap);
            yield Linktext.setProperties(declineButtonPropertyMap);
            yield headingStyle.setProperties(headingPropertyMap);
            yield innerDivStyle.setProperties(innerdivPropertyMap);
            yield secondBackgroundStyle.setProperties(secondbackgroundPropertyMap);
            yield closebutton.setProperties(CloseButtonPropertyMap);
            if (newDiv.setStyles) {
                yield newDiv.setStyles([divStyle]);
            }
            if (newDiv.setCustomAttribute) {
                yield newDiv.setCustomAttribute("data-animation", animationAttribute);
                yield newDiv.setCustomAttribute("data-cookie-banner", toggleStates.disableScroll ? "true" : "false");
            }
            else {
                console.error("❌ setCustomAttribute method not available on newDiv element");
            }
            const innerdiv = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.DivBlock);
            yield innerdiv.setStyles([innerDivStyle]);
            try {
                let SecondDiv;
                if (style === "alignstyle") {
                    SecondDiv = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.DivBlock);
                    if (SecondDiv.setStyles) {
                        yield SecondDiv.setStyles([secondBackgroundStyle]);
                    }
                }
                const tempHeading = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Heading);
                if (!tempHeading) {
                    throw new Error("Failed to create heading");
                }
                if (tempHeading.setHeadingLevel) {
                    yield tempHeading.setHeadingLevel(2);
                }
                if (tempHeading.setStyles) {
                    yield tempHeading.setStyles([headingStyle]);
                }
                if (tempHeading.setTextContent) {
                    yield tempHeading.setTextContent(translations[language].ccpa.heading);
                }
                else {
                    console.error("❌ setText method not available on heading element");
                }
                // Conditionally add close button only if toggleStates.closebutton is true
                let Closebuttons = null;
                if (toggleStates.closebutton) {
                    Closebuttons = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Paragraph);
                    if (!Closebuttons) {
                        throw new Error("Failed to create paragraph");
                    }
                    if (Closebuttons.setStyles) {
                        yield Closebuttons.setStyles([closebutton]);
                        yield Closebuttons.setTextContent("X");
                        yield Closebuttons.setCustomAttribute("consentbit", "close");
                    }
                }
                const tempParagraph = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Paragraph);
                if (!tempParagraph) {
                    throw new Error("Failed to create paragraph");
                }
                if (tempParagraph.setStyles) {
                    yield tempParagraph.setStyles([paragraphStyle]);
                }
                if (tempParagraph.setTextContent) {
                    yield tempParagraph.setTextContent(translations[language].ccpa.description);
                }
                else {
                    console.error("❌ setText method not available on paragraph element");
                }
                const buttonContainer = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.DivBlock);
                if (!buttonContainer) {
                    throw new Error("Failed to create button container");
                }
                yield buttonContainer.setStyles([buttonContainerStyle]);
                const prefrenceButton = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.LinkBlock);
                if (!prefrenceButton) {
                    throw new Error("Failed to create decline button");
                }
                yield prefrenceButton.setStyles([Linktext]);
                yield prefrenceButton.setTextContent(translations[language].ccpa.doNotShare);
                if (prefrenceButton.setDomId) {
                    yield prefrenceButton.setDomId("do-not-share-link"); // Type assertion
                }
                else {
                    console.error("❌ setDomId method not available on accept button element");
                }
                if (newDiv.append && innerdiv && tempHeading && tempParagraph && buttonContainer) {
                    yield newDiv.append(innerdiv);
                    if (Closebuttons)
                        yield newDiv.append(Closebuttons);
                    if (SecondDiv)
                        yield innerdiv.append(SecondDiv);
                    yield innerdiv.append(tempHeading);
                    yield innerdiv.append(tempParagraph);
                    yield innerdiv.append(buttonContainer);
                    if (buttonContainer.append && prefrenceButton) {
                        yield buttonContainer.append(prefrenceButton);
                    }
                    else {
                        console.error("❌ Failed to append buttons to the button container.");
                    }
                }
                else {
                    console.error("❌ Failed to append elements to the main div.");
                }
                handleCreatePreferencesccpa();
                if (appVersion === '1.0.0') {
                    fetchAnalyticsBlockingsScripts();
                }
                else if (appVersion === '2.0.0') {
                    fetchAnalyticsBlockingsScriptsV2(); // Make sure this function is defined
                }
                setTimeout(() => {
                    setShowPopup(false);
                    setIsBannerAdded(true);
                    setShowSuccessPopup(true);
                    setIsLoading(false);
                }, 20000);
                saveBannerDetails();
            }
            catch (error) {
                console.error("❌ Error creating cookie banner:", error);
                _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "An error occurred while creating the cookie banner." });
            }
        }
        catch (error) {
            console.error("❌ Unexpected error:", error);
            _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "Unexpected error occurred." });
        }
    });
    const fetchAnalyticsBlockingsScriptsV2 = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            const token = (0,_util_Session__WEBPACK_IMPORTED_MODULE_16__.getSessionTokenFromLocalStorage)();
            if (!token) {
                openAuthScreen();
                return;
            }
            const siteIdinfo = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getSiteInfo();
            setSiteInfo(siteIdinfo);
            const hostingScript = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.registerV2BannerCustomCode(token);
            if (hostingScript) {
                try {
                    const scriptId = hostingScript.result.id;
                    const version = hostingScript.result.version;
                    const params = {
                        targetType: 'site',
                        targetId: siteIdinfo.siteId,
                        scriptId: scriptId,
                        location: 'header',
                        version: version
                    };
                    const applyScriptResponse = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.applyV2Script(params, token);
                }
                catch (error) {
                    // More detailed error logging
                    console.error("Failed to apply script:", {
                        error: error instanceof Error ? error.message : 'Unknown error',
                        stack: error instanceof Error ? error.stack : undefined,
                        params: {
                            scriptId: (_a = hostingScript === null || hostingScript === void 0 ? void 0 : hostingScript.result) === null || _a === void 0 ? void 0 : _a.id,
                            siteId: siteIdinfo === null || siteIdinfo === void 0 ? void 0 : siteIdinfo.siteId,
                            version: (_b = hostingScript === null || hostingScript === void 0 ? void 0 : hostingScript.result) === null || _b === void 0 ? void 0 : _b.version
                        }
                    });
                    throw error; // or handle it differently based on your needs
                }
            }
            else {
                console.warn("No hosting script data available");
            }
        }
        catch (error) {
            console.error('=== Component Error ===');
            console.error('Error type:', error.constructor.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
            console.error('Full error object:', error);
        }
    });
    //gdpr banner
    const gdpr = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (skipCommonDiv = false) {
        setShowPopup(false);
        setShowLoadingPopup(true);
        setIsLoading(true);
        // const isBannerAlreadyAdded = localStorage.getItem("cookieBannerAdded") === "true";
        try {
            const allElements = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getAllElements();
            const idsToCheck = ["consent-banner", "main-banner", "toggle-consent-btn"];
            // Run domId checks in parallel
            const domIdPromises = allElements.map((el) => __awaiter(void 0, void 0, void 0, function* () {
                var _a;
                const domId = yield ((_a = el.getDomId) === null || _a === void 0 ? void 0 : _a.call(el));
                return { el, domId };
            }));
            const elementsWithDomIds = yield Promise.all(domIdPromises);
            // Filter matching elements
            const matchingElements = elementsWithDomIds
                .filter(({ domId }) => domId && idsToCheck.includes(domId))
                .map(({ el, domId }) => el);
            // Remove matching elements and children
            yield Promise.all(matchingElements.map((el) => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b;
                try {
                    const domId = yield ((_a = el.getDomId) === null || _a === void 0 ? void 0 : _a.call(el));
                    const children = yield ((_b = el.getChildren) === null || _b === void 0 ? void 0 : _b.call(el));
                    if (children === null || children === void 0 ? void 0 : children.length) {
                        yield Promise.all(children.map(child => child.remove()));
                    }
                    yield el.remove();
                }
                catch (err) {
                    _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "Failed to remove a banner." });
                }
            })));
            const selectedElement = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getSelectedElement();
            if (!selectedElement) {
                _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "No element selected in the Designer." });
                setIsLoading(false); // Reset loading state
                return;
            }
            const newDiv = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.DivBlock);
            if (!newDiv) {
                _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "Failed to create div." });
                return;
            }
            if (newDiv.setDomId) {
                yield newDiv.setDomId("consent-banner"); // Type assertion
            }
            else {
                console.error("❌ setDomId method not available on accept button element");
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
            const styles = yield Promise.all(Object.values(styleNames).map((name) => __awaiter(void 0, void 0, void 0, function* () {
                return (yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getStyleByName(name)) || (yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].createStyle(name));
            })));
            const [divStyle, paragraphStyle, buttonContainerStyle, prefrenceButtonStyle, declineButtonStyle, buttonStyle, headingStyle, innerDivStyle, secondBackgroundStyle, closebutton] = styles;
            const animationAttributeMap = {
                "fade": "fade",
                "slide-up": "slide-up",
                "slide-down": "slide-down",
                "slide-left": "slide-left",
                "slide-right": "slide-right",
                "select": "select", // No attribute if "select"
            };
            const animationAttribute = animationAttributeMap[animation] || "";
            const divPropertyMap = {
                "background-color": color,
                "position": "fixed",
                "z-index": "99999",
                "padding-top": "20px",
                "padding-right": "20px",
                "padding-bottom": "20px",
                "padding-left": "20px",
                "border-radius": `${borderRadius}px`,
                "display": "none",
                "flex-direction": "column",
                "align-items": "center",
                "justify-content": "center",
                "box-shadow": "2px 2px 20px rgba(0, 0, 0, 0.51)",
                "font-family": Font,
            };
            if (window.innerWidth <= 768) {
                divPropertyMap["width"] = "100%";
                divPropertyMap["height"] = "40%";
            }
            divPropertyMap["bottom"] = "3%";
            switch (selected) {
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
            switch (style) {
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
            const responsivePropertyMap = {
                "max-width": "100%",
                "width": "100%",
                "bottom": "0",
                "left": "0",
                "right": "0",
                "top": "auto",
                "transform": "none"
            };
            const responsiveOptions = { breakpoint: "small" };
            const paragraphPropertyMap = {
                "color": paraColor,
                "font-size": "16px",
                "font-weight": `${weight}`,
                "line-height": "1.5",
                "text-align": `${selectedtext}`,
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "10px",
                "margin-left": "0",
                "display": "block",
                "width": "100%",
            };
            switch (style) {
                case "centeralign":
                    paragraphPropertyMap["text-align"] = "center";
                    break;
            }
            const buttonContainerPropertyMap = {
                "display": "flex",
                "justify-content": "right",
                "margin-top": "10px",
                "width": "100%",
            };
            switch (style) {
                case "centeralign":
                    buttonContainerPropertyMap["justify-content"] = "center";
                    break;
            }
            const buttonPropertyMap = {
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
            const responsivebuttonPropertyMap = {
                "margin-bottom": "10px",
                "flex-direction": "column",
                "justify-content": "center",
                "text-align": "center",
                "display": "flex",
                "row-gap": "12px"
            };
            const responsivebuttonOptions = { breakpoint: "small" };
            const declineButtonPropertyMap = {
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
            const secondbackgroundPropertyMap = {
                "position": "absolute",
                "background-color": bgColors,
                "width": "35%",
                "right": "0px",
                "height": "100%",
                "z-index": "-3",
                "opacity": "30%",
                "bottom": "0px",
                "border-bottom-right-radius": `${borderRadius}px`,
                "border-top-right-radius": `${borderRadius}px`
            };
            const headingPropertyMap = {
                "color": headColor,
                "font-size": "20px",
                "font-weight": `${weight}`,
                "text-align": "left",
                "margin-top": "0",
                "margin-bottom": "10px",
                "width": "100%",
            };
            switch (style) {
                case "centeralign":
                    headingPropertyMap["text-align"] = "center";
                    break;
            }
            const innerdivPropertyMap = {
                "max-width": "877px",
                "margin-left": "auto",
                "margin-right": "auto",
            };
            const CloseButtonPropertyMap = {
                "color": "#000",
                "justify-content": "center",
                "align-items": "center",
                "width": "25px",
                "height": "25px",
                "display": "flex",
                "position": "absolute",
                "top": "5%;",
                "left": "auto",
                "right": "2%",
                "z-index": "99",
                "cursor": "pointer",
                "font-family": "'Montserrat', sans-serif",
            };
            yield divStyle.setProperties(divPropertyMap);
            yield divStyle.setProperties(responsivePropertyMap, responsiveOptions);
            yield paragraphStyle.setProperties(paragraphPropertyMap);
            yield buttonContainerStyle.setProperties(buttonContainerPropertyMap);
            yield buttonContainerStyle.setProperties(responsivebuttonPropertyMap, responsivebuttonOptions);
            yield buttonStyle.setProperties(buttonPropertyMap);
            yield declineButtonStyle.setProperties(declineButtonPropertyMap);
            yield prefrenceButtonStyle.setProperties(declineButtonPropertyMap);
            yield headingStyle.setProperties(headingPropertyMap);
            yield secondBackgroundStyle.setProperties(secondbackgroundPropertyMap);
            yield innerDivStyle.setProperties(innerdivPropertyMap);
            yield closebutton.setProperties(CloseButtonPropertyMap);
            if (newDiv.setStyles) {
                yield newDiv.setStyles([divStyle]);
            }
            if (newDiv.setCustomAttribute) {
                yield newDiv.setCustomAttribute("data-animation", animationAttribute);
                yield newDiv.setCustomAttribute("data-cookie-banner", toggleStates.disableScroll ? "true" : "false");
            }
            try {
                let SecondDiv;
                if (style === "alignstyle") {
                    SecondDiv = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.DivBlock);
                    if (SecondDiv.setStyles) {
                        yield SecondDiv.setStyles([secondBackgroundStyle]);
                    }
                }
                const innerdiv = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.DivBlock);
                yield innerdiv.setStyles([innerDivStyle]);
                const tempHeading = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Heading);
                if (!tempHeading) {
                    throw new Error("Failed to create heading");
                }
                if (tempHeading.setHeadingLevel) {
                    yield tempHeading.setHeadingLevel(2);
                }
                if (tempHeading.setStyles) {
                    yield tempHeading.setStyles([headingStyle]);
                }
                if (tempHeading.setTextContent) {
                    yield tempHeading.setTextContent(translations[language].heading);
                }
                else {
                    console.error("❌ setText method not available on heading element");
                }
                // Conditionally add close button only if toggleStates.closebutton is true
                let Closebuttons = null;
                if (toggleStates.closebutton) {
                    Closebuttons = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Paragraph);
                    if (!Closebuttons) {
                        throw new Error("Failed to create paragraph");
                    }
                    if (Closebuttons.setStyles) {
                        yield Closebuttons.setStyles([closebutton]);
                        yield Closebuttons.setTextContent("X");
                        yield Closebuttons.setCustomAttribute("consentbit", "close");
                    }
                }
                const tempParagraph = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Paragraph);
                if (!tempParagraph) {
                    throw new Error("Failed to create paragraph");
                }
                if (tempParagraph.setStyles) {
                    yield tempParagraph.setStyles([paragraphStyle]);
                }
                if (tempParagraph.setTextContent) {
                    yield tempParagraph.setTextContent(translations[language].description);
                }
                else {
                    console.error("❌ setText method not available on paragraph element");
                }
                const buttonContainer = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.DivBlock);
                if (!buttonContainer) {
                    throw new Error("Failed to create button container");
                }
                yield buttonContainer.setStyles([buttonContainerStyle]);
                const prefrenceButton = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Button);
                if (!prefrenceButton) {
                    throw new Error("Failed to create decline button");
                }
                yield prefrenceButton.setStyles([prefrenceButtonStyle]);
                yield prefrenceButton.setTextContent(translations[language].preferences);
                if (prefrenceButton.setDomId) {
                    yield prefrenceButton.setDomId("preferences-btn"); // Type assertion
                }
                else {
                    console.error("❌ setDomId method not available on accept button element");
                }
                const acceptButton = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Button);
                if (!acceptButton) {
                    throw new Error("Failed to create accept button");
                }
                yield acceptButton.setStyles([buttonStyle]);
                yield acceptButton.setTextContent(translations[language].accept);
                if (acceptButton.setDomId) {
                    yield acceptButton.setDomId("accept-btn"); // Type assertion
                }
                else {
                    console.error("❌ setDomId method not available on accept button element");
                }
                const declineButton = yield selectedElement.before(_types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].elementPresets.Button);
                if (!declineButton) {
                    throw new Error("Failed to create decline button");
                }
                yield declineButton.setStyles([declineButtonStyle]);
                yield declineButton.setTextContent(translations[language].reject);
                if (declineButton.setDomId) {
                    yield declineButton.setDomId("decline-btn"); // Type assertion
                }
                else {
                    console.error("❌ setDomId method not available on accept button element");
                }
                if (newDiv.append && innerdiv && tempHeading && tempParagraph && buttonContainer) {
                    // Append elements inside innerDiv
                    yield newDiv.append(innerdiv);
                    if (Closebuttons)
                        yield newDiv.append(Closebuttons);
                    if (SecondDiv)
                        yield innerdiv.append(SecondDiv);
                    yield innerdiv.append(tempHeading);
                    yield innerdiv.append(tempParagraph);
                    yield innerdiv.append(buttonContainer);
                    if (buttonContainer.append && prefrenceButton && declineButton && acceptButton) {
                        yield buttonContainer.append(prefrenceButton);
                        yield buttonContainer.append(declineButton);
                        yield buttonContainer.append(acceptButton);
                    }
                    else {
                        console.error("❌ Failed to append buttons to the button container.");
                    }
                }
                else {
                    console.error("❌ Failed to append elements to the main div.");
                }
                handleCreatePreferences(skipCommonDiv);
                if (appVersion === '1.0.0') {
                    fetchAnalyticsBlockingsScripts();
                }
                else if (appVersion === '2.0.0') {
                    fetchAnalyticsBlockingsScriptsV2(); // Make sure this function is defined
                }
                setTimeout(() => {
                    setShowPopup(false);
                    setIsBannerAdded(true);
                    setShowSuccessPopup(true);
                    setIsLoading(false);
                }, 30000);
                saveBannerDetails();
            }
            catch (error) {
                _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "An error occurred while creating the cookie banner." });
            }
        }
        catch (error) {
            console.error("❌ Unexpected error:", error);
            _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].notify({ type: "error", message: "Unexpected error occurred." });
            setIsLoading(false);
        }
    });
    //both banners
    const handleBothBanners = () => __awaiter(void 0, void 0, void 0, function* () {
        yield gdpr(true);
        yield ccpabanner();
    });
    const handleExpirationChange = (e) => {
        setCookieExpiration(e.target.value);
    };
    //banner details
    const saveBannerDetails = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userinfo = localStorage.getItem("wf_hybrid_user");
            if (!userinfo) {
                return;
            }
            const tokenss = JSON.parse(userinfo);
            const tokewern = tokenss.sessionToken;
            const siteIdinfo = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getSiteInfo();
            setSiteInfo(siteIdinfo);
            if (!tokewern) {
                return;
            }
            const bannerData = {
                cookieExpiration: cookieExpiration,
                bgColor: bgColor,
                activeTab: activeTab,
                activeMode: activeMode,
                selectedtext: selectedtext,
                fetchScripts: fetchScripts,
                btnColor: btnColor,
                paraColor: paraColor,
                secondcolor: secondcolor,
                bgColors: bgColors,
                headColor: headColor,
                secondbuttontext: secondbuttontext,
                primaryButtonText: primaryButtonText,
                Font: Font,
                style: style,
                selected: selected,
                weight: weight,
                borderRadius: borderRadius,
                buttonRadius: buttonRadius,
                animation: animation,
                easing: easing,
                language: language,
                buttonText: buttonText,
                isBannerAdded: isBannerAdded,
                color: color
            };
            const response = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.saveBannerStyles(tokewern, bannerData);
            if (response.ok) {
            }
        }
        catch (error) {
            throw error; // or handle it differently based on your needs
        }
    });
    const handleExportCSV = () => __awaiter(void 0, void 0, void 0, function* () {
        setIsExporting(true);
        try {
            const token = (0,_util_Session__WEBPACK_IMPORTED_MODULE_16__.getSessionTokenFromLocalStorage)();
            if (!token) {
                setIsExporting(false);
                openAuthScreen();
                return;
            }
            const { csvData, response } = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.exportCSV(token);
            // Enhanced validation: Check if we actually have consent data
            const lines = csvData.trim().split('\n');
            const hasHeader = lines.length > 0 && lines[0].includes('#');
            const hasDataRows = lines.length > 1;
            const isEmptyDataMessage = csvData.includes('No consent data found') ||
                csvData.includes('empty') ||
                csvData.includes('No user consent data');
            // More comprehensive check for no data
            if (!hasDataRows || lines.length <= 1 || isEmptyDataMessage ||
                (hasHeader && lines.length === 2 && lines[1].trim().startsWith('#'))) {
                console.warn('No consent data available for export');
                alert('No user consent data found for export. CSV file will not be generated.');
                setIsExporting(false);
                return; // Exit without generating CSV
            }
            // Additional check: ensure we have actual data rows (not just headers)
            const dataRowsCount = lines.filter(line => line.trim() &&
                !line.startsWith('#') &&
                !line.includes('Visitor ID') // Skip header row
            ).length;
            if (dataRowsCount === 0) {
                console.warn('No actual consent data rows found');
                alert('No user consent data found for export. CSV file will not be generated.');
                setIsExporting(false);
                return; // Exit without generating CSV
            }
            // Create blob and download only if we have valid data
            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            // Get filename from response headers
            let filename = 'consent_report.csv';
            const contentDisposition = response.headers.get('Content-Disposition');
            if (contentDisposition) {
                const filenameMatch = contentDisposition.match(/filename="?(.+?)"?(;|$)/);
                if (filenameMatch && filenameMatch[1]) {
                    filename = filenameMatch[1];
                }
            }
            // Create download link
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
        catch (error) {
            console.error('Failed to export CSV:', error);
            alert(`Failed to export CSV report: ${error instanceof Error ? error.message : String(error)}`);
        }
        finally {
            setIsExporting(false);
        }
    });
    // Add this function near handleExportCSV
    const handleExportCSVAdvanced = () => __awaiter(void 0, void 0, void 0, function* () {
        setIsExporting(true);
        try {
            const token = (0,_util_Session__WEBPACK_IMPORTED_MODULE_16__.getSessionTokenFromLocalStorage)();
            if (!token) {
                setIsExporting(false);
                openAuthScreen();
                return;
            }
            const { csvData, response } = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.exportCSVAdvanced(token);
            // Enhanced validation: Check if we actually have consent data
            const lines = csvData.trim().split('\n');
            const hasHeader = lines.length > 0 && lines[0].includes('#');
            const hasDataRows = lines.length > 1;
            const isEmptyDataMessage = csvData.includes('No consent data found') ||
                csvData.includes('empty') ||
                csvData.includes('No user consent data');
            // More comprehensive check for no data
            if (!hasDataRows || lines.length <= 1 || isEmptyDataMessage ||
                (hasHeader && lines.length === 2 && lines[1].trim().startsWith('#'))) {
                console.warn('No consent data available for export');
                alert('No user consent data found for export. CSV file will not be generated.');
                setIsExporting(false);
                return; // Exit without generating CSV
            }
            // Additional check: ensure we have actual data rows (not just headers)
            const dataRowsCount = lines.filter(line => line.trim() &&
                !line.startsWith('#') &&
                !line.includes('Visitor ID') // Skip header row
            ).length;
            if (dataRowsCount === 0) {
                console.warn('No actual consent data rows found');
                alert('No user consent data found for export. CSV file will not be generated.');
                setIsExporting(false);
                return; // Exit without generating CSV
            }
            // Create blob and download only if we have valid data
            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            // Get filename from response headers
            let filename = 'consent_report.csv';
            const contentDisposition = response.headers.get('Content-Disposition');
            if (contentDisposition) {
                const filenameMatch = contentDisposition.match(/filename="?(.+?)"?(;|$)/);
                if (filenameMatch && filenameMatch[1]) {
                    filename = filenameMatch[1];
                }
            }
            // Create download link
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
        catch (error) {
            console.error('Failed to export CSV:', error);
            alert(`Failed to export CSV report: ${error instanceof Error ? error.message : String(error)}`);
        }
        finally {
            setIsExporting(false);
        }
    });
    function checkSubscription(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('https://cb-server.web-8fb.workers.dev/api/payment/subscription', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = yield response.json();
                if (!response.ok) {
                    throw new Error(data.details || data.error || 'Failed to check subscription');
                }
                return data;
            }
            catch (error) {
                console.error('Error checking subscription:', error);
                throw error;
            }
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const accessToken = (0,_util_Session__WEBPACK_IMPORTED_MODULE_16__.getSessionTokenFromLocalStorage)();
        const fetchSubscription = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            try {
                if (!accessToken) {
                    openAuthScreen();
                    return;
                }
                const result = yield checkSubscription(accessToken);
                // Check if any domain has isSubscribed === true
                const hasSubscription = (_a = result.subscriptionStatuses) === null || _a === void 0 ? void 0 : _a.some((status) => status.isSubscribed === true);
                setIsSubscribed(Boolean(hasSubscription));
            }
            catch (error) {
                console.error('Failed to check subscription:', error);
            }
        });
        fetchSubscription();
    }, []);
    // Removed early return to prevent hooks order issues
    const checkAndRegisterV2ConsentScript = () => __awaiter(void 0, void 0, void 0, function* () {
        if (appVersion !== "2.0.0")
            return;
        try {
            const token = (0,_util_Session__WEBPACK_IMPORTED_MODULE_16__.getSessionTokenFromLocalStorage)();
            if (!token) {
                openAuthScreen();
                return;
            }
            // Ensure siteInfo is available
            let currentSiteInfo = siteInfo;
            if (!currentSiteInfo) {
                currentSiteInfo = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getSiteInfo();
                setSiteInfo(currentSiteInfo);
            }
            if (!(currentSiteInfo === null || currentSiteInfo === void 0 ? void 0 : currentSiteInfo.siteId)) {
                console.error("No siteId available for script check");
                return;
            }
            const v2Response = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.registerV2CustomCode(token);
            if (!v2Response || !v2Response.result) {
                return;
            }
            if (v2Response) {
                try {
                    const scriptId = v2Response.result.id;
                    const version = v2Response.result.version;
                    const params = {
                        targetType: 'site',
                        targetId: currentSiteInfo.siteId,
                        scriptId: scriptId,
                        location: 'header',
                        version: version
                    };
                    const applyScriptResponse = yield _services_api__WEBPACK_IMPORTED_MODULE_4__.customCodeApi.applyV2Script(params, token);
                }
                catch (error) {
                    console.error("Error applying script:", error);
                }
            }
        }
        catch (error) {
            console.error("Error updating consent script:", error);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Check if the script has already been registered in this browser
        // const hasRun = localStorage.getItem("v2ConsentScriptRegistered");
        // console.log("hasRun:", hasRun);
        // if (!hasRun) {
        //   console.log("Calling checkAndRegisterV2ConsentScript");
        checkAndRegisterV2ConsentScript();
        //   localStorage.setItem("v2ConsentScriptRegistered", "true");
        // } else {
        //   console.log("Script already registered, skipping");
        // }
    }, []);
    if (showWelcomeScreen) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_WelcomeScreen__WEBPACK_IMPORTED_MODULE_14__["default"], { onAuthorize: handleWelcomeAuthorize, onNeedHelp: handleWelcomeNeedHelp, authenticated: !!(user === null || user === void 0 ? void 0 : user.firstName) }));
    }
    if (showChoosePlan) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ChoosePlan__WEBPACK_IMPORTED_MODULE_12__["default"], { onClose: () => setShowChoosePlan(false) });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "app" },
        (isExporting || isCSVButtonLoading) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "pulse-overlays" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-loading-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PulseAnimation__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "popup-message" }, "Exporting CSV data...")))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "navbar" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (user === null || user === void 0 ? void 0 : user.firstName) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "hello" },
                "Hello, ",
                user.firstName,
                "!")) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "publish-buttons", onClick: openAuthScreen }, "Authentication"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NeedHelp__WEBPACK_IMPORTED_MODULE_11__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "configuration" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mode-switch" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Configuration"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: `mode-btn ${activeMode === "Simple" ? "active" : ""}`, onClick: () => {
                        setActiveMode("Simple");
                    } }, "Simple"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: `mode-btn ${activeMode === "Advanced" ? "active" : ""}`, onClick: () => {
                        setActiveMode("Advanced");
                        setTimeout(() => setIsActive(true), 50);
                    } }, "Advanced")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "component-width" },
                !isSubscribed ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "subscribe" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "link", href: "#", onClick: (e) => {
                            e.preventDefault();
                            setShowChoosePlan(true);
                        } },
                        "You need a subscription to publish the production ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: rightarrow, alt: "" }))))) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "subscribe" },
                    "You have already subscribed, ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "link", href: "https://billing.stripe.com/p/login/00gbIJclf5nz4Hm8ww", target: "_blank" },
                        "Cancel Subscription ",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: rightarrow, alt: "" }),
                        " ")),
                activeTab !== "Script" && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { position: "relative", display: "inline-block" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "publish-button", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                                const isUserValid = user === null || user === void 0 ? void 0 : user.firstName;
                                try {
                                    const selectedElement = yield _types_webflowtypes__WEBPACK_IMPORTED_MODULE_6__["default"].getSelectedElement();
                                    const isInvalidElement = !selectedElement || selectedElement.type === "Body";
                                    if (isUserValid && !isInvalidElement) {
                                        setShowTooltip(false);
                                        setShowPopup(true);
                                    }
                                    else {
                                        setShowPopup(false);
                                        if (!isUserValid) {
                                            setShowTooltip(false);
                                            setShowAuthPopup(true);
                                        }
                                        else if (isInvalidElement) {
                                            setShowTooltip(true);
                                        }
                                    }
                                }
                                catch (error) {
                                    setShowTooltip(false);
                                    console.error("Error checking selected element:", error);
                                }
                            }) }, isBannerAdded ? "Publish your changes" : "Create Component")))),
                activeTab === "Script" && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "publish-buttons", onClick: () => {
                            if (user === null || user === void 0 ? void 0 : user.firstName) {
                                setFetchScripts(true);
                                setButtonText("Rescan Project");
                            }
                            else {
                                setShowAuthPopup(true);
                            }
                        } }, buttonText))))),
        showAuthPopup && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-overlay" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "success-popup" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Authentication Required"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => setShowAuthPopup(false) }, "Close"))))),
        showTooltip && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `global-error-banner ${fadeOut ? 'fade-out' : 'fade-in'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: errorsheild, alt: "errorsheild" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "global-error-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", null, "To continue, choose an element inside the page Body.")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: crossmark, onClick: () => { setShowTooltip(false); setFadeOut(false); }, alt: "" }))),
        showPopup && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-overlay1" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-box" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex down" }, isBannerAdded ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "spanbox" }, "Before proceeding, make sure you're not selecting the ConsentBit element in the Webflow Designer."),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "spanbox" }, "Hang tight! We're updating your banner with the latest changes."),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "spanbox" }, "Applying your updates to the project now!."))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "spanbox" }, "We are installing the script in your site custom code."),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "spanbox" }, "We are adding a banner on your project.")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "gap" },
                    selectedOptions.includes("GDPR") && selectedOptions.includes("U.S. State Laws") ?
                        (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "confirm-button", onClick: handleBothBanners }, "Confirm")) : selectedOptions.includes("GDPR") ?
                        (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: `confirm-button ${isLoading ? "loading" : ""}`, onClick: () => gdpr() }, isLoading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "wait...")) : ("Confirm"))) : selectedOptions.includes("U.S. State Laws") ?
                        (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "confirm-button", onClick: ccpabanner }, "Confirm")) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "confirm-button1" }, " Nothing Selected"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "cancel-btn", onClick: () => setShowPopup(false) }, "Cancel"))))),
        showLoadingPopup && isLoading && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-loading-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PulseAnimation__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "popup-message" }, "Almost there\u2026 your cookie banner is in the oven. Nothing's breaking, just baking!")))),
        showSuccessPopup && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-overlay" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "success-popup" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "To make the banner live, click the 'Publish' button in the top-right corner of the Webflow interface and publish your site."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => setShowSuccessPopup(false) }, "Close")))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tabs" }, ["General Settings", "Customization", "Script"].map((tab) => {
            const isDisabled = tab === "Script" && activeMode !== "Advanced";
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: tab, className: "tab-button-wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: `tab-button ${activeTab === tab ? "active" : ""}`, onClick: () => {
                        if (!isDisabled)
                            setActiveTab(tab);
                    }, disabled: isDisabled }, tab),
                isDisabled && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tab-tooltip" }, "Available only in Advanced mode."))));
        })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-panel" },
                activeTab === "General Settings" && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "general" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "width-cust" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "expires" }, "Expires"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-container" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text1" }, "The Amount of days to remember user's consent preferences."))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", id: "expires", placeholder: "120", value: cookieExpiration, onChange: handleExpirationChange })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "animation" }, "Animation"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-container" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Shows different types of animations to apply to the banner."))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { id: "animation", value: animation, onChange: (e) => setAnimation(e.target.value) },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "fade" }, "Fade"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "slide-up" }, "Slide Up"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "slide-down" }, "Slide Down"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "slide-left" }, "Slide Left"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "slide-right" }, "Slide Right"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "easing" }, "Easing"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-container" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Controls the smoothness  of the animation."))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { id: "easing", value: easing, onChange: (e) => setEasing(e.target.value.toLowerCase()) },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "ease" }, "Ease"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "linear" }, "Linear"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "ease-in" }, "Ease-In"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "ease-out" }, "Ease-Out"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "ease-in-out" }, "Ease-In-Out"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "language" }, "Languages"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-container" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Indicates the language preference for the cookie banner."))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { id: "language", value: language, onChange: (e) => setLanguage(e.target.value) },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "English"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Dutch"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "French"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "German"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Italian"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Portuguese"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Spanish"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Swedish"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "compliance-container" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "compliance" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "compliance" }, "Compliance"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-container" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Specifies the type of cookie compliance standard, like GDPR or CCPA."))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "checkbox-group" }, ["U.S. State Laws", "GDPR"].map((option) => ( //U.S. State Laws
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { key: option, className: "custom-checkboxs" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", value: option, checked: selectedOptions.includes(option), onChange: () => handleToggles(option) }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "checkbox-box" }),
                                option))))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `cookie-settings ${(activeMode === "Advanced" && selectedOptions.includes("GDPR")) ? "active" : ""}` },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "cookie-title" }, "Categories"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cookie-category" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: checkedcatogry, alt: "checkedcatogry" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "category-name" }, "Essentials"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "category-status" }, "Always active")),
                            Object.keys(cookiePreferences).map((category) => {
                                const isChecked = cookiePreferences[category];
                                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { key: category, className: "cookie-category" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", checked: isChecked, onChange: () => toggleCategory(category) }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "custom-checkbox" },
                                        " ",
                                        isChecked && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: tickmark, alt: "checked", className: "tick-icon" })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "category-name" }, category.charAt(0).toUpperCase() + category.slice(1)),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: isChecked ? eye : openeye, alt: isChecked ? "Enabled" : "Disabled", className: "category-icon" })));
                            })),
                        activeMode === "Advanced" && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "export-csv" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                (appVersion === '1.0.0' || appVersion !== '2.0.0') && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "exportbutton", onClick: handleExportCSV, disabled: isExporting }, isExporting ? 'Exporting...' : 'Export CSV')),
                                appVersion === '2.0.0' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "exportbutton", onClick: () => {
                                        if (user === null || user === void 0 ? void 0 : user.firstName) {
                                            setShowAuthPopup(true);
                                            return;
                                        }
                                        if (sessionTokenFromLocalStorage) {
                                            setShowCSVExportAdvanced(true);
                                        }
                                        else {
                                            setShowAuthPopup(true);
                                        }
                                    }, style: { marginLeft: '10px' }, disabled: !(user === null || user === void 0 ? void 0 : user.firstName) || isCSVButtonLoading }, isCSVButtonLoading ? 'Loading...' : 'Export CSV')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Download consents in CSV format for easy analysis and sharing."))))),
                        activeMode === "Advanced" && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "togglediv" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "toggle-container" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "toggle-label" }, "Use Custom Toggle Button"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, " Enables a toggle switch. Off = standard checkbox."))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", className: "toggle-checkbox", checked: toggleStates.customToggle, onChange: () => handleToggle("customToggle") }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `toggle ${toggleStates.customToggle ? "toggled" : ""}` })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "togglediv" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "toggle-container" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "toggle-label" }, "Reset Interactions"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icons" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "this will reset the interactions that you have added."))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", className: "toggle-checkbox", checked: toggleStates.resetInteractions, onChange: () => handleToggle("resetInteractions") }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `toggle ${toggleStates.resetInteractions ? "toggled" : ""}` }))),
                        activeMode === "Advanced" ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "togglediv" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "toggle-container" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "toggle-label" }, "Disable Scroll"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "This option disables the scroll of the page when banner is shown."))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", className: "toggle-checkbox", checked: toggleStates.disableScroll, onChange: () => {
                                        handleToggle("disableScroll");
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `toggle ${toggleStates.disableScroll ? "toggled" : ""}` })))) : null,
                        activeMode === "Advanced" ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "togglediv" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "toggle-container" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "toggle-label" }, "Enable Close Button"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "This option Enable the option to close the Banner"))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", className: "toggle-checkbox", checked: toggleStates.closebutton, onChange: () => {
                                        handleToggle("closebutton");
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `toggle ${toggleStates.closebutton ? "toggled" : ""}` })))) : null,
                        activeMode === "Advanced" && selectedOptions.includes("U.S. State Laws") ?
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "togglediv" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "toggle-container" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "toggle-label" }, "Do Not Share Link"),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icons" }),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Show/hide the 'Do not share my personal information' link content."))),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "toggle-replace-button", onClick: () => handleToggle("donotshare") },
                                        "Open Guide",
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: rightarrow, alt: "icon", className: "button-icon" }))))
                            : null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group-preview" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Preview"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "preview-area" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "topbar" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: dots, alt: "dots", className: "threedots" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "consentbit-logo" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: logo, alt: "dots" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `cookie-banner ${animation} ${isActive ? "active" : ""}`, style: Object.assign(Object.assign({ transition: `transform 0.5s ${easing}, opacity 0.5s ${easing}`, position: "absolute" }, (style !== "fullwidth" && {
                                    bottom: "16px",
                                    left: selected === "left" ? "16px" : selected === "center" ? "17%" : "auto",
                                    right: selected === "right" ? "16px" : "auto",
                                    // transform: selected === "center" ? "translateX(-50%)" : "none",
                                })), { 
                                    // transform: selected === "center" ? "translateX(-50%)" : "none",
                                    fontFamily: Font, textAlign: selectedtext, alignItems: style === "centeralign" ? "center" : undefined, fontWeight: weight, width: previewDimensions.width, height: previewDimensions.minHeight, borderRadius: `${borderRadius}px`, backgroundColor: color, fontSize: `${size}px` }) },
                                style === "alignstyle" && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "secondclass", style: { backgroundColor: bgColors, borderBottomRightRadius: `${borderRadius}px`, borderTopRightRadius: `${borderRadius}px` } }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space", style: { color: headColor, fontWeight: weight, display: "flex", justifyContent: "space-between" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { style: { textAlign: selectedtext, fontFamily: Font } }, ((_a = translations[language]) === null || _a === void 0 ? void 0 : _a.heading) || "Cookie Settings"),
                                    toggleStates.closebutton ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "closebutton" }, "X") : ""),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "padding", style: { color: paraColor } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ((_b = translations[language]) === null || _b === void 0 ? void 0 : _b.description) || "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "button-wrapp", style: { justifyContent: style === "centeralign" ? "center" : undefined, } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "btn-preferences", style: { borderRadius: `${buttonRadius}px`, backgroundColor: btnColor, color: secondbuttontext, fontFamily: Font } }, ((_c = translations[language]) === null || _c === void 0 ? void 0 : _c.preferences) || "Preferences"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "btn-reject", style: { borderRadius: `${buttonRadius}px`, backgroundColor: btnColor, color: secondbuttontext, fontFamily: Font } }, ((_d = translations[language]) === null || _d === void 0 ? void 0 : _d.reject) || "Reject"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "btn-accept", style: { borderRadius: `${buttonRadius}px`, backgroundColor: secondcolor, color: primaryButtonText, fontFamily: Font } }, ((_e = translations[language]) === null || _e === void 0 ? void 0 : _e.accept) || "Accept"))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null))))),
                activeTab === "Customization" && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Customization__WEBPACK_IMPORTED_MODULE_2__["default"], { animation: animation, setAnimation: setAnimation, easing: easing, setEasing: setEasing, language: language, setLanguage: setLanguage, weight: weight, SetWeight: setWeight, size: size, SetSize: setSize, selected: selected, setSelected: setSelected, Font: Font, SetFont: SetFont, selectedtext: selectedtext, settextSelected: settextSelected, style: style, setStyle: setStyle, borderRadius: borderRadius, setBorderRadius: setBorderRadius, buttonRadius: buttonRadius, setButtonRadius: setButtonRadius, color: color, setColor: setColor, bgColor: bgColor, setBgColor: setBgColor, btnColor: btnColor, setBtnColor: setBtnColor, headColor: headColor, setHeadColor: setHeadColor, paraColor: paraColor, setParaColor: setParaColor, secondcolor: secondcolor, setSecondcolor: setSecondcolor, bgColors: bgColors, setBgColors: setBgColors, secondbuttontext: secondbuttontext, setsecondbuttontext: setsecondbuttontext, primaryButtonText: primaryButtonText, setPrimaryButtonText: setPrimaryButtonText, closebutton: toggleStates.closebutton })),
                activeTab === "Script" && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Script__WEBPACK_IMPORTED_MODULE_3__["default"], { fetchScripts: fetchScripts, setFetchScripts: setFetchScripts, isWelcome: false }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_donotshare__WEBPACK_IMPORTED_MODULE_17__["default"], { onClose: () => { }, toggleStates: toggleStates, handleToggle: handleToggle }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CSVExportAdvanced__WEBPACK_IMPORTED_MODULE_13__["default"], { isVisible: showCSVExportAdvanced, onClose: () => setShowCSVExportAdvanced(false), sessionToken: sessionTokenFromLocalStorage, siteInfo: siteInfo, onReset: () => {
                // Reset any related state in the main App component if needed
                setIsCSVButtonLoading(false);
            } })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/CSVExportAdvanced.tsx":
/*!**********************************************!*\
  !*** ./src/components/CSVExportAdvanced.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_styless_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/styless.css */ "./src/style/styless.css");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./src/services/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// FIX: Added reset functionality to allow users to reset CSV export state
// without downloading the data or changing month/year. This resolves the issue
// where users couldn't revert back to the initial state after generating a CSV.
const base_url = "https://cb-server.web-8fb.workers.dev";
const closePDFIcon = new URL(/* asset import */ __webpack_require__(/*! ../assets/Close-icon.png */ "./src/assets/Close-icon.png"), __webpack_require__.b).href;
const emptyIcon = new URL(/* asset import */ __webpack_require__(/*! ../assets/emptybox.svg */ "./src/assets/emptybox.svg"), __webpack_require__.b).href;
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const CSVExportAdvanced = ({ isVisible, onClose, sessionToken, siteInfo, onReset }) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const yearOptions = Array.from({ length: 6 }, (_, i) => currentYear - i);
    const [selectedMonth, setSelectedMonth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentMonth);
    const [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentYear);
    const [allRecords, setAllRecords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [csvHeaders, setCsvHeaders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        pagesFetched: 0,
        recordsCollected: 0,
        totalAvailable: -1,
        totalPages: 0,
        currentStatus: "",
        isExporting: false,
        isCounting: false
    });
    const [showDownload, setShowDownload] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showCancel, setShowCancel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showClear, setShowClear] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ current: 0, total: 0, message: '' });
    const [csvData, setCsvData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [visitorData, setVisitorData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [monthlyData, setMonthlyData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [totalRecordsAvailable, setTotalRecordsAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isVisible) {
            setSelectedMonth(currentMonth);
            setSelectedYear(currentYear);
            loadVisitorsData();
        }
    }, [isVisible]);
    // Reset state when modal is closed
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!isVisible) {
            // Reset all state to initial values
            setAllRecords([]);
            setCsvHeaders([]);
            setCurrentPage(0);
            setStats({
                pagesFetched: 0,
                recordsCollected: 0,
                totalAvailable: -1,
                totalPages: 0,
                currentStatus: "",
                isExporting: false,
                isCounting: false
            });
            setShowDownload(false);
            setShowCancel(false);
            setShowClear(false);
            setProgress({ current: 0, total: 0, message: '' });
            setCsvData('');
            setVisitorData([]);
            setMonthlyData([]);
            setIsLoading(false);
            setTotalRecordsAvailable(-1);
            // Call onReset callback if provided
            if (onReset) {
                onReset();
            }
        }
    }, [isVisible, onReset]);
    // Load visitors data when component opens or month/year changes
    const loadVisitorsData = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!sessionToken || !siteInfo) {
            return;
        }
        setIsLoading(true);
        try {
            const domain = getDomain();
            if (!domain) {
                setVisitorData([]);
                setMonthlyData([]);
                setIsLoading(false);
                return;
            }
            const response = yield _services_api__WEBPACK_IMPORTED_MODULE_2__.customCodeApi.getVisitorsData(sessionToken, domain, selectedYear, selectedMonth);
            if (response && response.monthlyData && response.monthlyData.length > 0) {
                setMonthlyData(response.monthlyData);
                // Since backend now filters by month, we should get only the selected month
                const monthData = response.monthlyData[0]; // First (and likely only) month
                if (monthData && monthData.visitors.length > 0) {
                    // Sort visitors by lastConsentDate in descending order (most recent first)
                    const sortedVisitors = monthData.visitors.sort((a, b) => {
                        // Simple direct comparison using lastConsentDate
                        const dateA = new Date(a.lastConsentDate || 0);
                        const dateB = new Date(b.lastConsentDate || 0);
                        // Ensure we have valid dates
                        if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
                            return 0;
                        }
                        // Sort in descending order (newest first)
                        return dateB.getTime() - dateA.getTime();
                    });
                    // Verify sorting worked correctly
                    // // console.log('First 3 items after sorting (should be newest first):', sortedVisitors.slice(0, 3).map(v => ({
                    //   id: v.visitorId,
                    //   date: v.lastConsentDate,
                    //   timestamp: new Date(v.lastConsentDate || 0).getTime()
                    // })));
                    // Create a new array to ensure the sort is applied
                    const finalSortedVisitors = [...sortedVisitors];
                    // Double-check the sorting manually
                    const manuallySorted = finalSortedVisitors.sort((a, b) => {
                        const dateA = new Date(a.lastConsentDate || 0);
                        const dateB = new Date(b.lastConsentDate || 0);
                        return dateB.getTime() - dateA.getTime();
                    });
                    // console.log('After manual re-sort - First 3 items:', manuallySorted.slice(0, 3).map(v => ({
                    //   id: v.visitorId,
                    //   date: v.lastConsentDate,
                    //   timestamp: new Date(v.lastConsentDate || 0).getTime()
                    // })));
                    setVisitorData(manuallySorted);
                    setTotalRecordsAvailable(sortedVisitors.length);
                }
                else {
                    setVisitorData([]);
                    setTotalRecordsAvailable(0);
                }
            }
            else {
                setVisitorData([]);
                setMonthlyData([]);
                setTotalRecordsAvailable(0);
            }
        }
        catch (error) {
            setVisitorData([]);
            setMonthlyData([]);
            setTotalRecordsAvailable(0);
        }
        finally {
            setIsLoading(false);
        }
    });
    // Load visitors data when month or year changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isVisible && sessionToken && siteInfo) {
            loadVisitorsData();
        }
    }, [selectedMonth, selectedYear, isVisible, sessionToken, siteInfo]);
    const getDomain = () => {
        const domain = (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.shortName) || (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteName) || (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId) || '';
        return domain;
    };
    // Test function to check if API is working
    const testAPI = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!sessionToken) {
            return;
        }
        const domain = getDomain();
        if (!domain) {
            return;
        }
        try {
            const response = yield _services_api__WEBPACK_IMPORTED_MODULE_2__.customCodeApi.getVisitorsData(sessionToken, domain, 2024);
        }
        catch (error) {
            // Error handled silently
        }
    });
    const countRecords = () => __awaiter(void 0, void 0, void 0, function* () {
        const domain = getDomain();
        if (!domain) {
            setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: 'No site info found', isCounting: false })));
            return;
        }
        setStats(prev => (Object.assign(Object.assign({}, prev), { isCounting: true, currentStatus: 'Counting records...' })));
        try {
            const response = yield _services_api__WEBPACK_IMPORTED_MODULE_2__.customCodeApi.getVisitorsData(sessionToken, domain, selectedYear);
            if (response && response.monthlyData) {
                // Convert selectedMonth (0-11) to month number format (01-12)
                const monthNumber = String(selectedMonth + 1).padStart(2, '0');
                const monthData = response.monthlyData.find(md => md.month === monthNumber && md.year === selectedYear);
                const totalRecords = monthData ? monthData.visitors.length : 0;
                const totalPages = totalRecords > 0 ? 1 : 0; // For monthly data, it's typically 1 page
                setStats(prev => (Object.assign(Object.assign({}, prev), { totalAvailable: totalRecords, totalPages: totalPages, currentStatus: `Found ${totalRecords} records for ${monthNames[selectedMonth]} ${selectedYear}`, isCounting: false })));
            }
            else {
                setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: 'No records found', isCounting: false })));
            }
        }
        catch (error) {
            setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: `Count failed: ${error instanceof Error ? error.message : 'Unknown error'}`, isCounting: false })));
        }
    });
    const exportAllRecords = () => __awaiter(void 0, void 0, void 0, function* () {
        const domain = getDomain();
        if (!domain) {
            setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: 'No site info found', isExporting: false })));
            return;
        }
        if (!sessionToken) {
            setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: 'No session token found', isExporting: false })));
            return;
        }
        setStats(prev => (Object.assign(Object.assign({}, prev), { isExporting: true, currentStatus: 'Starting data collection...', pagesFetched: 0, recordsCollected: 0, totalPages: 0 })));
        setAllRecords([]);
        setCsvHeaders([]);
        setCurrentPage(0);
        setShowDownload(false);
        setShowCancel(true);
        setShowClear(false);
        try {
            yield fetchAllRecords(domain);
        }
        catch (error) {
            setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: `Data collection failed: ${error instanceof Error ? error.message : 'Unknown error'}`, isExporting: false })));
            resetUI();
        }
    });
    const fetchAllRecords = (domain) => __awaiter(void 0, void 0, void 0, function* () {
        let pageCount = 0;
        let allCollectedRecords = [];
        let headers = [];
        try {
            const response = yield _services_api__WEBPACK_IMPORTED_MODULE_2__.customCodeApi.getVisitorsData(sessionToken, domain, selectedYear);
            if (response && response.monthlyData) {
                // Convert selectedMonth (0-11) to month number format (01-12)
                const monthNumber = String(selectedMonth + 1).padStart(2, '0');
                const monthData = response.monthlyData.find(md => md.month === monthNumber && md.year === selectedYear);
                if (!monthData) {
                    setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: 'No data for selected month/year', isExporting: false })));
                    setShowCancel(false);
                    return;
                }
                pageCount = 1;
                setCurrentPage(pageCount);
                setStats(prev => (Object.assign(Object.assign({}, prev), { pagesFetched: pageCount, totalPages: 1, currentStatus: `Processing ${monthNames[selectedMonth]} ${selectedYear}...` })));
                const monthRecords = monthData.visitors.map((visitor, idx) => {
                    const preferences = visitor.preferences || {};
                    const metadata = visitor.metadata || {};
                    // Handle both GDPR and CCPA preferences
                    const prefsArray = [];
                    // GDPR fields
                    prefsArray.push(`Necessary: ${preferences.necessary !== undefined ? (preferences.necessary ? 'Yes' : 'No') : 'Yes'}`);
                    if (preferences.marketing !== undefined)
                        prefsArray.push(`Marketing: ${preferences.marketing ? 'Yes' : 'No'}`);
                    if (preferences.personalization !== undefined)
                        prefsArray.push(`Personalization: ${preferences.personalization ? 'Yes' : 'No'}`);
                    if (preferences.analytics !== undefined)
                        prefsArray.push(`Analytics: ${preferences.analytics ? 'Yes' : 'No'}`);
                    // CCPA fields
                    if (preferences.donotshare !== undefined)
                        prefsArray.push(`Do Not Share: ${preferences.donotshare ? 'Yes' : 'No'}`);
                    if (preferences.donotselldata !== undefined)
                        prefsArray.push(`Do Not Sell Data: ${preferences.donotselldata ? 'Yes' : 'No'}`);
                    if (preferences.targetedAdvertising !== undefined)
                        prefsArray.push(`Targeted Advertising: ${preferences.targetedAdvertising ? 'Yes' : 'No'}`);
                    if (preferences.sale !== undefined)
                        prefsArray.push(`Sale: ${preferences.sale ? 'Yes' : 'No'}`);
                    if (preferences.profiling !== undefined)
                        prefsArray.push(`Profiling: ${preferences.profiling ? 'Yes' : 'No'}`);
                    // Legacy field for backward compatibility
                    if (preferences.doNotShare !== undefined)
                        prefsArray.push(`Do Not Share (Legacy): ${preferences.doNotShare ? 'Yes' : 'No'}`);
                    const prefsString = prefsArray.length > 0 ? prefsArray.join('; ') : 'N/A';
                    // Enhanced metadata handling
                    const metaArray = [];
                    metaArray.push(`IP: ${preferences.ip || (metadata === null || metadata === void 0 ? void 0 : metadata.ip) || '-'}`);
                    metaArray.push(`Banner Type: ${(metadata === null || metadata === void 0 ? void 0 : metadata.bannerType) || 'Unknown'}`);
                    metaArray.push(`Country: ${preferences.country || (metadata === null || metadata === void 0 ? void 0 : metadata.country) || '-'}`);
                    let timestampStr = '-';
                    const timestampSource = metadata === null || metadata === void 0 ? void 0 : metadata.timestamp;
                    if (timestampSource) {
                        try {
                            timestampStr = new Date(timestampSource).toLocaleString();
                        }
                        catch (_a) {
                            timestampStr = String(timestampSource);
                        }
                    }
                    if (metadata === null || metadata === void 0 ? void 0 : metadata.userAgent)
                        metaArray.push(`UA: ${metadata.userAgent}`);
                    const metadataString = metaArray.join('; ');
                    let lastUpdatedStr = '-';
                    const lastUpdatedSource = preferences.lastUpdated || visitor.lastUpdated || visitor.lastConsentDate;
                    if (lastUpdatedSource) {
                        try {
                            lastUpdatedStr = new Date(lastUpdatedSource).toLocaleString();
                        }
                        catch (_b) {
                            lastUpdatedStr = String(lastUpdatedSource);
                        }
                    }
                    const pdfUrl = `${base_url}/api/v2/consent-data/${domain}/visitor/${visitor.visitorId}/report?format=pdf`;
                    // Create Excel hyperlink for the PDF URL
                    const excelHyperlink = `=HYPERLINK("${pdfUrl}","Download PDF")`;
                    return [
                        idx + 1,
                        visitor.visitorId,
                        visitor.status || 'Unknown',
                        preferences.country || (metadata === null || metadata === void 0 ? void 0 : metadata.country) || '-',
                        prefsString,
                        metadataString,
                        lastUpdatedStr,
                        excelHyperlink
                    ].map(escapeCsvCell).join(',');
                });
                headers = ['#', 'Visitor ID', 'Status', 'Country', 'Consent Preferences', 'Metadata', 'Last Updated', 'PDF Link'];
                setCsvHeaders(headers);
                allCollectedRecords.push(...monthRecords);
                setAllRecords([...allCollectedRecords]);
                setStats(prev => (Object.assign(Object.assign({}, prev), { recordsCollected: allCollectedRecords.length, currentStatus: `Page ${pageCount} complete. Total records: ${allCollectedRecords.length}` })));
                setShowDownload(true);
                setShowCancel(false);
            }
        }
        catch (error) {
            throw error;
        }
    });
    const escapeCsvCell = (value) => {
        if (value === null || value === undefined)
            return '';
        const stringValue = String(value);
        if (stringValue.includes(',') || stringValue.includes('\n') || stringValue.includes('"')) {
            const escapedValue = stringValue.replace(/"/g, '""');
            return `"${escapedValue}"`;
        }
        return stringValue;
    };
    const deduplicateByVisitorId = (records) => {
        const seen = new Set();
        const deduped = [];
        for (const rec of records) {
            const columns = rec.split(',');
            if (columns.length > 1) {
                const id = columns[1].replace(/"/g, '');
                if (!seen.has(id)) {
                    seen.add(id);
                    deduped.push(rec);
                }
            }
        }
        return deduped;
    };
    const downloadCSV = () => {
        if (!csvHeaders.length || !allRecords.length) {
            alert('No data to download');
            return;
        }
        const uniqueRecords = deduplicateByVisitorId(allRecords);
        const csvContent = [
            csvHeaders.join(','),
            ...uniqueRecords
        ].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `consent_report_${getDomain()}_${monthNames[selectedMonth]}_${selectedYear}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        // Reset UI to initial state after download
        setAllRecords([]);
        setCsvHeaders([]);
        setCurrentPage(0);
        setShowDownload(false);
        setShowCancel(false);
        setShowClear(false);
        setStats(prev => (Object.assign(Object.assign({}, prev), { pagesFetched: 0, recordsCollected: 0, totalAvailable: -1, totalPages: 0, currentStatus: "", isExporting: false, isCounting: false })));
    };
    const clearData = () => {
        setAllRecords([]);
        setCsvHeaders([]);
        setCurrentPage(0);
        setStats(prev => (Object.assign(Object.assign({}, prev), { pagesFetched: 0, recordsCollected: 0, totalAvailable: -1, totalPages: 0, currentStatus: '', isExporting: false, isCounting: false })));
        resetUI();
    };
    const cancelExport = () => {
        setStats(prev => (Object.assign(Object.assign({}, prev), { isExporting: false })));
        if (allRecords.length > 0) {
            setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: `Export cancelled. ${allRecords.length} records were collected and are available for download.` })));
            setShowDownload(true);
            setShowClear(true);
            setShowCancel(false);
        }
        else {
            setStats(prev => (Object.assign(Object.assign({}, prev), { currentStatus: 'Export cancelled - no data collected' })));
            resetUI();
        }
    };
    const resetUI = () => {
        setShowDownload(false);
        setShowCancel(false);
        setShowClear(false);
    };
    // Handle PDF download for individual visitor
    const handleDownloadPDF = (pdfUrl, visitorId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!sessionToken) {
                throw new Error("No session token found");
            }
            const filename = `consent-report-${visitorId}.pdf`;
            yield _services_api__WEBPACK_IMPORTED_MODULE_2__.customCodeApi.downloadPDFFromUrl(sessionToken, pdfUrl, filename);
        }
        catch (error) {
            alert('Failed to download consent report. Please try again.');
        }
    });
    if (!isVisible)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "export-data-overlay" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "export-data-modal" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "export-data-header" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Advanced CSV Export"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: closePDFIcon, alt: "Close", onClick: onClose })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "export-data-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "month-year-selector" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "select-group" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Month:"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { value: selectedMonth, onChange: e => setSelectedMonth(Number(e.target.value)), className: "month-select", disabled: stats.isExporting || stats.isCounting }, monthNames.map((month, idx) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { key: month, value: idx }, month))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "select-group" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Year:"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { value: selectedYear, onChange: e => setSelectedYear(Number(e.target.value)), className: "year-select", disabled: stats.isExporting || stats.isCounting }, yearOptions.map(year => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { key: year, value: year }, year)))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "action-buttons" },
                    !stats.isExporting && !stats.isCounting && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "action-btn primary", onClick: exportAllRecords, disabled: stats.isExporting || stats.isCounting }, "Generate CSV Report")),
                    showDownload && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "action-btn success", onClick: downloadCSV }, "Download Complete CSV"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "action-btn secondary", onClick: clearData }, "Reset"))),
                    showClear && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "action-btn warning", onClick: clearData }, "Clear Data")),
                    showCancel && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "action-btn danger", onClick: cancelExport }, "Cancel Export"))),
                (stats.isExporting || stats.isCounting) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "progress-container active" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "progress-bar" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "progress-fill", style: {
                                width: `${stats.totalPages > 0 ? (stats.pagesFetched / stats.totalPages) * 100 : 0}%`
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "progress-text" }, stats.isExporting && stats.totalPages > 0
                        ? `${stats.pagesFetched}/${stats.totalPages} pages completed (${stats.recordsCollected} records)`
                        : stats.currentStatus))),
                (stats.isExporting || stats.isCounting || stats.totalAvailable > 0 || stats.recordsCollected > 0) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "stats-container", style: { marginLeft: "24px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "stats-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Export Progress:")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "stats-grid" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "stat-item" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "stat-label" }, "Pages fetched:"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "stat-value" },
                                stats.pagesFetched,
                                "/",
                                stats.totalPages)),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "stat-item" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "stat-label" }, "Records collected:"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "stat-value" }, stats.recordsCollected)),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "stat-item" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "stat-label" }, "Total records available:"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "stat-value" }, totalRecordsAvailable > 0 ? totalRecordsAvailable : '-')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "stat-item" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "stat-label" }, "Progress:"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "stat-value" }, stats.totalPages > 0 ? `${Math.round((stats.pagesFetched / stats.totalPages) * 100)}%` : '-'))))),
                stats.currentStatus && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `status-message ${stats.currentStatus.includes('failed') || stats.currentStatus.includes('error') ? 'error' : 'success'}` }, stats.currentStatus)),
                visitorData.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "visitor-data-section" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Available Consent Reports"),
                    !isLoading && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "visitor-data-table" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "table-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header-cell" }, "Visitor ID"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header-cell" }, "Timestamp"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header-cell" }, "Consent Status"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header-cell" }, "Actions")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "table-body" }, visitorData.map((visitor) => {
                            const preferences = visitor.preferences || {};
                            const metadata = visitor.metadata || {};
                            // Format the date for better display
                            let formattedDate = visitor.lastConsentDate;
                            try {
                                const date = new Date(visitor.lastConsentDate || visitor.lastUpdated || '');
                                if (!isNaN(date.getTime())) {
                                    formattedDate = date.toLocaleString();
                                }
                            }
                            catch (error) {
                                // Keep original date if parsing fails
                            }
                            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: visitor.visitorId, className: "table-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "table-cell" }, visitor.visitorId),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "table-cell" }, formattedDate),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "table-cell" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `status-badge ${(visitor.status || '').toLowerCase()}` }, visitor.status || 'Unknown')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "table-cell" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "download-pdf-btn", onClick: () => handleDownloadPDF(visitor.pdfUrl, visitor.visitorId) }, "Download PDF"))));
                        })))))),
                !isLoading && visitorData.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "visitor-data-section" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "no-data" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "empty-state" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: emptyIcon, alt: "Empty", className: "empty-icon" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "empty-message" }, "No visitor data available for the selected period."),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "empty-subtitle" }, "Try selecting a different month or year, or check back later for new consent data.")))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSVExportAdvanced);


/***/ }),

/***/ "./src/components/ChoosePlan.tsx":
/*!***************************************!*\
  !*** ./src/components/ChoosePlan.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_optimized_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/optimized-images */ "./src/util/optimized-images.ts");
/* harmony import */ var _style_styless_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/styless.css */ "./src/style/styless.css");



const cross = new URL(/* asset import */ __webpack_require__(/*! ../assets/cross mark.svg */ "./src/assets/cross mark.svg"), __webpack_require__.b).href;
const arrow = new URL(/* asset import */ __webpack_require__(/*! ../assets/→.svg */ "./src/assets/→.svg"), __webpack_require__.b).href;
const ChoosePlan = ({ onClose }) => {
    const [isAnnual, setIsAnnual] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const price = isAnnual ? 6 : 8;
    const pricingText = isAnnual ? "/Paid Annually" : "/Paid Monthly";
    const handleToggle = (value) => {
        setIsAnnual(value === "annually");
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "choose-plan-overlay" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "choose-plan-modal" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flexx" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "choose-plan-title" }, "Choose plan"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "choose-plan-close", onClick: onClose },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: cross, alt: "" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "choose-plan-description" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _util_optimized_images__WEBPACK_IMPORTED_MODULE_1__.otherIcons.star, alt: "" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Simple pricing, complete access\u2014go monthly for flexibility or save big with a yearly subscription. All features, always available")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "plan-big-card" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "choose-plan-card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Celebrate our launch with a free year of Consentbit - CONSENTBIT100"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "choose-plan-price" },
                        "$",
                        price),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "choose-plan-subtext" }, pricingText),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "switches-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "radio", id: "switchMonthly", name: "switchPlan", checked: !isAnnual, onChange: () => handleToggle("monthly") }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "radio", id: "switchYearly", name: "switchPlan", checked: isAnnual, onChange: () => handleToggle("annually") }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "switchMonthly" }, "Monthly"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "switchYearly" }, "Annually"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "switch-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "switch" }))),
                    isAnnual && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "anually-text" }, "you save 20%")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "choose-plan-cta", onClick: () => {
                                const url = isAnnual ? "https://buy.stripe.com/aFa3cw5xtfv49xTeEYds403" : "https://buy.stripe.com/fZubJ2aRNer0h0l8gAds401";
                                window.open(url, "_blank");
                            } },
                            "Purchase Now ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: arrow, alt: "" }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoosePlan);


/***/ }),

/***/ "./src/components/Customization.tsx":
/*!******************************************!*\
  !*** ./src/components/Customization.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jaames_iro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jaames/iro */ "./node_modules/@jaames/iro/dist/iro.es.js");
/* harmony import */ var _util_optimized_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/optimized-images */ "./src/util/optimized-images.ts");

 // Import iro.js

const justiflyleft = new URL(/* asset import */ __webpack_require__(/*! ../assets/left align uncheck.svg */ "./src/assets/left align uncheck.svg"), __webpack_require__.b).href;
const justiflycenter = new URL(/* asset import */ __webpack_require__(/*! ../assets/center align uncheck.svg */ "./src/assets/center align uncheck.svg"), __webpack_require__.b).href;
const justiflyright = new URL(/* asset import */ __webpack_require__(/*! ../assets/right align uncheckd.svg */ "./src/assets/right align uncheckd.svg"), __webpack_require__.b).href;
const dots = new URL(/* asset import */ __webpack_require__(/*! ../assets/3 dots.svg */ "./src/assets/3 dots.svg"), __webpack_require__.b).href;
const line = new URL(/* asset import */ __webpack_require__(/*! ../assets/Vector 20.svg */ "./src/assets/Vector 20.svg"), __webpack_require__.b).href;
const questionmark = new URL(/* asset import */ __webpack_require__(/*! ../assets/question.svg */ "./src/assets/question.svg"), __webpack_require__.b).href;
const logo = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon.svg */ "./src/assets/icon.svg"), __webpack_require__.b).href;
const checkedcenteralign = new URL(/* asset import */ __webpack_require__(/*! ../assets/center alignemnt checked.svg */ "./src/assets/center alignemnt checked.svg"), __webpack_require__.b).href;
const checkedleft = new URL(/* asset import */ __webpack_require__(/*! ../assets/left checkd alignment.svg */ "./src/assets/left checkd alignment.svg"), __webpack_require__.b).href;
const checkedright = new URL(/* asset import */ __webpack_require__(/*! ../assets/right checkd alignemnt.svg */ "./src/assets/right checkd alignemnt.svg"), __webpack_require__.b).href;
const Customization = ({ animation, setAnimation, easing, setEasing, language, setLanguage, weight, SetWeight, size, SetSize, selected, setSelected, Font, SetFont, selectedtext, settextSelected, style, setStyle, buttonRadius, setButtonRadius, borderRadius, setBorderRadius, color, setColor, bgColor, setBgColor, btnColor, setBtnColor, headColor, setHeadColor, paraColor, setParaColor, secondcolor, setSecondcolor, bgColors, setBgColors, secondbuttontext, setsecondbuttontext, primaryButtonText, setPrimaryButtonText, closebutton, }) => {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showDiv, setShowDiv] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const colorPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const pickerInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [btnOpen, setBtnOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [headOpen, setHeadOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [paraOpen, setParaOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [secondbuttonOpen, setSecondButtonOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [secondbgOpen, setSecondbgopen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [SecondbuttonTextOpen, setSecondbuttonTextOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [primaryButtonTextOpen, setPrimaryButtonTextOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const btnPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const headPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const paraPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const secondbtnPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const secondbgPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SecondbuttonTextPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const primaryButtonTextPickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const btnPickerInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const headPickerInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const paraPickerInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const secondbtnPickerInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const secondbgPickerInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const SecondbuttonTextInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const primaryButtonTextInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const btnDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const headDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const paraDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const secondbtnDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const secondbgDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const secondbuttonDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const primaryButtonTextDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const handleBorderRadiusChange = (e) => {
        setBorderRadius(Number(e.target.value));
    };
    const handleButtonRadiusChange = (e) => {
        setButtonRadius(Number(e.target.value));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setIsActive(false);
        setTimeout(() => setIsActive(true), 50);
    }, [animation]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        document.body.style.fontFamily = Font;
    }, [Font]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!pickerInstance.current && colorPickerRef.current) {
            pickerInstance.current = _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker(colorPickerRef.current, {
                width: 100,
                color: color,
                borderWidth: 2,
                borderColor: "#ccc",
            });
            pickerInstance.current.on("color:change", (newColor) => {
                setColor(newColor.hexString);
            });
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isOpen && pickerInstance.current) {
            pickerInstance.current.color.set(color);
        }
    }, [isOpen]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                colorPickerRef.current &&
                !colorPickerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);
    const previewDimensions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
        switch (style) {
            case "bigstyle":
                return { width: "250px", minHeight: "151px" };
            case "fullwidth":
                return { width: "448px", dislay: "flex" };
            case "centeralign":
                return { width: "303px" };
            default:
                return { width: "318px" };
        }
    }, [style]);
    // ---
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Initialize all color pickers
        if (!btnPickerInstance.current && btnPickerRef.current) {
            btnPickerInstance.current = _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker(btnPickerRef.current, { width: 100, color: btnColor, borderWidth: 2, borderColor: "#ccc" });
            btnPickerInstance.current.on("color:change", (newColor) => setBtnColor(newColor.hexString));
        }
        if (!headPickerInstance.current && headPickerRef.current) {
            headPickerInstance.current = _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker(headPickerRef.current, { width: 100, color: headColor, borderWidth: 2, borderColor: "#ccc" });
            headPickerInstance.current.on("color:change", (newColor) => setHeadColor(newColor.hexString));
        }
        if (!paraPickerInstance.current && paraPickerRef.current) {
            paraPickerInstance.current = _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker(paraPickerRef.current, { width: 100, color: paraColor, borderWidth: 2, borderColor: "#ccc" });
            paraPickerInstance.current.on("color:change", (newColor) => setParaColor(newColor.hexString));
        }
        if (!secondbtnPickerInstance.current && secondbtnPickerRef.current) {
            secondbtnPickerInstance.current = _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker(secondbtnPickerRef.current, { width: 100, color: secondcolor, borderWidth: 2, borderColor: "#ccc" });
            secondbtnPickerInstance.current.on("color:change", (newColor) => setSecondcolor(newColor.hexString));
        }
        if (!secondbgPickerInstance.current && secondbgPickerRef.current) {
            secondbgPickerInstance.current = _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker(secondbgPickerRef.current, { width: 100, color: bgColors, borderWidth: 2, borderColor: "#ccc" });
            secondbgPickerInstance.current.on("color:change", (newColor) => setBgColors(newColor.hexString));
        }
        if (!SecondbuttonTextInstance.current && SecondbuttonTextPickerRef.current) {
            SecondbuttonTextInstance.current = _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker(SecondbuttonTextPickerRef.current, { width: 100, color: secondbuttontext, borderWidth: 2, borderColor: "#ccc" });
            SecondbuttonTextInstance.current.on("color:change", (newColor) => setsecondbuttontext(newColor.hexString));
        }
        if (!primaryButtonTextInstance.current && primaryButtonTextPickerRef.current) {
            primaryButtonTextInstance.current = _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker(primaryButtonTextPickerRef.current, { width: 100, color: primaryButtonText, borderWidth: 2, borderColor: "#ccc" });
            primaryButtonTextInstance.current.on("color:change", (newColor) => setPrimaryButtonText(newColor.hexString));
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Sync picker color with state when dropdown opens
        if (btnOpen && btnPickerInstance.current)
            btnPickerInstance.current.color.set(btnColor);
        if (headOpen && headPickerInstance.current)
            headPickerInstance.current.color.set(headColor);
        if (paraOpen && paraPickerInstance.current)
            paraPickerInstance.current.color.set(paraColor);
        if (secondbuttonOpen && secondbtnPickerInstance.current)
            secondbtnPickerInstance.current.color.set(secondcolor);
        if (secondbgOpen && secondbgPickerInstance.current)
            secondbgPickerInstance.current.color.set(bgColors);
        if (SecondbuttonTextOpen && SecondbuttonTextInstance.current)
            SecondbuttonTextInstance.current.color.set(secondbuttontext);
        if (primaryButtonTextOpen && primaryButtonTextInstance.current)
            primaryButtonTextInstance.current.color.set(primaryButtonText);
    }, [btnOpen, headOpen, paraOpen, secondbuttonOpen, secondbgOpen, SecondbuttonTextOpen, primaryButtonTextOpen]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Handle click outside to close dropdowns
        function handleClickOutside(event) {
            if (btnOpen && btnDropdownRef.current && !btnDropdownRef.current.contains(event.target) && btnPickerRef.current && !btnPickerRef.current.contains(event.target))
                setBtnOpen(false);
            if (headOpen && headDropdownRef.current && !headDropdownRef.current.contains(event.target) && headPickerRef.current && !headPickerRef.current.contains(event.target))
                setHeadOpen(false);
            if (paraOpen && paraDropdownRef.current && !paraDropdownRef.current.contains(event.target) && paraPickerRef.current && !paraPickerRef.current.contains(event.target))
                setParaOpen(false);
            if (secondbuttonOpen && secondbtnDropdownRef.current && !secondbtnDropdownRef.current.contains(event.target) && secondbtnPickerRef.current && !secondbtnPickerRef.current.contains(event.target))
                setSecondButtonOpen(false);
            if (secondbgOpen && secondbgDropdownRef.current && !secondbgDropdownRef.current.contains(event.target) && secondbgPickerRef.current && !secondbgPickerRef.current.contains(event.target))
                setSecondbgopen(false);
            if (SecondbuttonTextOpen && secondbuttonDropdownRef.current && !secondbuttonDropdownRef.current.contains(event.target) && SecondbuttonTextPickerRef.current && !SecondbuttonTextPickerRef.current.contains(event.target))
                setSecondbuttonTextOpen(false);
            if (primaryButtonTextOpen && primaryButtonTextDropdownRef.current && !primaryButtonTextDropdownRef.current.contains(event.target) && primaryButtonTextPickerRef.current && !primaryButtonTextPickerRef.current.contains(event.target))
                setPrimaryButtonTextOpen(false);
        }
        if (btnOpen || headOpen || paraOpen || secondbuttonOpen || secondbgOpen || SecondbuttonTextOpen || primaryButtonTextOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [btnOpen, headOpen, paraOpen, secondbuttonOpen, secondbgOpen, SecondbuttonTextOpen, primaryButtonTextOpen]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "general" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "width-cust" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cust" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-blue1" }, "Cookie Banner Alignment"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-container" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text2" }, "Adjust the cookie banner's alignment for optimal placement on your site."))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "category-2 flex gap-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_util_optimized_images__WEBPACK_IMPORTED_MODULE_2__.getAlignmentIcon)("left", selected === "left"), alt: "leftalignment", onClick: () => setSelected("left"), className: "cursor-pointer" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_util_optimized_images__WEBPACK_IMPORTED_MODULE_2__.getAlignmentIcon)("center", selected === "center"), alt: "centertalignment", onClick: () => setSelected("center"), className: "cursor-pointer" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_util_optimized_images__WEBPACK_IMPORTED_MODULE_2__.getAlignmentIcon)("right", selected === "right"), alt: "righttalignment", onClick: () => setSelected("right"), className: "cursor-pointer" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cust" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-blue" }, "Cookie Banner Styles"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Customize the appearance of the cookie banner to match your site's design."))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "category-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "img-width cursor-pointer", src: (0,_util_optimized_images__WEBPACK_IMPORTED_MODULE_2__.getBannerStyleIcon)("align"), alt: "Align icon", style: { opacity: style === "align" ? 1 : 0.4, border: style === "align" ? "2px solid #8C79FF" : "2px solid #ffffff00", borderRadius: "6px" }, onClick: () => setStyle(style === "align" ? "" : "align") }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "img-width cursor-pointer", src: (0,_util_optimized_images__WEBPACK_IMPORTED_MODULE_2__.getBannerStyleIcon)("alignstyle"), alt: "Align icon", style: { opacity: style === "alignstyle" ? 1 : 0.4, border: style === "alignstyle" ? "2px solid #8C79FF" : "2px solid #ffffff00", borderRadius: "6px" }, onClick: () => setStyle(style === "alignstyle" ? "" : "alignstyle") }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: (0,_util_optimized_images__WEBPACK_IMPORTED_MODULE_2__.getBannerStyleIcon)("bigstyle"), alt: "Align icon", style: { opacity: style === "bigstyle" ? 1 : 0.4, border: style === "bigstyle" ? "2px solid #8C79FF" : "2px solid #ffffff00", borderRadius: "6px" }, onClick: () => setStyle(style === "bigstyle" ? "" : "bigstyle") })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "category-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "img-width cursor-pointer", src: (0,_util_optimized_images__WEBPACK_IMPORTED_MODULE_2__.getBannerStyleIcon)("centeralign"), alt: "Align icon", style: { opacity: style === "centeralign" ? 1 : 0.4, border: style === "centeralign" ? "2px solid #8C79FF" : "2px solid #ffffff00", borderRadius: "4px" }, onClick: () => setStyle(style === "centeralign" ? "" : "centeralign") }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "img-width cursor-pointer", src: (0,_util_optimized_images__WEBPACK_IMPORTED_MODULE_2__.getBannerStyleIcon)("fullwidth"), alt: "Full Width icon", style: { opacity: style === "fullwidth" ? 1 : 0.4, border: style === "fullwidth" ? "2px solid #8C79FF" : "2px solid #ffffff00", borderRadius: "4px" }, onClick: () => setStyle(style === "fullwidth" ? "" : "fullwidth") }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "custs" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flexs" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-blues" }, "Typography"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Customize font styles and sizes to enhance readability and design."))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { id: "Font", value: Font, onChange: (e) => SetFont(e.target.value) },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "'Montserrat', sans-serif" }, "Montserrat"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "'Lato', sans-serif" }, "Lato"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "'Oswald', sans-serif" }, "Oswald"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "'Merriweather', serif" }, "Merriweather"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "'Open Sans', sans-serif" }, "Open Sans"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "'Ubuntu', sans-serif" }, "Ubuntu"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "'Droid Sans', sans-serif" }, "Droid Sans"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "'Exo', sans-serif" }, "Exo"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { id: "weight", value: weight, onChange: (e) => SetWeight(e.target.value) },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "600" }, "Semibold"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "100" }, "Thin"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "300" }, "Light"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "400" }, "Regular"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "700" }, "Bold"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "800" }, "Extra Bold"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group width" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { id: "font-size", value: size, onChange: (e) => SetSize(e.target.value) },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "12"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "13"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "14"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "15"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "16"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "17"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "18")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Alignment"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "category-3 flex gap-4" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: selectedtext === "left" ? checkedleft : justiflyleft, alt: "Left Align", onClick: () => settextSelected("left"), className: "cursor-pointer" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: selectedtext === "center" ? checkedcenteralign : justiflycenter, alt: "Center Align", onClick: () => settextSelected("center"), className: "cursor-pointer" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: selectedtext === "right" ? checkedright : justiflyright, alt: "Right Align", onClick: () => settextSelected("right"), className: "cursor-pointer" }))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: line, alt: "line" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cust" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-blue" }, "Colors"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Customize the colors to match your site's branding and design."))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "custom" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "customs" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Banner Background"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-picker-dropdown", ref: dropdownRef },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "color-picker-button", onClick: () => setIsOpen(!isOpen) },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-text" }, color),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-preview", style: { backgroundColor: color } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: colorPickerRef, className: `color-picker-container ${isOpen ? "visible" : "hidden"}` }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Second Background"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-picker-dropdown", ref: secondbgDropdownRef },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "color-picker-button", onClick: () => setSecondbgopen(!secondbgOpen) },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-text" }, bgColors),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-preview", style: { backgroundColor: bgColors } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: secondbgPickerRef, className: `color-picker-container ${secondbgOpen ? "visible" : "hidden"}` })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "customs" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Body Text Color"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-picker-dropdown", ref: paraDropdownRef },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "color-picker-button", onClick: () => setParaOpen(!paraOpen) },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-text" }, paraColor),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-preview", style: { backgroundColor: paraColor } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: paraPickerRef, className: `color-picker-container ${paraOpen ? "visible" : "hidden"}` }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Title Text Color"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-picker-dropdown", ref: headDropdownRef },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "color-picker-button", onClick: () => setHeadOpen(!headOpen) },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-text" }, headColor),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-preview", style: { backgroundColor: headColor } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: headPickerRef, className: `color-picker-container ${headOpen ? "visible" : "hidden"}` })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-blue" }, "Primary Button"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Style the primary (Accept) button to match your site\u2019s branding."))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "customs" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Background Color"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-picker-dropdown", ref: secondbtnDropdownRef },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "color-picker-button", onClick: () => setSecondButtonOpen(!secondbuttonOpen) },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-text" }, secondcolor),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-preview", style: { backgroundColor: secondcolor } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: secondbtnPickerRef, className: `color-picker-container ${secondbuttonOpen ? "visible" : "hidden"}` }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Text Color"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-picker-dropdown", ref: primaryButtonTextDropdownRef },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "color-picker-button", onClick: () => setPrimaryButtonTextOpen(!primaryButtonTextOpen) },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-text" }, primaryButtonText),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-preview", style: { backgroundColor: primaryButtonText } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: primaryButtonTextPickerRef, className: `color-picker-container ${primaryButtonTextOpen ? "visible" : "hidden"}` })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-blue" }, "Secondary Button"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "  Customize the Reject/Preferences (secondary) buttons to match your site\u2019s branding."))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "customs" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Background Color"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-picker-dropdown", ref: btnDropdownRef },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "color-picker-button", onClick: () => setBtnOpen(!btnOpen) },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-text" }, btnColor),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-preview", style: { backgroundColor: btnColor } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: btnPickerRef, className: `color-picker-container ${btnOpen ? "visible" : "hidden"}` }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Text Color"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-picker-dropdown", ref: secondbuttonDropdownRef },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "color-picker-button", onClick: () => setSecondbuttonTextOpen(!SecondbuttonTextOpen) },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "color-text" }, secondbuttontext),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "color-preview", style: { backgroundColor: secondbuttontext } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: SecondbuttonTextPickerRef, className: `color-picker-container ${SecondbuttonTextOpen ? "visible" : "hidden"}` })))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cust2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flexs" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-blue" }, "Corner Radius"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tooltip-containers" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: questionmark, alt: "info", className: "tooltip-icon" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "tooltip-text" }, "Adjust the corner radius of buttons and containers in the cookie banner."))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flexy" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-down" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Container"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-groups width" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "number", className: "focus:outline-none focus:ring-0 focus:border-none", id: "border-radius", value: borderRadius, min: "0", step: "1", onChange: handleBorderRadiusChange })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-down" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Button"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-groups width" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "number", id: "border-radius-button", value: buttonRadius, min: "0", step: "1", onChange: handleButtonRadiusChange }))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "settings-group-preview" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Preview"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "preview-area" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "topbar" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: dots, alt: "dots", className: "threedots" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "consentbit-logo" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: logo, alt: "logo" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `cookie-banner ${animation} ${isActive ? "active" : ""}`, style: Object.assign(Object.assign({ transition: `transform 0.5s ${easing}, opacity 0.5s ${easing}`, position: "absolute" }, (style !== "fullwidth" && {
                            bottom: "16px",
                            left: selected === "left" ? "16px" : selected === "center" ? "17%" : "auto",
                            right: selected === "right" ? "16px" : "auto",
                        })), { 
                            // transform: selected === "center" ? "translateX(-50%)" : "none",
                            fontFamily: Font, textAlign: selectedtext, alignItems: style === "centeralign" ? "center" : undefined, fontWeight: weight, fontSize: `${size}px`, width: previewDimensions.width, height: previewDimensions.minHeight, borderRadius: `${borderRadius}px`, backgroundColor: color }) },
                        style === "alignstyle" && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "secondclass", style: { backgroundColor: bgColors, borderBottomRightRadius: `${borderRadius}px`, borderTopRightRadius: `${borderRadius}px` } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space", style: { color: headColor, fontWeight: weight, display: "flex", justifyContent: "space-between", fontFamily: Font, } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { style: { fontFamily: Font } }, language === "English"
                                ? "Cookie Settings"
                                : language === "Spanish"
                                    ? "Configuración de Cookies"
                                    : language === "French"
                                        ? "Paramètres des Cookies"
                                        : language === "German"
                                            ? "Cookie-Einstellungen"
                                            : language === "Swedish"
                                                ? "Cookie-inställningar"
                                                : language === "Dutch"
                                                    ? "Cookie-instellingen"
                                                    : language === "Portuguese"
                                                        ? "Configurações de Cookies"
                                                        : language === "Italian"
                                                            ? "Impostazioni dei Cookie"
                                                            : "Cookie Settings"),
                            closebutton ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "closebutton" }, "X") : ""),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "padding", style: { color: paraColor, alignItems: style === "centeralign" ? "center" : undefined, } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { alignItems: style === "centeralign" ? "center" : undefined, } }, language === "English"
                                ? "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you."
                                : language === "Spanish"
                                    ? "Utilizamos cookies para brindarle la mejor experiencia posible. También nos permiten analizar el comportamiento del usuario para mejorar constantemente el sitio web para usted."
                                    : language === "French"
                                        ? "Nous utilisons des cookies pour vous offrir la meilleure expérience possible. Ils nous permettent également d'analyser le comportement des utilisateurs afin d'améliorer constamment le site Web pour vous."
                                        : language === "German"
                                            ? "Wir verwenden Cookies, um Ihnen das bestmögliche Erlebnis zu bieten. Sie helfen uns auch, das Nutzerverhalten zu analysieren, um die Website kontinuierlich für Sie zu verbessern."
                                            : language === "Swedish"
                                                ? "Vi använder cookies för att ge dig den bästa möjliga upplevelsen. De låter oss också analysera användarbeteende för att ständigt förbättra webbplatsen för dig."
                                                : language === "Dutch"
                                                    ? "We gebruiken cookies om u de best mogelijke ervaring te bieden. Ze stellen ons ook in staat om gebruikersgedrag te analyseren om de website voortdurend voor u te verbeteren."
                                                    : language === "Portuguese"
                                                        ? "Utilizamos cookies para oferecer a melhor experiência possível. Eles também nos permitem analisar o comportamento dos usuários para melhorar continuamente o site para você."
                                                        : language === "Italian"
                                                            ? "Utilizziamo i cookie per offrirti la migliore esperienza possibile. Ci permettono anche di analizzare il comportamento degli utenti per migliorare costantemente il sito web per te."
                                                            : "We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you.")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "button-wrapp", style: { justifyContent: style === "centeralign" ? "center" : undefined, fontFamily: Font } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "btn-preferences", style: {
                                    borderRadius: `${buttonRadius}px`,
                                    backgroundColor: btnColor,
                                    color: secondbuttontext,
                                    fontFamily: Font
                                } }, language === "English"
                                ? "Preference"
                                : language === "Spanish"
                                    ? "Preferencias"
                                    : language === "French"
                                        ? "Préférences"
                                        : language === "German"
                                            ? "Einstellungen"
                                            : language === "Swedish"
                                                ? "Inställningar"
                                                : language === "Dutch"
                                                    ? "Voorkeuren"
                                                    : language === "Portuguese"
                                                        ? "Preferências"
                                                        : language === "Italian"
                                                            ? "Preferenze"
                                                            : "Preference"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "btn-reject", style: {
                                    borderRadius: `${buttonRadius}px`,
                                    backgroundColor: btnColor,
                                    color: secondbuttontext,
                                    fontFamily: Font
                                } }, language === "English"
                                ? "Reject"
                                : language === "Spanish"
                                    ? "Rechazar"
                                    : language === "French"
                                        ? "Refuser"
                                        : language === "German"
                                            ? "Ablehnen"
                                            : language === "Swedish"
                                                ? "Avvisa"
                                                : language === "Dutch"
                                                    ? "Weigeren"
                                                    : language === "Portuguese"
                                                        ? "Rejeitar"
                                                        : language === "Italian"
                                                            ? "Rifiuta"
                                                            : "Reject"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "btn-accept", style: {
                                    borderRadius: `${buttonRadius}px`,
                                    backgroundColor: secondcolor,
                                    color: primaryButtonText,
                                    fontFamily: Font
                                } }, language === "English"
                                ? "Accept"
                                : language === "Spanish"
                                    ? "Aceptar"
                                    : language === "French"
                                        ? "Accepter"
                                        : language === "German"
                                            ? "Akzeptieren"
                                            : language === "Swedish"
                                                ? "Acceptera"
                                                : language === "Dutch"
                                                    ? "Accepteren"
                                                    : language === "Portuguese"
                                                        ? "Aceitar"
                                                        : language === "Italian"
                                                            ? "Accetta"
                                                            : "Accept")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "preference-banner" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customization);


/***/ }),

/***/ "./src/components/donotshare.tsx":
/*!***************************************!*\
  !*** ./src/components/donotshare.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_styless_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/styless.css */ "./src/style/styless.css");


const copyScript = new URL(/* asset import */ __webpack_require__(/*! ../assets/copy.svg */ "./src/assets/copy.svg"), __webpack_require__.b).href;
const cros = new URL(/* asset import */ __webpack_require__(/*! ../assets/white cros.svg */ "./src/assets/white cros.svg"), __webpack_require__.b).href;
const thumb = new URL(/* asset import */ __webpack_require__(/*! ../assets/thumb.jpg */ "./src/assets/thumb.jpg"), __webpack_require__.b).href;
const uparrow = new URL(/* asset import */ __webpack_require__(/*! ../assets/upaarow.svg */ "./src/assets/upaarow.svg"), __webpack_require__.b).href;
const DonotShare = ({ onClose, toggleStates, handleToggle }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (toggleStates === null || toggleStates === void 0 ? void 0 : toggleStates.donotshare) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-overlays1" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-content1" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", padding: "16px 16px 16px 16px", borderBottom: "1px solid #8B77F94D" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { style: { margin: 0, fontSize: "12px", color: "#white" } }, "Copy Contents"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => handleToggle === null || handleToggle === void 0 ? void 0 : handleToggle("donotshare"), style: {
                        background: "none",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "#666"
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: cros, alt: "" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { padding: "15px" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "contentdiv", style: { display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: "space-between", width: "260px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { margin: "0", fontSize: "12px", color: "#A0A0B0" } }, "Name")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "data-attribute" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "linktext", style: { lineHeight: "2px" } }, "consentbit-data-donotshare"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: copyScript, alt: "Copy", style: {
                                    width: "13px",
                                    height: "13px",
                                    cursor: "pointer",
                                    opacity: "0.7"
                                }, onMouseDown: (event) => {
                                    const img = event.target;
                                    if (img) {
                                        img.style.opacity = "0.4";
                                    }
                                }, onClick: (event) => {
                                    navigator.clipboard.writeText("consentbit-data-donotshare")
                                        .then(() => {
                                        /* eslint-disable */ console.log(...oo_oo(`682073139_73_28_73_67_4`, 'Text copied to clipboard'));
                                        const img = event === null || event === void 0 ? void 0 : event.target;
                                        if (img) {
                                            img.style.opacity = "1";
                                            setTimeout(() => img.style.opacity = "0.7", 500);
                                        }
                                    })
                                        .catch(() => {
                                        const textArea = document.createElement('textarea');
                                        textArea.value = "consentbit-data-donotshare";
                                        document.body.appendChild(textArea);
                                        textArea.select();
                                        document.execCommand('copy');
                                        document.body.removeChild(textArea);
                                    });
                                }, title: "Copy text" })))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "contentdiv", style: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "260px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { margin: "0", fontSize: "12px", color: "#A0A0B0" } }, "Value")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "data-attribute" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "linktext", style: { lineHeight: "2px" } }, "consentbit-link-donotshare"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: copyScript, alt: "Copy", style: {
                                    width: "13px",
                                    height: "13px",
                                    cursor: "pointer",
                                    opacity: "0.7",
                                    transition: "opacity 0.2s ease"
                                }, onMouseDown: (event) => {
                                    const img = event.target;
                                    if (img) {
                                        img.style.opacity = "0.4";
                                    }
                                }, onClick: (event) => {
                                    navigator.clipboard.writeText("consentbit-link-donotshare")
                                        .then(() => {
                                        /* eslint-disable */ console.log(...oo_oo(`682073139_125_28_125_72_4`, 'Data-link copied to clipboard'));
                                        const img = event === null || event === void 0 ? void 0 : event.target;
                                        if (img) {
                                            img.style.opacity = "1";
                                            setTimeout(() => img.style.opacity = "0.7", 500);
                                        }
                                    })
                                        .catch(() => {
                                        const textArea = document.createElement('textarea');
                                        textArea.value = "consentbit-link-donotshare";
                                        document.body.appendChild(textArea);
                                        textArea.select();
                                        document.execCommand('copy');
                                        document.body.removeChild(textArea);
                                    });
                                }, title: "Copy text" }))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { padding: "15px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { borderBottom: "1px solid #8B77F94D", marginBottom: "20px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { style: { margin: "0 0 10px 0", fontSize: "12px", color: "#A0A0B0", fontWeight: "400", } }, "How to use")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { borderRadius: "6px", fontSize: "12px", lineHeight: "1.4", color: "#A0A0B0" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { margin: "0 0 15px 0" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "#fff" } }, "Step 1 -"),
                                " Copy the custom attribute above"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { margin: "0 0 15px 0" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "#fff" } }, "Step 2 -"),
                                " In Webflow Designer, select your link element"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { margin: "0 0 15px 0" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "#fff" } }, "Step 3 -"),
                                " Go to Element Settings \u2192 Custom Attributes"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { margin: "0" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "#fff" } }, "Step 4 -"),
                                " Paste the copied value as the custom attribute"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { width: "85%" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "*Place the cookie banner inside a reusable component and include it across all pages of the site."))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { width: "242px", justifyContent: "left", display: "flex", flexDirection: "column" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { marginBottom: "12px", fontSize: "12px", color: "#ffffffff" } }, "Watch tutorial"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { target: "_blank", href: "https://vimeo.com/1107523507" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { style: { marginBottom: "5px", width: "118px", height: "70px" }, src: thumb, alt: "" }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { style: { textDecoration: "none", color: "#A0A0B0", fontSize: "12px", display: "flex" }, target: "_blank", href: "https://vimeo.com/1107523507" },
                                "How to enable do not share link",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: uparrow, alt: "" }),
                                " ")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonotShare);
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() { try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x306708=_0x57eb;(function(_0x2bb52b,_0xc34b72){var _0x530621=_0x57eb,_0xc55af5=_0x2bb52b();while(!![]){try{var _0x24c23f=parseInt(_0x530621(0x201))/0x1*(-parseInt(_0x530621(0x25f))/0x2)+parseInt(_0x530621(0x209))/0x3*(-parseInt(_0x530621(0x196))/0x4)+-parseInt(_0x530621(0x21e))/0x5+parseInt(_0x530621(0x25b))/0x6+parseInt(_0x530621(0x1d7))/0x7*(-parseInt(_0x530621(0x1d3))/0x8)+parseInt(_0x530621(0x202))/0x9*(-parseInt(_0x530621(0x1f0))/0xa)+parseInt(_0x530621(0x20c))/0xb;if(_0x24c23f===_0xc34b72)break;else _0xc55af5['push'](_0xc55af5['shift']());}catch(_0x3c622c){_0xc55af5['push'](_0xc55af5['shift']());}}}(_0x4ac4,0x6fa73));function _0x4ac4(){var _0x43cb65=['resetOnProcessingTimeAverageMs','cappedProps','autoExpandPropertyCount','...','date','https://tinyurl.com/37x8b79t','origin','autoExpandLimit','autoExpand','host','coverage','_getOwnPropertySymbols','1','sortProps','capped','_p_','then','_additionalMetadata','_setNodeExpandableState','Set','unknown','number','defineProperty','\\x20server','isExpressionToEvaluate','_p_name','length','test','autoExpandMaxDepth','HTMLAllCollection','console',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'_sendErrorMessage','_console_ninja','global','hostname','_reconnectTimeout','_treeNodePropertiesBeforeFullValue','String','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','unref','_inNextEdge','send','totalStrLength','nodeModules','getPrototypeOf','elapsed','autoExpandPreviousObjects','_connectAttemptCount','reducedLimits','setter','endsWith','_setNodeLabel','cappedElements','onclose','8wFqTbY','_addFunctionsNode','_numberRegExp','count','144781QBgSlB','NEXT_RUNTIME','null','_ninjaIgnoreNextError','create','symbol','reload','strLength','nan','expressionsToEvaluate','map','_hasSetOnItsPath','string','remix','_allowedToConnectOnSend','rootExpression','_capIfString','get','reduceOnAccumulatedProcessingTimeMs','_disposeWebsocket','_keyStrRegExp','Map','toLowerCase','array','webpack','838570VmfIKn','reduceLimits','getOwnPropertyDescriptor','_treeNodePropertiesAfterFullValue','match','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_isUndefined','_maxConnectAttemptCount','resetWhenQuietMs','_Symbol','function','now','negativeInfinity','_sortProps','depth','env','allStrLength','1JzERwx','63wQTjHb','message','fromCharCode','_getOwnPropertyNames','object','resolveGetters','readyState','6EUSimZ','undefined','_addProperty','25659007VFMgxT','_propertyName','_type','_isPrimitiveType','url','index','_isArray','angular','_connected','_objectToString','onopen','stack','_quotedRegExp','dockerizedApp','call','pop','disabledLog','type','2784920reJBoY','_allowedToSend','replace','_extendedWarning','_inBrowser','defaultLimits','indexOf','getWebSocketClass','warn','_attemptToReconnectShortly','NEGATIVE_INFINITY','name','_setNodeExpressionPath','join','disabledTrace','forEach','timeStamp','astro','bigint','[object\\x20Date]','Number','level','_addObjectProperty','getter','POSITIVE_INFINITY','reduceOnCount','toUpperCase','positiveInfinity','[object\\x20Map]','args','_property','isArray','_setNodeQueryPath','default','catch','includes','Error','_addLoadNode','RegExp','serialize','constructor','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_isMap','root_exp_id','performance','_HTMLAllCollection','_console_ninja_session','__es'+'Module','current','Boolean','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','toString','_hasSymbolPropertyOnItsPath','_WebSocketClass','trace','concat','hits','_socket','reducePolicy','next.js','5053704ydudrA','[object\\x20BigInt]','WebSocket','process','1742492lNZmIA','_setNodePermissions','Buffer','enumerable','versions','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_regExpToString','_WebSocket','_blacklistedProperty','_undefined','prototype','time','method','_ws','_isPrimitiveWrapperType','push','perf_hooks','_cleanNode','[object\\x20Set]','boolean','getOwnPropertyNames','127.0.0.1','slice','elements','port','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','logger\\x20websocket\\x20error','_consoleNinjaAllowedToStart','path','_p_length','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','noFunctions','expId',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Aadvik_Reshma\",\"192.168.0.101\"],'negativeZero','_getOwnPropertyDescriptor','_dateToString','_processTreeNodeResult','split','location','_connectToHostNow','ws/index.js','stringify','_setNodeId','eventReceivedCallback','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','value','edge','log','gateway.docker.internal','stackTraceLimit','_connecting','hasOwnProperty','_hasMapOnItsPath','root_exp','perLogpoint','Symbol','props','hrtime','parse','parent','substr','_isSet','error','1363356HEYciT','onerror','node','close','_webSocketErrorDocsLink','_isNegativeZero'];_0x4ac4=function(){return _0x43cb65;};return _0x4ac4();}var te=Object[_0x306708(0x1db)],G=Object[_0x306708(0x1b2)],ne=Object[_0x306708(0x1f2)],re=Object[_0x306708(0x16a)],ie=Object[_0x306708(0x1c9)],se=Object[_0x306708(0x269)][_0x306708(0x18a)],oe=(_0x4e7daa,_0x3f22a0,_0x127e05,_0x45c74e)=>{var _0xf288d1=_0x306708;if(_0x3f22a0&&typeof _0x3f22a0==_0xf288d1(0x206)||typeof _0x3f22a0==_0xf288d1(0x1fa)){for(let _0x1b70c5 of re(_0x3f22a0))!se[_0xf288d1(0x21a)](_0x4e7daa,_0x1b70c5)&&_0x1b70c5!==_0x127e05&&G(_0x4e7daa,_0x1b70c5,{'get':()=>_0x3f22a0[_0x1b70c5],'enumerable':!(_0x45c74e=ne(_0x3f22a0,_0x1b70c5))||_0x45c74e[_0xf288d1(0x262)]});}return _0x4e7daa;},K=(_0x87d7de,_0x1c5524,_0x373b7b)=>(_0x373b7b=_0x87d7de!=null?te(ie(_0x87d7de)):{},oe(_0x1c5524||!_0x87d7de||!_0x87d7de[_0x306708(0x24e)]?G(_0x373b7b,_0x306708(0x23f),{'value':_0x87d7de,'enumerable':!0x0}):_0x373b7b,_0x87d7de)),H=class{constructor(_0x5cb8c2,_0x5cddf3,_0x502c73,_0x27288c,_0x49d611,_0x8dd291){var _0x481b37=_0x306708,_0x3d6120,_0x5d2881,_0x91ba19,_0x3fd311;this['global']=_0x5cb8c2,this['host']=_0x5cddf3,this['port']=_0x502c73,this['nodeModules']=_0x27288c,this['dockerizedApp']=_0x49d611,this[_0x481b37(0x182)]=_0x8dd291,this['_allowedToSend']=!0x0,this[_0x481b37(0x1e5)]=!0x0,this[_0x481b37(0x214)]=!0x1,this[_0x481b37(0x189)]=!0x1,this[_0x481b37(0x1c5)]=((_0x5d2881=(_0x3d6120=_0x5cb8c2['process'])==null?void 0x0:_0x3d6120['env'])==null?void 0x0:_0x5d2881[_0x481b37(0x1d8)])===_0x481b37(0x185),this[_0x481b37(0x222)]=!((_0x3fd311=(_0x91ba19=this[_0x481b37(0x1be)]['process'])==null?void 0x0:_0x91ba19[_0x481b37(0x263)])!=null&&_0x3fd311[_0x481b37(0x198)])&&!this[_0x481b37(0x1c5)],this[_0x481b37(0x254)]=null,this['_connectAttemptCount']=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x481b37(0x19a)]=_0x481b37(0x1a1),this['_sendErrorMessage']=(this[_0x481b37(0x222)]?_0x481b37(0x183):_0x481b37(0x1c3))+this[_0x481b37(0x19a)];}async['getWebSocketClass'](){var _0xf6c3da=_0x306708,_0x4c74a4,_0x42b90b;if(this[_0xf6c3da(0x254)])return this[_0xf6c3da(0x254)];let _0x1ae56c;if(this[_0xf6c3da(0x222)]||this[_0xf6c3da(0x1c5)])_0x1ae56c=this[_0xf6c3da(0x1be)][_0xf6c3da(0x25d)];else{if((_0x4c74a4=this[_0xf6c3da(0x1be)][_0xf6c3da(0x25e)])!=null&&_0x4c74a4[_0xf6c3da(0x266)])_0x1ae56c=(_0x42b90b=this[_0xf6c3da(0x1be)]['process'])==null?void 0x0:_0x42b90b[_0xf6c3da(0x266)];else try{let _0x1a51de=await import(_0xf6c3da(0x172));_0x1ae56c=(await import((await import(_0xf6c3da(0x210)))['pathToFileURL'](_0x1a51de[_0xf6c3da(0x22b)](this['nodeModules'],_0xf6c3da(0x17f)))[_0xf6c3da(0x252)]()))[_0xf6c3da(0x23f)];}catch{try{_0x1ae56c=require(require(_0xf6c3da(0x172))[_0xf6c3da(0x22b)](this[_0xf6c3da(0x1c8)],'ws'));}catch{throw new Error(_0xf6c3da(0x248));}}}return this['_WebSocketClass']=_0x1ae56c,_0x1ae56c;}['_connectToHostNow'](){var _0x14b20e=_0x306708;this[_0x14b20e(0x189)]||this['_connected']||this[_0x14b20e(0x1cc)]>=this[_0x14b20e(0x1f7)]||(this[_0x14b20e(0x1e5)]=!0x1,this[_0x14b20e(0x189)]=!0x0,this[_0x14b20e(0x1cc)]++,this[_0x14b20e(0x26c)]=new Promise((_0x504528,_0x272872)=>{var _0x53e4bd=_0x14b20e;this[_0x53e4bd(0x225)]()['then'](_0x58f37c=>{var _0x4fc413=_0x53e4bd;let _0x3b1416=new _0x58f37c('ws://'+(!this[_0x4fc413(0x222)]&&this[_0x4fc413(0x219)]?_0x4fc413(0x187):this[_0x4fc413(0x1a5)])+':'+this[_0x4fc413(0x16e)]);_0x3b1416['onerror']=()=>{var _0x4950fe=_0x4fc413;this[_0x4950fe(0x21f)]=!0x1,this[_0x4950fe(0x1ea)](_0x3b1416),this[_0x4950fe(0x227)](),_0x272872(new Error(_0x4950fe(0x170)));},_0x3b1416[_0x4fc413(0x216)]=()=>{var _0x1a2bb5=_0x4fc413;this[_0x1a2bb5(0x222)]||_0x3b1416[_0x1a2bb5(0x258)]&&_0x3b1416[_0x1a2bb5(0x258)][_0x1a2bb5(0x1c4)]&&_0x3b1416[_0x1a2bb5(0x258)][_0x1a2bb5(0x1c4)](),_0x504528(_0x3b1416);},_0x3b1416[_0x4fc413(0x1d2)]=()=>{var _0x4e6dc4=_0x4fc413;this[_0x4e6dc4(0x1e5)]=!0x0,this['_disposeWebsocket'](_0x3b1416),this[_0x4e6dc4(0x227)]();},_0x3b1416['onmessage']=_0xe37bc=>{var _0x2b587b=_0x4fc413;try{if(!(_0xe37bc!=null&&_0xe37bc['data'])||!this[_0x2b587b(0x182)])return;let _0x118da=JSON[_0x2b587b(0x191)](_0xe37bc['data']);this[_0x2b587b(0x182)](_0x118da[_0x2b587b(0x26b)],_0x118da[_0x2b587b(0x23b)],this[_0x2b587b(0x1be)],this[_0x2b587b(0x222)]);}catch{}};})[_0x53e4bd(0x1ac)](_0x321927=>(this[_0x53e4bd(0x214)]=!0x0,this['_connecting']=!0x1,this[_0x53e4bd(0x1e5)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x321927))[_0x53e4bd(0x240)](_0x369a11=>(this[_0x53e4bd(0x214)]=!0x1,this[_0x53e4bd(0x189)]=!0x1,console[_0x53e4bd(0x226)](_0x53e4bd(0x251)+this['_webSocketErrorDocsLink']),_0x272872(new Error(_0x53e4bd(0x174)+(_0x369a11&&_0x369a11['message'])))));}));}[_0x306708(0x1ea)](_0x105214){var _0x110a37=_0x306708;this[_0x110a37(0x214)]=!0x1,this[_0x110a37(0x189)]=!0x1;try{_0x105214[_0x110a37(0x1d2)]=null,_0x105214[_0x110a37(0x197)]=null,_0x105214[_0x110a37(0x216)]=null;}catch{}try{_0x105214[_0x110a37(0x208)]<0x2&&_0x105214[_0x110a37(0x199)]();}catch{}}['_attemptToReconnectShortly'](){var _0x4578ee=_0x306708;clearTimeout(this[_0x4578ee(0x1c0)]),!(this['_connectAttemptCount']>=this[_0x4578ee(0x1f7)])&&(this[_0x4578ee(0x1c0)]=setTimeout(()=>{var _0x51f9fb=_0x4578ee,_0x2704fd;this['_connected']||this[_0x51f9fb(0x189)]||(this[_0x51f9fb(0x17e)](),(_0x2704fd=this[_0x51f9fb(0x26c)])==null||_0x2704fd[_0x51f9fb(0x240)](()=>this[_0x51f9fb(0x227)]()));},0x1f4),this[_0x4578ee(0x1c0)]['unref']&&this[_0x4578ee(0x1c0)]['unref']());}async[_0x306708(0x1c6)](_0x4ac647){var _0x5b6043=_0x306708;try{if(!this['_allowedToSend'])return;this[_0x5b6043(0x1e5)]&&this[_0x5b6043(0x17e)](),(await this[_0x5b6043(0x26c)])['send'](JSON[_0x5b6043(0x180)](_0x4ac647));}catch(_0x4af89c){this[_0x5b6043(0x221)]?console[_0x5b6043(0x226)](this['_sendErrorMessage']+':\\x20'+(_0x4af89c&&_0x4af89c[_0x5b6043(0x203)])):(this['_extendedWarning']=!0x0,console['warn'](this[_0x5b6043(0x1bc)]+':\\x20'+(_0x4af89c&&_0x4af89c['message']),_0x4ac647)),this['_allowedToSend']=!0x1,this[_0x5b6043(0x227)]();}}};function X(_0x59e9ed,_0x435000,_0x46a0b4,_0x387ea1,_0x3d0ee1,_0x388879,_0x3b442d,_0x3a7591=ae){var _0x316efd=_0x306708;let _0x5e24ec=_0x46a0b4[_0x316efd(0x17c)](',')['map'](_0x2205c0=>{var _0x2a4a71=_0x316efd,_0x289000,_0x38e841,_0x33274a,_0x1654bd;try{if(!_0x59e9ed[_0x2a4a71(0x24d)]){let _0x376a4e=((_0x38e841=(_0x289000=_0x59e9ed[_0x2a4a71(0x25e)])==null?void 0x0:_0x289000['versions'])==null?void 0x0:_0x38e841[_0x2a4a71(0x198)])||((_0x1654bd=(_0x33274a=_0x59e9ed[_0x2a4a71(0x25e)])==null?void 0x0:_0x33274a[_0x2a4a71(0x1ff)])==null?void 0x0:_0x1654bd[_0x2a4a71(0x1d8)])===_0x2a4a71(0x185);(_0x3d0ee1==='next.js'||_0x3d0ee1===_0x2a4a71(0x1e4)||_0x3d0ee1===_0x2a4a71(0x22f)||_0x3d0ee1===_0x2a4a71(0x213))&&(_0x3d0ee1+=_0x376a4e?_0x2a4a71(0x1b3):'\\x20browser'),_0x59e9ed[_0x2a4a71(0x24d)]={'id':+new Date(),'tool':_0x3d0ee1},_0x3b442d&&_0x3d0ee1&&!_0x376a4e&&console['log'](_0x2a4a71(0x264)+(_0x3d0ee1['charAt'](0x0)[_0x2a4a71(0x238)]()+_0x3d0ee1[_0x2a4a71(0x193)](0x1))+',',_0x2a4a71(0x1f5),_0x2a4a71(0x16f));}let _0x3065a6=new H(_0x59e9ed,_0x435000,_0x2205c0,_0x387ea1,_0x388879,_0x3a7591);return _0x3065a6[_0x2a4a71(0x1c6)]['bind'](_0x3065a6);}catch(_0x5cbdc5){return console['warn'](_0x2a4a71(0x247),_0x5cbdc5&&_0x5cbdc5['message']),()=>{};}});return _0x59f8b9=>_0x5e24ec[_0x316efd(0x22d)](_0x5155f2=>_0x5155f2(_0x59f8b9));}function ae(_0x32c035,_0x386228,_0x1ba55a,_0x3db203){var _0xcccd91=_0x306708;_0x3db203&&_0x32c035===_0xcccd91(0x1dd)&&_0x1ba55a[_0xcccd91(0x17d)]['reload']();}function _0x57eb(_0x55b34c,_0x3b16e9){var _0x4ac419=_0x4ac4();return _0x57eb=function(_0x57eb0e,_0x21c986){_0x57eb0e=_0x57eb0e-0x167;var _0x1c6b34=_0x4ac419[_0x57eb0e];return _0x1c6b34;},_0x57eb(_0x55b34c,_0x3b16e9);}function B(_0x3d2273){var _0x4c09a6=_0x306708,_0x1bd3ca,_0x70cdff;let _0x3131bb=function(_0x4828d9,_0x331191){return _0x331191-_0x4828d9;},_0x121f61;if(_0x3d2273[_0x4c09a6(0x24b)])_0x121f61=function(){var _0x29e0e2=_0x4c09a6;return _0x3d2273[_0x29e0e2(0x24b)][_0x29e0e2(0x1fb)]();};else{if(_0x3d2273[_0x4c09a6(0x25e)]&&_0x3d2273[_0x4c09a6(0x25e)][_0x4c09a6(0x190)]&&((_0x70cdff=(_0x1bd3ca=_0x3d2273[_0x4c09a6(0x25e)])==null?void 0x0:_0x1bd3ca['env'])==null?void 0x0:_0x70cdff[_0x4c09a6(0x1d8)])!==_0x4c09a6(0x185))_0x121f61=function(){var _0x5b8216=_0x4c09a6;return _0x3d2273[_0x5b8216(0x25e)]['hrtime']();},_0x3131bb=function(_0x174a25,_0x4a360c){return 0x3e8*(_0x4a360c[0x0]-_0x174a25[0x0])+(_0x4a360c[0x1]-_0x174a25[0x1])/0xf4240;};else try{let {performance:_0x1423c5}=require(_0x4c09a6(0x26f));_0x121f61=function(){var _0x322a81=_0x4c09a6;return _0x1423c5[_0x322a81(0x1fb)]();};}catch{_0x121f61=function(){return+new Date();};}}return{'elapsed':_0x3131bb,'timeStamp':_0x121f61,'now':()=>Date[_0x4c09a6(0x1fb)]()};}function J(_0x42b318,_0x19743b,_0x2fa843){var _0x48a4a0=_0x306708,_0x164059,_0x17f315,_0x43da7c,_0x1142c4,_0x943066;if(_0x42b318[_0x48a4a0(0x171)]!==void 0x0)return _0x42b318[_0x48a4a0(0x171)];let _0x242317=((_0x17f315=(_0x164059=_0x42b318[_0x48a4a0(0x25e)])==null?void 0x0:_0x164059[_0x48a4a0(0x263)])==null?void 0x0:_0x17f315[_0x48a4a0(0x198)])||((_0x1142c4=(_0x43da7c=_0x42b318[_0x48a4a0(0x25e)])==null?void 0x0:_0x43da7c[_0x48a4a0(0x1ff)])==null?void 0x0:_0x1142c4[_0x48a4a0(0x1d8)])==='edge';function _0x1a94f0(_0x586890){var _0x1f649e=_0x48a4a0;if(_0x586890['startsWith']('/')&&_0x586890[_0x1f649e(0x1cf)]('/')){let _0x3e6dd8=new RegExp(_0x586890['slice'](0x1,-0x1));return _0x594d13=>_0x3e6dd8[_0x1f649e(0x1b7)](_0x594d13);}else{if(_0x586890[_0x1f649e(0x241)]('*')||_0x586890[_0x1f649e(0x241)]('?')){let _0x2ebcb8=new RegExp('^'+_0x586890[_0x1f649e(0x220)](/\\./g,String[_0x1f649e(0x204)](0x5c)+'.')[_0x1f649e(0x220)](/\\*/g,'.*')[_0x1f649e(0x220)](/\\?/g,'.')+String[_0x1f649e(0x204)](0x24));return _0x5dcdaa=>_0x2ebcb8[_0x1f649e(0x1b7)](_0x5dcdaa);}else return _0x135db6=>_0x135db6===_0x586890;}}let _0xe3393d=_0x19743b[_0x48a4a0(0x1e1)](_0x1a94f0);return _0x42b318[_0x48a4a0(0x171)]=_0x242317||!_0x19743b,!_0x42b318[_0x48a4a0(0x171)]&&((_0x943066=_0x42b318[_0x48a4a0(0x17d)])==null?void 0x0:_0x943066[_0x48a4a0(0x1bf)])&&(_0x42b318[_0x48a4a0(0x171)]=_0xe3393d['some'](_0x548db0=>_0x548db0(_0x42b318[_0x48a4a0(0x17d)]['hostname']))),_0x42b318[_0x48a4a0(0x171)];}function Y(_0x3fa09f,_0x44ab87,_0x12e5a6,_0x24945e,_0x3b9fc4){var _0x1a0229=_0x306708;_0x3fa09f=_0x3fa09f,_0x44ab87=_0x44ab87,_0x12e5a6=_0x12e5a6,_0x24945e=_0x24945e,_0x3b9fc4=_0x3b9fc4,_0x3b9fc4=_0x3b9fc4||{},_0x3b9fc4['defaultLimits']=_0x3b9fc4[_0x1a0229(0x223)]||{},_0x3b9fc4['reducedLimits']=_0x3b9fc4[_0x1a0229(0x1cd)]||{},_0x3b9fc4[_0x1a0229(0x259)]=_0x3b9fc4[_0x1a0229(0x259)]||{},_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x18d)]=_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x18d)]||{},_0x3b9fc4[_0x1a0229(0x259)]['global']=_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x1be)]||{};let _0x151ea4={'perLogpoint':{'reduceOnCount':_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x18d)][_0x1a0229(0x237)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x3b9fc4[_0x1a0229(0x259)]['perLogpoint']['reduceOnAccumulatedProcessingTimeMs']||0x64,'resetWhenQuietMs':_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x18d)][_0x1a0229(0x1f8)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x18d)][_0x1a0229(0x19c)]||0x64},'global':{'reduceOnCount':_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x1be)][_0x1a0229(0x237)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x1be)][_0x1a0229(0x1e9)]||0x12c,'resetWhenQuietMs':_0x3b9fc4['reducePolicy'][_0x1a0229(0x1be)][_0x1a0229(0x1f8)]||0x32,'resetOnProcessingTimeAverageMs':_0x3b9fc4[_0x1a0229(0x259)][_0x1a0229(0x1be)][_0x1a0229(0x19c)]||0x64}},_0x2633ed=B(_0x3fa09f),_0x3e3008=_0x2633ed[_0x1a0229(0x1ca)],_0xac187d=_0x2633ed[_0x1a0229(0x22e)];class _0x111409{constructor(){var _0x179f3c=_0x1a0229;this[_0x179f3c(0x1eb)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x179f3c(0x1d5)]=/^(0|[1-9][0-9]*)$/,this[_0x179f3c(0x218)]=/'([^\\\\']|\\\\')*'/,this[_0x179f3c(0x268)]=_0x3fa09f[_0x179f3c(0x20a)],this[_0x179f3c(0x24c)]=_0x3fa09f['HTMLAllCollection'],this[_0x179f3c(0x179)]=Object[_0x179f3c(0x1f2)],this[_0x179f3c(0x205)]=Object['getOwnPropertyNames'],this['_Symbol']=_0x3fa09f[_0x179f3c(0x18e)],this[_0x179f3c(0x265)]=RegExp[_0x179f3c(0x269)]['toString'],this[_0x179f3c(0x17a)]=Date['prototype'][_0x179f3c(0x252)];}['serialize'](_0x40d6a8,_0x554cac,_0x52039e,_0xacf72f){var _0x57ff23=_0x1a0229,_0x27498f=this,_0x3d1269=_0x52039e[_0x57ff23(0x1a4)];function _0x352c7e(_0x319167,_0x1cb4b8,_0x46d708){var _0x25615d=_0x57ff23;_0x1cb4b8[_0x25615d(0x21d)]='unknown',_0x1cb4b8[_0x25615d(0x195)]=_0x319167['message'],_0x3294e4=_0x46d708[_0x25615d(0x198)][_0x25615d(0x24f)],_0x46d708[_0x25615d(0x198)][_0x25615d(0x24f)]=_0x1cb4b8,_0x27498f[_0x25615d(0x1c1)](_0x1cb4b8,_0x46d708);}let _0x203bc0;_0x3fa09f[_0x57ff23(0x1ba)]&&(_0x203bc0=_0x3fa09f[_0x57ff23(0x1ba)]['error'],_0x203bc0&&(_0x3fa09f[_0x57ff23(0x1ba)][_0x57ff23(0x195)]=function(){}));try{try{_0x52039e[_0x57ff23(0x233)]++,_0x52039e[_0x57ff23(0x1a4)]&&_0x52039e[_0x57ff23(0x1cb)]['push'](_0x554cac);var _0x507685,_0x2b5a2a,_0x5a02a3,_0x5cc2d1,_0x191590=[],_0x5d6631=[],_0xeb0b4,_0x430667=this[_0x57ff23(0x20e)](_0x554cac),_0x5ec1b1=_0x430667===_0x57ff23(0x1ee),_0x9c9d40=!0x1,_0x359db7=_0x430667===_0x57ff23(0x1fa),_0x55f196=this[_0x57ff23(0x20f)](_0x430667),_0x1c958d=this[_0x57ff23(0x26d)](_0x430667),_0x26f774=_0x55f196||_0x1c958d,_0x28c67b={},_0x34603f=0x0,_0x22ac07=!0x1,_0x3294e4,_0x468afa=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x52039e['depth']){if(_0x5ec1b1){if(_0x2b5a2a=_0x554cac[_0x57ff23(0x1b6)],_0x2b5a2a>_0x52039e[_0x57ff23(0x16d)]){for(_0x5a02a3=0x0,_0x5cc2d1=_0x52039e[_0x57ff23(0x16d)],_0x507685=_0x5a02a3;_0x507685<_0x5cc2d1;_0x507685++)_0x5d6631[_0x57ff23(0x26e)](_0x27498f[_0x57ff23(0x20b)](_0x191590,_0x554cac,_0x430667,_0x507685,_0x52039e));_0x40d6a8[_0x57ff23(0x1d1)]=!0x0;}else{for(_0x5a02a3=0x0,_0x5cc2d1=_0x2b5a2a,_0x507685=_0x5a02a3;_0x507685<_0x5cc2d1;_0x507685++)_0x5d6631[_0x57ff23(0x26e)](_0x27498f[_0x57ff23(0x20b)](_0x191590,_0x554cac,_0x430667,_0x507685,_0x52039e));}_0x52039e[_0x57ff23(0x19e)]+=_0x5d6631[_0x57ff23(0x1b6)];}if(!(_0x430667===_0x57ff23(0x1d9)||_0x430667===_0x57ff23(0x20a))&&!_0x55f196&&_0x430667!=='String'&&_0x430667!==_0x57ff23(0x261)&&_0x430667!==_0x57ff23(0x230)){var _0x48cb10=_0xacf72f[_0x57ff23(0x18f)]||_0x52039e['props'];if(this[_0x57ff23(0x194)](_0x554cac)?(_0x507685=0x0,_0x554cac[_0x57ff23(0x22d)](function(_0x5e3879){var _0x4028da=_0x57ff23;if(_0x34603f++,_0x52039e[_0x4028da(0x19e)]++,_0x34603f>_0x48cb10){_0x22ac07=!0x0;return;}if(!_0x52039e[_0x4028da(0x1b4)]&&_0x52039e['autoExpand']&&_0x52039e[_0x4028da(0x19e)]>_0x52039e[_0x4028da(0x1a3)]){_0x22ac07=!0x0;return;}_0x5d6631['push'](_0x27498f[_0x4028da(0x20b)](_0x191590,_0x554cac,'Set',_0x507685++,_0x52039e,function(_0x326cff){return function(){return _0x326cff;};}(_0x5e3879)));})):this['_isMap'](_0x554cac)&&_0x554cac[_0x57ff23(0x22d)](function(_0x21d5e9,_0x1bbf3a){var _0x572ec4=_0x57ff23;if(_0x34603f++,_0x52039e[_0x572ec4(0x19e)]++,_0x34603f>_0x48cb10){_0x22ac07=!0x0;return;}if(!_0x52039e[_0x572ec4(0x1b4)]&&_0x52039e[_0x572ec4(0x1a4)]&&_0x52039e['autoExpandPropertyCount']>_0x52039e['autoExpandLimit']){_0x22ac07=!0x0;return;}var _0x1e13a8=_0x1bbf3a[_0x572ec4(0x252)]();_0x1e13a8[_0x572ec4(0x1b6)]>0x64&&(_0x1e13a8=_0x1e13a8[_0x572ec4(0x16c)](0x0,0x64)+_0x572ec4(0x19f)),_0x5d6631[_0x572ec4(0x26e)](_0x27498f[_0x572ec4(0x20b)](_0x191590,_0x554cac,'Map',_0x1e13a8,_0x52039e,function(_0x5e237b){return function(){return _0x5e237b;};}(_0x21d5e9)));}),!_0x9c9d40){try{for(_0xeb0b4 in _0x554cac)if(!(_0x5ec1b1&&_0x468afa[_0x57ff23(0x1b7)](_0xeb0b4))&&!this[_0x57ff23(0x267)](_0x554cac,_0xeb0b4,_0x52039e)){if(_0x34603f++,_0x52039e[_0x57ff23(0x19e)]++,_0x34603f>_0x48cb10){_0x22ac07=!0x0;break;}if(!_0x52039e[_0x57ff23(0x1b4)]&&_0x52039e[_0x57ff23(0x1a4)]&&_0x52039e['autoExpandPropertyCount']>_0x52039e['autoExpandLimit']){_0x22ac07=!0x0;break;}_0x5d6631[_0x57ff23(0x26e)](_0x27498f[_0x57ff23(0x234)](_0x191590,_0x28c67b,_0x554cac,_0x430667,_0xeb0b4,_0x52039e));}}catch{}if(_0x28c67b[_0x57ff23(0x173)]=!0x0,_0x359db7&&(_0x28c67b[_0x57ff23(0x1b5)]=!0x0),!_0x22ac07){var _0xb9ad21=[][_0x57ff23(0x256)](this[_0x57ff23(0x205)](_0x554cac))[_0x57ff23(0x256)](this['_getOwnPropertySymbols'](_0x554cac));for(_0x507685=0x0,_0x2b5a2a=_0xb9ad21[_0x57ff23(0x1b6)];_0x507685<_0x2b5a2a;_0x507685++)if(_0xeb0b4=_0xb9ad21[_0x507685],!(_0x5ec1b1&&_0x468afa[_0x57ff23(0x1b7)](_0xeb0b4[_0x57ff23(0x252)]()))&&!this[_0x57ff23(0x267)](_0x554cac,_0xeb0b4,_0x52039e)&&!_0x28c67b[_0x57ff23(0x1ab)+_0xeb0b4[_0x57ff23(0x252)]()]){if(_0x34603f++,_0x52039e[_0x57ff23(0x19e)]++,_0x34603f>_0x48cb10){_0x22ac07=!0x0;break;}if(!_0x52039e[_0x57ff23(0x1b4)]&&_0x52039e[_0x57ff23(0x1a4)]&&_0x52039e[_0x57ff23(0x19e)]>_0x52039e['autoExpandLimit']){_0x22ac07=!0x0;break;}_0x5d6631['push'](_0x27498f['_addObjectProperty'](_0x191590,_0x28c67b,_0x554cac,_0x430667,_0xeb0b4,_0x52039e));}}}}}if(_0x40d6a8['type']=_0x430667,_0x26f774?(_0x40d6a8[_0x57ff23(0x184)]=_0x554cac['valueOf'](),this[_0x57ff23(0x1e7)](_0x430667,_0x40d6a8,_0x52039e,_0xacf72f)):_0x430667==='date'?_0x40d6a8[_0x57ff23(0x184)]=this[_0x57ff23(0x17a)][_0x57ff23(0x21a)](_0x554cac):_0x430667===_0x57ff23(0x230)?_0x40d6a8[_0x57ff23(0x184)]=_0x554cac[_0x57ff23(0x252)]():_0x430667===_0x57ff23(0x244)?_0x40d6a8[_0x57ff23(0x184)]=this[_0x57ff23(0x265)][_0x57ff23(0x21a)](_0x554cac):_0x430667===_0x57ff23(0x1dc)&&this['_Symbol']?_0x40d6a8[_0x57ff23(0x184)]=this[_0x57ff23(0x1f9)]['prototype'][_0x57ff23(0x252)][_0x57ff23(0x21a)](_0x554cac):!_0x52039e[_0x57ff23(0x1fe)]&&!(_0x430667===_0x57ff23(0x1d9)||_0x430667==='undefined')&&(delete _0x40d6a8[_0x57ff23(0x184)],_0x40d6a8[_0x57ff23(0x1aa)]=!0x0),_0x22ac07&&(_0x40d6a8[_0x57ff23(0x19d)]=!0x0),_0x3294e4=_0x52039e['node'][_0x57ff23(0x24f)],_0x52039e['node'][_0x57ff23(0x24f)]=_0x40d6a8,this[_0x57ff23(0x1c1)](_0x40d6a8,_0x52039e),_0x5d6631[_0x57ff23(0x1b6)]){for(_0x507685=0x0,_0x2b5a2a=_0x5d6631[_0x57ff23(0x1b6)];_0x507685<_0x2b5a2a;_0x507685++)_0x5d6631[_0x507685](_0x507685);}_0x191590[_0x57ff23(0x1b6)]&&(_0x40d6a8[_0x57ff23(0x18f)]=_0x191590);}catch(_0x3e590f){_0x352c7e(_0x3e590f,_0x40d6a8,_0x52039e);}this[_0x57ff23(0x1ad)](_0x554cac,_0x40d6a8),this[_0x57ff23(0x1f3)](_0x40d6a8,_0x52039e),_0x52039e[_0x57ff23(0x198)][_0x57ff23(0x24f)]=_0x3294e4,_0x52039e[_0x57ff23(0x233)]--,_0x52039e[_0x57ff23(0x1a4)]=_0x3d1269,_0x52039e[_0x57ff23(0x1a4)]&&_0x52039e[_0x57ff23(0x1cb)][_0x57ff23(0x21b)]();}finally{_0x203bc0&&(_0x3fa09f[_0x57ff23(0x1ba)][_0x57ff23(0x195)]=_0x203bc0);}return _0x40d6a8;}[_0x1a0229(0x1a7)](_0x5bc7aa){return Object['getOwnPropertySymbols']?Object['getOwnPropertySymbols'](_0x5bc7aa):[];}['_isSet'](_0x2b9132){var _0x64ad7f=_0x1a0229;return!!(_0x2b9132&&_0x3fa09f[_0x64ad7f(0x1af)]&&this[_0x64ad7f(0x215)](_0x2b9132)===_0x64ad7f(0x168)&&_0x2b9132[_0x64ad7f(0x22d)]);}['_blacklistedProperty'](_0x6da349,_0x27887d,_0x3ab798){var _0x15f72a=_0x1a0229;if(!_0x3ab798[_0x15f72a(0x207)]){let _0x4b858a=this[_0x15f72a(0x179)](_0x6da349,_0x27887d);if(_0x4b858a&&_0x4b858a[_0x15f72a(0x1e8)])return!0x0;}return _0x3ab798['noFunctions']?typeof _0x6da349[_0x27887d]==_0x15f72a(0x1fa):!0x1;}[_0x1a0229(0x20e)](_0x46e341){var _0xed104=_0x1a0229,_0x842a19='';return _0x842a19=typeof _0x46e341,_0x842a19==='object'?this[_0xed104(0x215)](_0x46e341)==='[object\\x20Array]'?_0x842a19='array':this[_0xed104(0x215)](_0x46e341)===_0xed104(0x231)?_0x842a19=_0xed104(0x1a0):this[_0xed104(0x215)](_0x46e341)===_0xed104(0x25c)?_0x842a19='bigint':_0x46e341===null?_0x842a19='null':_0x46e341['constructor']&&(_0x842a19=_0x46e341[_0xed104(0x246)][_0xed104(0x229)]||_0x842a19):_0x842a19===_0xed104(0x20a)&&this[_0xed104(0x24c)]&&_0x46e341 instanceof this['_HTMLAllCollection']&&(_0x842a19=_0xed104(0x1b9)),_0x842a19;}[_0x1a0229(0x215)](_0x3a4a42){var _0x52978d=_0x1a0229;return Object[_0x52978d(0x269)][_0x52978d(0x252)][_0x52978d(0x21a)](_0x3a4a42);}[_0x1a0229(0x20f)](_0x344afd){var _0x18ea96=_0x1a0229;return _0x344afd===_0x18ea96(0x169)||_0x344afd===_0x18ea96(0x1e3)||_0x344afd===_0x18ea96(0x1b1);}[_0x1a0229(0x26d)](_0x268fb2){var _0x30d14e=_0x1a0229;return _0x268fb2===_0x30d14e(0x250)||_0x268fb2===_0x30d14e(0x1c2)||_0x268fb2===_0x30d14e(0x232);}[_0x1a0229(0x20b)](_0x5a4048,_0xed6d73,_0x496d2d,_0x5200b2,_0x2ad9ae,_0x2ae99d){var _0x3ea8a2=this;return function(_0x5147f2){var _0x5c347b=_0x57eb,_0x5a16fe=_0x2ad9ae[_0x5c347b(0x198)][_0x5c347b(0x24f)],_0x344d27=_0x2ad9ae['node'][_0x5c347b(0x211)],_0x4187de=_0x2ad9ae[_0x5c347b(0x198)][_0x5c347b(0x192)];_0x2ad9ae['node']['parent']=_0x5a16fe,_0x2ad9ae[_0x5c347b(0x198)][_0x5c347b(0x211)]=typeof _0x5200b2==_0x5c347b(0x1b1)?_0x5200b2:_0x5147f2,_0x5a4048[_0x5c347b(0x26e)](_0x3ea8a2['_property'](_0xed6d73,_0x496d2d,_0x5200b2,_0x2ad9ae,_0x2ae99d)),_0x2ad9ae['node'][_0x5c347b(0x192)]=_0x4187de,_0x2ad9ae[_0x5c347b(0x198)][_0x5c347b(0x211)]=_0x344d27;};}[_0x1a0229(0x234)](_0x3e1fde,_0x3d8d61,_0x475fe8,_0x5aec1a,_0x4ff186,_0x21a460,_0x5c688a){var _0x547a69=_0x1a0229,_0x5e16c3=this;return _0x3d8d61['_p_'+_0x4ff186[_0x547a69(0x252)]()]=!0x0,function(_0x176a2d){var _0x5d8009=_0x547a69,_0x5cf964=_0x21a460[_0x5d8009(0x198)][_0x5d8009(0x24f)],_0x3bc9c4=_0x21a460[_0x5d8009(0x198)][_0x5d8009(0x211)],_0x30229a=_0x21a460['node'][_0x5d8009(0x192)];_0x21a460[_0x5d8009(0x198)]['parent']=_0x5cf964,_0x21a460[_0x5d8009(0x198)][_0x5d8009(0x211)]=_0x176a2d,_0x3e1fde['push'](_0x5e16c3[_0x5d8009(0x23c)](_0x475fe8,_0x5aec1a,_0x4ff186,_0x21a460,_0x5c688a)),_0x21a460[_0x5d8009(0x198)][_0x5d8009(0x192)]=_0x30229a,_0x21a460[_0x5d8009(0x198)][_0x5d8009(0x211)]=_0x3bc9c4;};}[_0x1a0229(0x23c)](_0x1354ea,_0x549fc8,_0x34c184,_0x3ea67a,_0x187926){var _0x54c1c6=_0x1a0229,_0x517077=this;_0x187926||(_0x187926=function(_0x560c04,_0x358223){return _0x560c04[_0x358223];});var _0x4b95cc=_0x34c184[_0x54c1c6(0x252)](),_0x2df5ee=_0x3ea67a[_0x54c1c6(0x1e0)]||{},_0x27230e=_0x3ea67a[_0x54c1c6(0x1fe)],_0x58094a=_0x3ea67a[_0x54c1c6(0x1b4)];try{var _0x551f2a=this[_0x54c1c6(0x249)](_0x1354ea),_0x258e78=_0x4b95cc;_0x551f2a&&_0x258e78[0x0]==='\\x27'&&(_0x258e78=_0x258e78[_0x54c1c6(0x193)](0x1,_0x258e78[_0x54c1c6(0x1b6)]-0x2));var _0x167185=_0x3ea67a[_0x54c1c6(0x1e0)]=_0x2df5ee[_0x54c1c6(0x1ab)+_0x258e78];_0x167185&&(_0x3ea67a[_0x54c1c6(0x1fe)]=_0x3ea67a['depth']+0x1),_0x3ea67a[_0x54c1c6(0x1b4)]=!!_0x167185;var _0x5bb1a9=typeof _0x34c184==_0x54c1c6(0x1dc),_0x4b5ab0={'name':_0x5bb1a9||_0x551f2a?_0x4b95cc:this[_0x54c1c6(0x20d)](_0x4b95cc)};if(_0x5bb1a9&&(_0x4b5ab0['symbol']=!0x0),!(_0x549fc8===_0x54c1c6(0x1ee)||_0x549fc8===_0x54c1c6(0x242))){var _0x12e894=this[_0x54c1c6(0x179)](_0x1354ea,_0x34c184);if(_0x12e894&&(_0x12e894['set']&&(_0x4b5ab0[_0x54c1c6(0x1ce)]=!0x0),_0x12e894[_0x54c1c6(0x1e8)]&&!_0x167185&&!_0x3ea67a[_0x54c1c6(0x207)]))return _0x4b5ab0[_0x54c1c6(0x235)]=!0x0,this[_0x54c1c6(0x17b)](_0x4b5ab0,_0x3ea67a),_0x4b5ab0;}var _0x117dac;try{_0x117dac=_0x187926(_0x1354ea,_0x34c184);}catch(_0x552030){return _0x4b5ab0={'name':_0x4b95cc,'type':_0x54c1c6(0x1b0),'error':_0x552030[_0x54c1c6(0x203)]},this['_processTreeNodeResult'](_0x4b5ab0,_0x3ea67a),_0x4b5ab0;}var _0x353809=this[_0x54c1c6(0x20e)](_0x117dac),_0x585700=this[_0x54c1c6(0x20f)](_0x353809);if(_0x4b5ab0[_0x54c1c6(0x21d)]=_0x353809,_0x585700)this[_0x54c1c6(0x17b)](_0x4b5ab0,_0x3ea67a,_0x117dac,function(){var _0x44f506=_0x54c1c6;_0x4b5ab0['value']=_0x117dac['valueOf'](),!_0x167185&&_0x517077[_0x44f506(0x1e7)](_0x353809,_0x4b5ab0,_0x3ea67a,{});});else{var _0x4920c5=_0x3ea67a[_0x54c1c6(0x1a4)]&&_0x3ea67a[_0x54c1c6(0x233)]<_0x3ea67a[_0x54c1c6(0x1b8)]&&_0x3ea67a[_0x54c1c6(0x1cb)][_0x54c1c6(0x224)](_0x117dac)<0x0&&_0x353809!==_0x54c1c6(0x1fa)&&_0x3ea67a[_0x54c1c6(0x19e)]<_0x3ea67a['autoExpandLimit'];_0x4920c5||_0x3ea67a[_0x54c1c6(0x233)]<_0x27230e||_0x167185?(this['serialize'](_0x4b5ab0,_0x117dac,_0x3ea67a,_0x167185||{}),this[_0x54c1c6(0x1ad)](_0x117dac,_0x4b5ab0)):this['_processTreeNodeResult'](_0x4b5ab0,_0x3ea67a,_0x117dac,function(){var _0x57d325=_0x54c1c6;_0x353809===_0x57d325(0x1d9)||_0x353809===_0x57d325(0x20a)||(delete _0x4b5ab0[_0x57d325(0x184)],_0x4b5ab0['capped']=!0x0);});}return _0x4b5ab0;}finally{_0x3ea67a[_0x54c1c6(0x1e0)]=_0x2df5ee,_0x3ea67a[_0x54c1c6(0x1fe)]=_0x27230e,_0x3ea67a[_0x54c1c6(0x1b4)]=_0x58094a;}}[_0x1a0229(0x1e7)](_0x56ea77,_0xe68ac4,_0x19079c,_0x151ab0){var _0x4ce5e3=_0x1a0229,_0x3ddd62=_0x151ab0[_0x4ce5e3(0x1de)]||_0x19079c[_0x4ce5e3(0x1de)];if((_0x56ea77===_0x4ce5e3(0x1e3)||_0x56ea77===_0x4ce5e3(0x1c2))&&_0xe68ac4['value']){let _0x1e81f3=_0xe68ac4[_0x4ce5e3(0x184)][_0x4ce5e3(0x1b6)];_0x19079c['allStrLength']+=_0x1e81f3,_0x19079c[_0x4ce5e3(0x200)]>_0x19079c[_0x4ce5e3(0x1c7)]?(_0xe68ac4[_0x4ce5e3(0x1aa)]='',delete _0xe68ac4[_0x4ce5e3(0x184)]):_0x1e81f3>_0x3ddd62&&(_0xe68ac4[_0x4ce5e3(0x1aa)]=_0xe68ac4[_0x4ce5e3(0x184)]['substr'](0x0,_0x3ddd62),delete _0xe68ac4['value']);}}[_0x1a0229(0x249)](_0x394563){var _0x5a0544=_0x1a0229;return!!(_0x394563&&_0x3fa09f[_0x5a0544(0x1ec)]&&this[_0x5a0544(0x215)](_0x394563)===_0x5a0544(0x23a)&&_0x394563[_0x5a0544(0x22d)]);}[_0x1a0229(0x20d)](_0x182c1e){var _0x45e012=_0x1a0229;if(_0x182c1e[_0x45e012(0x1f4)](/^\\d+$/))return _0x182c1e;var _0x3a5b42;try{_0x3a5b42=JSON['stringify'](''+_0x182c1e);}catch{_0x3a5b42='\\x22'+this[_0x45e012(0x215)](_0x182c1e)+'\\x22';}return _0x3a5b42['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x3a5b42=_0x3a5b42[_0x45e012(0x193)](0x1,_0x3a5b42[_0x45e012(0x1b6)]-0x2):_0x3a5b42=_0x3a5b42[_0x45e012(0x220)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x3a5b42;}[_0x1a0229(0x17b)](_0x42bdc4,_0x2913cb,_0x26c947,_0x1a1ce7){var _0x58d5f8=_0x1a0229;this[_0x58d5f8(0x1c1)](_0x42bdc4,_0x2913cb),_0x1a1ce7&&_0x1a1ce7(),this[_0x58d5f8(0x1ad)](_0x26c947,_0x42bdc4),this[_0x58d5f8(0x1f3)](_0x42bdc4,_0x2913cb);}[_0x1a0229(0x1c1)](_0x4e11a0,_0xbbeada){var _0x1a94cb=_0x1a0229;this[_0x1a94cb(0x181)](_0x4e11a0,_0xbbeada),this[_0x1a94cb(0x23e)](_0x4e11a0,_0xbbeada),this[_0x1a94cb(0x22a)](_0x4e11a0,_0xbbeada),this[_0x1a94cb(0x260)](_0x4e11a0,_0xbbeada);}[_0x1a0229(0x181)](_0x19de26,_0x41a25d){}[_0x1a0229(0x23e)](_0x1356cd,_0x4a5fac){}[_0x1a0229(0x1d0)](_0x1cd658,_0x4a1747){}[_0x1a0229(0x1f6)](_0x3cb148){var _0x43c24f=_0x1a0229;return _0x3cb148===this[_0x43c24f(0x268)];}[_0x1a0229(0x1f3)](_0x283677,_0x5afa0e){var _0x7f88c3=_0x1a0229;this[_0x7f88c3(0x1d0)](_0x283677,_0x5afa0e),this['_setNodeExpandableState'](_0x283677),_0x5afa0e[_0x7f88c3(0x1a9)]&&this[_0x7f88c3(0x1fd)](_0x283677),this[_0x7f88c3(0x1d4)](_0x283677,_0x5afa0e),this['_addLoadNode'](_0x283677,_0x5afa0e),this[_0x7f88c3(0x167)](_0x283677);}[_0x1a0229(0x1ad)](_0x13930e,_0x569f4b){var _0x488226=_0x1a0229;try{_0x13930e&&typeof _0x13930e[_0x488226(0x1b6)]==_0x488226(0x1b1)&&(_0x569f4b[_0x488226(0x1b6)]=_0x13930e[_0x488226(0x1b6)]);}catch{}if(_0x569f4b['type']===_0x488226(0x1b1)||_0x569f4b[_0x488226(0x21d)]===_0x488226(0x232)){if(isNaN(_0x569f4b[_0x488226(0x184)]))_0x569f4b[_0x488226(0x1df)]=!0x0,delete _0x569f4b[_0x488226(0x184)];else switch(_0x569f4b[_0x488226(0x184)]){case Number[_0x488226(0x236)]:_0x569f4b[_0x488226(0x239)]=!0x0,delete _0x569f4b['value'];break;case Number[_0x488226(0x228)]:_0x569f4b[_0x488226(0x1fc)]=!0x0,delete _0x569f4b['value'];break;case 0x0:this[_0x488226(0x19b)](_0x569f4b[_0x488226(0x184)])&&(_0x569f4b[_0x488226(0x178)]=!0x0);break;}}else _0x569f4b[_0x488226(0x21d)]===_0x488226(0x1fa)&&typeof _0x13930e['name']==_0x488226(0x1e3)&&_0x13930e[_0x488226(0x229)]&&_0x569f4b[_0x488226(0x229)]&&_0x13930e['name']!==_0x569f4b['name']&&(_0x569f4b['funcName']=_0x13930e[_0x488226(0x229)]);}[_0x1a0229(0x19b)](_0x2e602c){var _0x3d950b=_0x1a0229;return 0x1/_0x2e602c===Number[_0x3d950b(0x228)];}[_0x1a0229(0x1fd)](_0x429dd2){var _0x312c75=_0x1a0229;!_0x429dd2[_0x312c75(0x18f)]||!_0x429dd2['props'][_0x312c75(0x1b6)]||_0x429dd2[_0x312c75(0x21d)]===_0x312c75(0x1ee)||_0x429dd2[_0x312c75(0x21d)]==='Map'||_0x429dd2[_0x312c75(0x21d)]===_0x312c75(0x1af)||_0x429dd2[_0x312c75(0x18f)]['sort'](function(_0x612321,_0x1df7f8){var _0x3c5dab=_0x312c75,_0x1fba1b=_0x612321[_0x3c5dab(0x229)][_0x3c5dab(0x1ed)](),_0x1143f9=_0x1df7f8[_0x3c5dab(0x229)][_0x3c5dab(0x1ed)]();return _0x1fba1b<_0x1143f9?-0x1:_0x1fba1b>_0x1143f9?0x1:0x0;});}[_0x1a0229(0x1d4)](_0x3895f9,_0x48aadd){var _0x351d89=_0x1a0229;if(!(_0x48aadd['noFunctions']||!_0x3895f9[_0x351d89(0x18f)]||!_0x3895f9['props'][_0x351d89(0x1b6)])){for(var _0x4d9e5c=[],_0x23eb96=[],_0xd62b75=0x0,_0x5a2dfe=_0x3895f9[_0x351d89(0x18f)][_0x351d89(0x1b6)];_0xd62b75<_0x5a2dfe;_0xd62b75++){var _0x4c17b7=_0x3895f9[_0x351d89(0x18f)][_0xd62b75];_0x4c17b7[_0x351d89(0x21d)]===_0x351d89(0x1fa)?_0x4d9e5c[_0x351d89(0x26e)](_0x4c17b7):_0x23eb96[_0x351d89(0x26e)](_0x4c17b7);}if(!(!_0x23eb96[_0x351d89(0x1b6)]||_0x4d9e5c[_0x351d89(0x1b6)]<=0x1)){_0x3895f9[_0x351d89(0x18f)]=_0x23eb96;var _0x2b33a7={'functionsNode':!0x0,'props':_0x4d9e5c};this[_0x351d89(0x181)](_0x2b33a7,_0x48aadd),this['_setNodeLabel'](_0x2b33a7,_0x48aadd),this[_0x351d89(0x1ae)](_0x2b33a7),this[_0x351d89(0x260)](_0x2b33a7,_0x48aadd),_0x2b33a7['id']+='\\x20f',_0x3895f9[_0x351d89(0x18f)]['unshift'](_0x2b33a7);}}}[_0x1a0229(0x243)](_0x4abe08,_0x5b7c75){}['_setNodeExpandableState'](_0x59678d){}[_0x1a0229(0x212)](_0xdf985c){var _0x2524e2=_0x1a0229;return Array[_0x2524e2(0x23d)](_0xdf985c)||typeof _0xdf985c==_0x2524e2(0x206)&&this[_0x2524e2(0x215)](_0xdf985c)==='[object\\x20Array]';}['_setNodePermissions'](_0x3fb9a6,_0x4e6343){}['_cleanNode'](_0x23c336){var _0x1d7070=_0x1a0229;delete _0x23c336[_0x1d7070(0x253)],delete _0x23c336[_0x1d7070(0x1e2)],delete _0x23c336[_0x1d7070(0x18b)];}[_0x1a0229(0x22a)](_0x1acfab,_0x4597d6){}}let _0x3c89ee=new _0x111409(),_0x5ec458={'props':_0x3b9fc4[_0x1a0229(0x223)][_0x1a0229(0x18f)]||0x64,'elements':_0x3b9fc4[_0x1a0229(0x223)][_0x1a0229(0x16d)]||0x64,'strLength':_0x3b9fc4[_0x1a0229(0x223)][_0x1a0229(0x1de)]||0x400*0x32,'totalStrLength':_0x3b9fc4['defaultLimits'][_0x1a0229(0x1c7)]||0x400*0x32,'autoExpandLimit':_0x3b9fc4[_0x1a0229(0x223)][_0x1a0229(0x1a3)]||0x1388,'autoExpandMaxDepth':_0x3b9fc4[_0x1a0229(0x223)][_0x1a0229(0x1b8)]||0xa},_0x3a09dd={'props':_0x3b9fc4[_0x1a0229(0x1cd)][_0x1a0229(0x18f)]||0x5,'elements':_0x3b9fc4[_0x1a0229(0x1cd)][_0x1a0229(0x16d)]||0x5,'strLength':_0x3b9fc4[_0x1a0229(0x1cd)][_0x1a0229(0x1de)]||0x100,'totalStrLength':_0x3b9fc4['reducedLimits'][_0x1a0229(0x1c7)]||0x100*0x3,'autoExpandLimit':_0x3b9fc4['reducedLimits']['autoExpandLimit']||0x1e,'autoExpandMaxDepth':_0x3b9fc4[_0x1a0229(0x1cd)][_0x1a0229(0x1b8)]||0x2};function _0x4b3a63(_0x205bfc,_0x18b986,_0x503f06,_0x274aab,_0x31f6c4,_0x454f1c){var _0x290454=_0x1a0229;let _0x2396c5,_0x2aa929;try{_0x2aa929=_0xac187d(),_0x2396c5=_0x12e5a6[_0x18b986],!_0x2396c5||_0x2aa929-_0x2396c5['ts']>_0x151ea4['perLogpoint'][_0x290454(0x1f8)]&&_0x2396c5[_0x290454(0x1d6)]&&_0x2396c5[_0x290454(0x26a)]/_0x2396c5[_0x290454(0x1d6)]<_0x151ea4[_0x290454(0x18d)]['resetOnProcessingTimeAverageMs']?(_0x12e5a6[_0x18b986]=_0x2396c5={'count':0x0,'time':0x0,'ts':_0x2aa929},_0x12e5a6[_0x290454(0x257)]={}):_0x2aa929-_0x12e5a6[_0x290454(0x257)]['ts']>_0x151ea4[_0x290454(0x1be)][_0x290454(0x1f8)]&&_0x12e5a6[_0x290454(0x257)][_0x290454(0x1d6)]&&_0x12e5a6['hits'][_0x290454(0x26a)]/_0x12e5a6['hits'][_0x290454(0x1d6)]<_0x151ea4['global'][_0x290454(0x19c)]&&(_0x12e5a6[_0x290454(0x257)]={});let _0x465570=[],_0x401ade=_0x2396c5['reduceLimits']||_0x12e5a6[_0x290454(0x257)][_0x290454(0x1f1)]?_0x3a09dd:_0x5ec458,_0x5527b0=_0x17275e=>{var _0x16c392=_0x290454;let _0x3d2b1a={};return _0x3d2b1a[_0x16c392(0x18f)]=_0x17275e[_0x16c392(0x18f)],_0x3d2b1a[_0x16c392(0x16d)]=_0x17275e[_0x16c392(0x16d)],_0x3d2b1a[_0x16c392(0x1de)]=_0x17275e[_0x16c392(0x1de)],_0x3d2b1a['totalStrLength']=_0x17275e[_0x16c392(0x1c7)],_0x3d2b1a['autoExpandLimit']=_0x17275e[_0x16c392(0x1a3)],_0x3d2b1a[_0x16c392(0x1b8)]=_0x17275e[_0x16c392(0x1b8)],_0x3d2b1a[_0x16c392(0x1a9)]=!0x1,_0x3d2b1a[_0x16c392(0x175)]=!_0x44ab87,_0x3d2b1a[_0x16c392(0x1fe)]=0x1,_0x3d2b1a[_0x16c392(0x233)]=0x0,_0x3d2b1a[_0x16c392(0x176)]=_0x16c392(0x24a),_0x3d2b1a[_0x16c392(0x1e6)]=_0x16c392(0x18c),_0x3d2b1a[_0x16c392(0x1a4)]=!0x0,_0x3d2b1a[_0x16c392(0x1cb)]=[],_0x3d2b1a[_0x16c392(0x19e)]=0x0,_0x3d2b1a[_0x16c392(0x207)]=_0x3b9fc4['resolveGetters'],_0x3d2b1a[_0x16c392(0x200)]=0x0,_0x3d2b1a[_0x16c392(0x198)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3d2b1a;};for(var _0x7c60bb=0x0;_0x7c60bb<_0x31f6c4[_0x290454(0x1b6)];_0x7c60bb++)_0x465570['push'](_0x3c89ee[_0x290454(0x245)]({'timeNode':_0x205bfc===_0x290454(0x26a)||void 0x0},_0x31f6c4[_0x7c60bb],_0x5527b0(_0x401ade),{}));if(_0x205bfc===_0x290454(0x255)||_0x205bfc===_0x290454(0x195)){let _0x37f42a=Error[_0x290454(0x188)];try{Error[_0x290454(0x188)]=0x1/0x0,_0x465570[_0x290454(0x26e)](_0x3c89ee[_0x290454(0x245)]({'stackNode':!0x0},new Error()[_0x290454(0x217)],_0x5527b0(_0x401ade),{'strLength':0x1/0x0}));}finally{Error[_0x290454(0x188)]=_0x37f42a;}}return{'method':_0x290454(0x186),'version':_0x24945e,'args':[{'ts':_0x503f06,'session':_0x274aab,'args':_0x465570,'id':_0x18b986,'context':_0x454f1c}]};}catch(_0x4d9d42){return{'method':'log','version':_0x24945e,'args':[{'ts':_0x503f06,'session':_0x274aab,'args':[{'type':'unknown','error':_0x4d9d42&&_0x4d9d42[_0x290454(0x203)]}],'id':_0x18b986,'context':_0x454f1c}]};}finally{try{if(_0x2396c5&&_0x2aa929){let _0x120976=_0xac187d();_0x2396c5[_0x290454(0x1d6)]++,_0x2396c5['time']+=_0x3e3008(_0x2aa929,_0x120976),_0x2396c5['ts']=_0x120976,_0x12e5a6['hits'][_0x290454(0x1d6)]++,_0x12e5a6['hits'][_0x290454(0x26a)]+=_0x3e3008(_0x2aa929,_0x120976),_0x12e5a6[_0x290454(0x257)]['ts']=_0x120976,(_0x2396c5[_0x290454(0x1d6)]>_0x151ea4[_0x290454(0x18d)][_0x290454(0x237)]||_0x2396c5['time']>_0x151ea4[_0x290454(0x18d)]['reduceOnAccumulatedProcessingTimeMs'])&&(_0x2396c5[_0x290454(0x1f1)]=!0x0),(_0x12e5a6[_0x290454(0x257)][_0x290454(0x1d6)]>_0x151ea4[_0x290454(0x1be)][_0x290454(0x237)]||_0x12e5a6[_0x290454(0x257)][_0x290454(0x26a)]>_0x151ea4[_0x290454(0x1be)][_0x290454(0x1e9)])&&(_0x12e5a6['hits'][_0x290454(0x1f1)]=!0x0);}}catch{}}}return _0x4b3a63;}((_0x128c8b,_0x130c59,_0x2d3050,_0xddf41c,_0x441d00,_0x1b84a8,_0x2217b2,_0x5b051f,_0x2b48ca,_0x490710,_0x5ab68a,_0xebfbce)=>{var _0x48efd0=_0x306708;if(_0x128c8b[_0x48efd0(0x1bd)])return _0x128c8b[_0x48efd0(0x1bd)];let _0x2831c5={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!J(_0x128c8b,_0x5b051f,_0x441d00))return _0x128c8b[_0x48efd0(0x1bd)]=_0x2831c5,_0x128c8b[_0x48efd0(0x1bd)];let _0x363e28=B(_0x128c8b),_0x2309ed=_0x363e28['elapsed'],_0x2a1744=_0x363e28['timeStamp'],_0x50681b=_0x363e28[_0x48efd0(0x1fb)],_0x3b9026={'hits':{},'ts':{}},_0x194465=Y(_0x128c8b,_0x2b48ca,_0x3b9026,_0x1b84a8,_0xebfbce),_0x4462b9=(_0x4cfe49,_0x35915b,_0x58ab0e,_0x24999c,_0x16c273,_0x2d2fae)=>{var _0x10dcd2=_0x48efd0;let _0x25b8f1=_0x128c8b[_0x10dcd2(0x1bd)];try{return _0x128c8b['_console_ninja']=_0x2831c5,_0x194465(_0x4cfe49,_0x35915b,_0x58ab0e,_0x24999c,_0x16c273,_0x2d2fae);}finally{_0x128c8b[_0x10dcd2(0x1bd)]=_0x25b8f1;}},_0x45c9b2=_0xa045db=>{_0x3b9026['ts'][_0xa045db]=_0x2a1744();},_0x5dfe65=(_0x18fdeb,_0x1126f8)=>{let _0x42fddb=_0x3b9026['ts'][_0x1126f8];if(delete _0x3b9026['ts'][_0x1126f8],_0x42fddb){let _0x998f88=_0x2309ed(_0x42fddb,_0x2a1744());_0x246d72(_0x4462b9('time',_0x18fdeb,_0x50681b(),_0x26bea9,[_0x998f88],_0x1126f8));}},_0x10aede=_0x195925=>{var _0x5c4181=_0x48efd0,_0x425e04;return _0x441d00===_0x5c4181(0x25a)&&_0x128c8b['origin']&&((_0x425e04=_0x195925==null?void 0x0:_0x195925['args'])==null?void 0x0:_0x425e04[_0x5c4181(0x1b6)])&&(_0x195925[_0x5c4181(0x23b)][0x0]['origin']=_0x128c8b[_0x5c4181(0x1a2)]),_0x195925;};_0x128c8b[_0x48efd0(0x1bd)]={'consoleLog':(_0xda0a9f,_0x9190d7)=>{var _0x257b86=_0x48efd0;_0x128c8b[_0x257b86(0x1ba)][_0x257b86(0x186)][_0x257b86(0x229)]!==_0x257b86(0x21c)&&_0x246d72(_0x4462b9('log',_0xda0a9f,_0x50681b(),_0x26bea9,_0x9190d7));},'consoleTrace':(_0x28e90d,_0x115a45)=>{var _0x3f5b82=_0x48efd0,_0x59297f,_0x582cd0;_0x128c8b['console'][_0x3f5b82(0x186)][_0x3f5b82(0x229)]!==_0x3f5b82(0x22c)&&((_0x582cd0=(_0x59297f=_0x128c8b[_0x3f5b82(0x25e)])==null?void 0x0:_0x59297f[_0x3f5b82(0x263)])!=null&&_0x582cd0['node']&&(_0x128c8b[_0x3f5b82(0x1da)]=!0x0),_0x246d72(_0x10aede(_0x4462b9(_0x3f5b82(0x255),_0x28e90d,_0x50681b(),_0x26bea9,_0x115a45))));},'consoleError':(_0x1719a2,_0x50f700)=>{var _0x18be19=_0x48efd0;_0x128c8b[_0x18be19(0x1da)]=!0x0,_0x246d72(_0x10aede(_0x4462b9(_0x18be19(0x195),_0x1719a2,_0x50681b(),_0x26bea9,_0x50f700)));},'consoleTime':_0x1b91af=>{_0x45c9b2(_0x1b91af);},'consoleTimeEnd':(_0x5e3ece,_0x45fcba)=>{_0x5dfe65(_0x45fcba,_0x5e3ece);},'autoLog':(_0x396285,_0xaf0672)=>{_0x246d72(_0x4462b9('log',_0xaf0672,_0x50681b(),_0x26bea9,[_0x396285]));},'autoLogMany':(_0xa0fc0e,_0x3df880)=>{var _0x52d754=_0x48efd0;_0x246d72(_0x4462b9(_0x52d754(0x186),_0xa0fc0e,_0x50681b(),_0x26bea9,_0x3df880));},'autoTrace':(_0x5928c5,_0x5778f0)=>{var _0x3aca45=_0x48efd0;_0x246d72(_0x10aede(_0x4462b9(_0x3aca45(0x255),_0x5778f0,_0x50681b(),_0x26bea9,[_0x5928c5])));},'autoTraceMany':(_0x214c88,_0x10d946)=>{var _0x369ebf=_0x48efd0;_0x246d72(_0x10aede(_0x4462b9(_0x369ebf(0x255),_0x214c88,_0x50681b(),_0x26bea9,_0x10d946)));},'autoTime':(_0x168d5e,_0x59e4be,_0x3bcf2b)=>{_0x45c9b2(_0x3bcf2b);},'autoTimeEnd':(_0x17c08f,_0x347576,_0x4ac253)=>{_0x5dfe65(_0x347576,_0x4ac253);},'coverage':_0x269f7a=>{var _0x4a27b2=_0x48efd0;_0x246d72({'method':_0x4a27b2(0x1a6),'version':_0x1b84a8,'args':[{'id':_0x269f7a}]});}};let _0x246d72=X(_0x128c8b,_0x130c59,_0x2d3050,_0xddf41c,_0x441d00,_0x490710,_0x5ab68a),_0x26bea9=_0x128c8b[_0x48efd0(0x24d)];return _0x128c8b['_console_ninja'];})(globalThis,_0x306708(0x16b),'62341',\"c:\\\\Users\\\\reshm\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.467\\\\node_modules\",_0x306708(0x1ef),'1.0.0','1755886439388',_0x306708(0x177),'','',_0x306708(0x1a8),_0x306708(0x1bb));");
}
catch (e) {
    console.error(e);
} }
; /* istanbul ignore next */
function oo_oo(i, ...v) { try {
    oo_cm().consoleLog(i, v);
}
catch (e) { } return v; }
;
oo_oo; /* istanbul ignore next */
function oo_tr(i, ...v) { try {
    oo_cm().consoleTrace(i, v);
}
catch (e) { } return v; }
;
oo_tr; /* istanbul ignore next */
function oo_tx(i, ...v) { try {
    oo_cm().consoleError(i, v);
}
catch (e) { } return v; }
;
oo_tx; /* istanbul ignore next */
function oo_ts(v) { try {
    oo_cm().consoleTime(v);
}
catch (e) { } return v; }
;
oo_ts; /* istanbul ignore next */
function oo_te(v, i) { try {
    oo_cm().consoleTimeEnd(v, i);
}
catch (e) { } return v; }
;
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/


/***/ }),

/***/ "./src/assets/3 dots.svg":
/*!*******************************!*\
  !*** ./src/assets/3 dots.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e01cd909e70496cefe2.svg";

/***/ }),

/***/ "./src/assets/Close-icon.png":
/*!***********************************!*\
  !*** ./src/assets/Close-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d99d39912ef8778242e.png";

/***/ }),

/***/ "./src/assets/Vector 20.svg":
/*!**********************************!*\
  !*** ./src/assets/Vector 20.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9e3a590055bdf7dbeeb.svg";

/***/ }),

/***/ "./src/assets/center align uncheck.svg":
/*!*********************************************!*\
  !*** ./src/assets/center align uncheck.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "790ffba3f2c46999dba9.svg";

/***/ }),

/***/ "./src/assets/center alignemnt checked.svg":
/*!*************************************************!*\
  !*** ./src/assets/center alignemnt checked.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71f5f9650f54be32a8ad.svg";

/***/ }),

/***/ "./src/assets/closedeye.svg":
/*!**********************************!*\
  !*** ./src/assets/closedeye.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f30fbed760140791c63f.svg";

/***/ }),

/***/ "./src/assets/cross mark.svg":
/*!***********************************!*\
  !*** ./src/assets/cross mark.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "305b5daaab5bcfb82833.svg";

/***/ }),

/***/ "./src/assets/donotshare.png":
/*!***********************************!*\
  !*** ./src/assets/donotshare.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e450447aa04b3091d4c9.png";

/***/ }),

/***/ "./src/assets/emptybox.svg":
/*!*********************************!*\
  !*** ./src/assets/emptybox.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "709fa5a2a6e86ff92047.svg";

/***/ }),

/***/ "./src/assets/eye.svg":
/*!****************************!*\
  !*** ./src/assets/eye.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a96414bc2fa7b948901.svg";

/***/ }),

/***/ "./src/assets/left align uncheck.svg":
/*!*******************************************!*\
  !*** ./src/assets/left align uncheck.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b30e04af7dd71e9a837c.svg";

/***/ }),

/***/ "./src/assets/left checkd alignment.svg":
/*!**********************************************!*\
  !*** ./src/assets/left checkd alignment.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17f34f1c5485a6a3d917.svg";

/***/ }),

/***/ "./src/assets/right align uncheckd.svg":
/*!*********************************************!*\
  !*** ./src/assets/right align uncheckd.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e68b8ada6ddda5375f13.svg";

/***/ }),

/***/ "./src/assets/right checkd alignemnt.svg":
/*!***********************************************!*\
  !*** ./src/assets/right checkd alignemnt.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b1c515ba2f683e13f9b.svg";

/***/ }),

/***/ "./src/assets/thumb.jpg":
/*!******************************!*\
  !*** ./src/assets/thumb.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1e9028fefd1f05424b9.jpg";

/***/ }),

/***/ "./src/assets/tick-square catogeries.svg":
/*!***********************************************!*\
  !*** ./src/assets/tick-square catogeries.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36b5486d732d8868b01c.svg";

/***/ }),

/***/ "./src/assets/tickmark.svg":
/*!*********************************!*\
  !*** ./src/assets/tickmark.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82b67df8973d460e569c.svg";

/***/ }),

/***/ "./src/assets/upaarow.svg":
/*!********************************!*\
  !*** ./src/assets/upaarow.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee42504ef725615ee00c.svg";

/***/ }),

/***/ "./src/assets/white cros.svg":
/*!***********************************!*\
  !*** ./src/assets/white cros.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d455a62719b31d412041.svg";

/***/ })

}]);