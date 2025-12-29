import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "../assets/images/peakjobs_logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar__logo">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </div>

            <button className="navbar__toggle" onClick={toggleMenu}>
                {menuOpen ? (
                    <IoMdClose className="icon burger" />
                ) : (
                    <GiHamburgerMenu className="icon close" />
                )}
            </button>

            <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
                {/*           <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/"
                    >
                        Főoldal
                    </NavLink>
                </li> */}
                <li>
                    <HashLink
                        smooth
                        to="#about"
                        onClick={() => setMenuOpen(false)}
                    >
                        Rólunk
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="#services"
                        onClick={() => setMenuOpen(false)}
                    >
                        Szolgáltatások
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="#contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        Kapcsolat
                    </HashLink>
                </li>
            </ul>

            {/* <div className="navbar__actions">
                <ThemeToggle />
            </div> */}
        </nav>
    );
};

export default Navbar;
