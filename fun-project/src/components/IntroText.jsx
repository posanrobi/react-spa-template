import { useEffect, useRef, useState } from "react";

const IntroText = ({ title, description, background = false }) => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className={`intro-text ${loaded ? "loaded" : ""} ${
                background ? "dark-bg" : ""
            }`}
        >
            <h2 className="intro-text__title">{title}</h2>
            <p className="intro-text__description">{description}</p>
        </section>
    );
};

export default IntroText;
