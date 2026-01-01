import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from "react-redux";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import CookieConsent from "react-cookie-consent";
import Analytics from "./components/Analitics";

function App() {
    const mode = useSelector((state) => state.theme.mode);

    return (
        <>
            <div
                className={`app-container ${
                    mode === "light" ? "light-theme" : "dark-theme"
                }`}
            >
                <Navbar />
                <Outlet />
                <ScrollToTop />
                <Footer />
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Elfogadom"
                cookieName="peakjobscookie"
                expires={150}
                style={{ background: "#2B373B" }}
                buttonStyle={{
                    color: "#fff",
                    background: "#4CAF50",
                    fontSize: "14px",
                }}
                onAccept={() => {
                    (function (w, d, s, l, i) {
                        w[l] = w[l] || [];
                        w[l].push({
                            "gtm.start": new Date().getTime(),
                            event: "gtm.js",
                        });
                        var f = d.getElementsByTagName(s)[0],
                            j = d.createElement(s),
                            dl = l != "dataLayer" ? "&l=" + l : "";
                        j.async = true;
                        j.src =
                            "https://www.googletagmanager.com/gtm.js?id=" +
                            i +
                            dl;
                        f.parentNode.insertBefore(j, f);
                    })(window, document, "script", "dataLayer", "GTM-PQQC4NXX");
                }}
            >
                Ez az oldal sütiket használ a jobb élmény érdekében.
                <a href="/privacy-policy" style={{ color: "#FFD700" }}>
                    Tudj meg többet
                </a>
            </CookieConsent>
            <Analytics />
        </>
    );
}

export default App;
