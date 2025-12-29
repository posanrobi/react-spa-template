import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <hr></hr>
            <div className="footer__info">
                <p className="address">4024, Bindzsisztán, Piac utca 12.</p>
                <p className="phone">+36 30 123 1212</p>
                <p className="email">
                    <a href="mailto:test@gmail.com">test@gmail.com</a>
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
            <p className="footer__copyright">
                © {new Date().getFullYear()} Minden jog fenntartva.
            </p>
        </footer>
    );
};

export default Footer;
