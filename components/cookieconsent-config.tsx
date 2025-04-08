/* eslint-disable */
"use client";
import {useEffect} from "react";


// Service categories for GTM consent mode
const CAT_NECESSARY = "necessary";
const CAT_ANALYTICS = "analytics";
const CAT_ADVERTISEMENT = "advertisement";
const CAT_FUNCTIONALITY = "functionality";
const CAT_SECURITY = "security";

const SERVICE_AD_STORAGE = 'ad_storage';
const SERVICE_AD_USER_DATA = 'ad_user_data';
const SERVICE_AD_PERSONALIZATION = 'ad_personalization';
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage';
const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage';
const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage';
const SERVICE_SECURITY_STORAGE = 'security_storage';


// Define the CookieConsent types
declare global {
    interface Window {
        CookieConsent: any;
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

export function CookieConsentComponent() {
// Initialize GTM consent mode
    const initGTM = () => {
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
                window.dataLayer.push(arguments);
            };

            // Set default consent to 'denied'
            if (localStorage.getItem('consentMode') === null) {
                window.gtag('consent', 'default', {
                    [SERVICE_AD_STORAGE]: 'denied',
                    [SERVICE_AD_USER_DATA]: 'denied',
                    [SERVICE_AD_PERSONALIZATION]: 'denied',
                    [SERVICE_ANALYTICS_STORAGE]: 'denied',
                    [SERVICE_FUNCTIONALITY_STORAGE]: 'denied',
                    [SERVICE_PERSONALIZATION_STORAGE]: 'denied',
                    [SERVICE_SECURITY_STORAGE]: 'denied',
                });
            }
        }
    };

// Update GTM consent based on user preferences
    const updateGtagConsent = () => {
        const consentMode = {
            [SERVICE_ANALYTICS_STORAGE]: window.CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
            [SERVICE_AD_STORAGE]: window.CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
            [SERVICE_AD_USER_DATA]: window.CookieConsent.acceptedService(SERVICE_AD_USER_DATA, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
            [SERVICE_AD_PERSONALIZATION]: window.CookieConsent.acceptedService(SERVICE_AD_PERSONALIZATION, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
            [SERVICE_FUNCTIONALITY_STORAGE]: window.CookieConsent.acceptedService(SERVICE_FUNCTIONALITY_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
            [SERVICE_PERSONALIZATION_STORAGE]: window.CookieConsent.acceptedService(SERVICE_PERSONALIZATION_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
            [SERVICE_SECURITY_STORAGE]: window.CookieConsent.acceptedService(SERVICE_SECURITY_STORAGE, CAT_SECURITY) ? 'granted' : 'denied',
        };
        window.gtag('consent', 'update', consentMode);
        localStorage.setItem('consentMode', JSON.stringify(consentMode));
    };


    useEffect(() => {
        // Dynamically load the CookieConsent script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';
        script.async = true;
        script.onload = () => {
            initGTM();
            // Initialize cookie consent
            window.CookieConsent.run({
                onFirstConsent: updateGtagConsent,
                onConsent: updateGtagConsent,
                onChange: updateGtagConsent,
                cookie: {expiresAfterDays: 14},
                categories: {
                    [CAT_NECESSARY]: {enabled: true, readOnly: true},
                    [CAT_ANALYTICS]: {
                        autoClear: {
                            cookies: [
                                {name: /^_ga/},
                                {name: '_gid'},
                            ],
                        },
                        services: {
                            [SERVICE_ANALYTICS_STORAGE]: {
                                label: 'Enables storage related to analytics.',
                            },
                        },
                    },
                    /*                [CAT_ADVERTISEMENT]: {
                                        services: {
                                            [SERVICE_AD_STORAGE]: {
                                                label: 'Enables storage (such as cookies) related to advertising.',
                                            },
                                            [SERVICE_AD_USER_DATA]: {
                                                label: 'Sets consent for sending user data related to advertising to Google.',
                                            },
                                            [SERVICE_AD_PERSONALIZATION]: {
                                                label: 'Sets consent for personalized advertising.',
                                            },
                                        }
                                    },
                                    [CAT_FUNCTIONALITY]: {
                                        services: {
                                            [SERVICE_FUNCTIONALITY_STORAGE]: {
                                                label: 'Enables storage that supports the functionality of the website or app e.g. language settings.',
                                            },
                                            [SERVICE_PERSONALIZATION_STORAGE]: {
                                                label: 'Enables storage related to personalization e.g. video recommendations.',
                                            },
                                        }
                                    },
                                    [CAT_SECURITY]: {
                                        services: {
                                            [SERVICE_SECURITY_STORAGE]: {
                                                label: 'Enables storage related to security such as authentication functionality, fraud prevention, and other user protection.',
                                            },
                                        }
                                    }*/
                },
                language: {
                    default: 'en',
                    translations: {
                        en: {
                            consentModal: {
                                title: 'We use cookies',
                                description:
                                    'For more information in relation to the policy on cookies and your choices, please refer to the <a href="/privacy">privacy policy</a>',
                                acceptAllBtn: 'Accept all',
                                acceptNecessaryBtn: 'Reject all',
                                showPreferencesBtn: 'Manage preferences',
                            },
                            preferencesModal: {
                                title: 'Manage cookie preferences',
                                savePreferencesBtn: 'Save Preferences',
                                closeIconLabel: 'Close modal',
                                sections: [
                                    {
                                        title: 'Strictly Necessary Cookies',
                                        description: 'These cookies are essential for the website to function.',
                                        linkedCategory: CAT_NECESSARY,
                                    },
                                    {
                                        title: 'Analytics Cookies',
                                        description: 'These cookies help us understand how visitors interact with our website.',
                                        linkedCategory: CAT_ANALYTICS,
                                    },
                                    /*                                {
                                                                        title: 'Advertising',
                                                                        description: 'Google uses cookies for advertising, including serving and rendering ads, personalizing ads (depending on your ad settings at <a href=\"https://g.co/adsettings\">g.co/adsettings</a>), limiting the number of times an ad is shown to a user, muting ads you have chosen to stop seeing, and measuring the effectiveness of ads.',
                                                                        linkedCategory: CAT_ADVERTISEMENT,
                                                                    },
                                                                    {
                                                                        title: 'Functionality',
                                                                        description: 'Cookies used for functionality allow users to interact with a service or site to access features that are fundamental to that service. Things considered fundamental to the service include preferences like the user’s choice of language, product optimizations that help maintain and improve a service, and maintaining information relating to a user’s session, such as the content of a shopping cart.',
                                                                        linkedCategory: CAT_FUNCTIONALITY,
                                                                    },
                                                                    {
                                                                        title: 'Security',
                                                                        description: 'Cookies used for security authenticate users, prevent fraud, and protect users as they interact with a service.',
                                                                        linkedCategory: CAT_SECURITY,
                                                                    },*/
                                    {
                                        title: 'More information',
                                        description: 'For more information in relation to the policy on cookies and your choices, please refer to the privacy policy'
                                    }
                                ],
                            },
                        },
                    },
                },
            });
        };
        document.body.appendChild(script);
        return () => {
            // Cleanup script
            document.body.removeChild(script);
        };
    }, []);
    return null;
};

