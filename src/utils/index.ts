import GA4 from "react-ga4";
import { Cookies } from "react-cookie-consent";
import { GA4_TRACKING_ID } from "../constants";
//check if cookie consent is accepted before initializing GA4
const checkCookieConsent = () => {
    const allCookies = Cookies.get();
    return (allCookies && allCookies["CookieConsent"] === "true") ? true : false;
}

const activateGA4 = () => {
    // if (import.meta.env.NODE_ENV === "production") {
    //check if cookie consent is accepted before initializing GA4
    if (!checkCookieConsent()) {
        return;
    }
    else {
        //check if GA4 is not already initialized
        if (!GA4.isInitialized) {
            GA4.initialize(GA4_TRACKING_ID);
        }
    }
}

const deactivateGA4 = () => {
    const allCookies = Cookies.get();
    // if (import.meta.env.NODE_ENV === "production") {
    console.log(allCookies)
    const regex = /_ga.*/;
    Object.keys(allCookies).forEach((cookieName) => {
        if (regex.test(cookieName)) {
            Cookies.remove(cookieName);
        }
    });
    //}

}


export { activateGA4, deactivateGA4, checkCookieConsent };