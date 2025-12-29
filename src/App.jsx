import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from "react-redux";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
        </>
    );
}

export default App;
