import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./styles/main.scss";
import NotFound from "./pages/NotFound.jsx";
import { HelmetProvider } from "react-helmet-async";
import Impressum from "./components/Impressum.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Home />} />
                            <Route
                                path="/privacypolicy"
                                element={<PrivacyPolicy />}
                            />
                            <Route path="/impressum" element={<Impressum />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </HelmetProvider>
    </StrictMode>
);
