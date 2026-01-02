import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <hr></hr>
            <div className="footer__info">
                <p className="address">Test, Bindzsisztán, Piac utca 12.</p>
                <p className="phone"></p>
                <p className="email">
                    <a href="mailto:test@gmail.com">kalal2000pal@gmail.com</a>
                </p>
                <p className="social">
                    <a href="#">
                        <FaFacebook />
                    </a>
                    <a href="#">
                        <FaInstagram />
                    </a>
                </p>
            </div>
            <div>
                <a href="/privacypolicy">Adatkezelési tájékoztató</a>
                {" | "}
                <a href="/impressum">Impresszum</a>
            </div>
            <p className="footer__copyright">
                © {new Date().getFullYear()} Minden jog fenntartva.
            </p>
        </footer>
    );
};

export default Footer;
