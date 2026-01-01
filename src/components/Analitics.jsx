import { useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

const Analytics = () => {
    useEffect(() => {
        const consent = getCookieConsentValue("peakjobscookie");
        if (consent === "true") {
            // GA4 script
            const script = document.createElement("script");
            script.src =
                "https://www.googletagmanager.com/gtag/js?id=G-X5ZP7NWDJD";
            script.async = true;
            document.body.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            window.gtag = gtag;

            gtag("js", new Date());
            gtag("config", "G-X5ZP7NWDJD");
        }
    }, []);

    return null;
};

export default Analytics;
