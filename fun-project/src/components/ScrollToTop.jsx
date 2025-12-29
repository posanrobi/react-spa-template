import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={handleClick}
            className={`scroll-to-top ${visible ? "visible" : ""}`}
            aria-label="Ugrás az oldal tetejére"
        >
            <IoIosArrowUp />
        </button>
    );
};

export default ScrollToTop;
