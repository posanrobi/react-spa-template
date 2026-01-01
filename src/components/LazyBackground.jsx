import { useEffect, useRef, useState } from "react";

function LazyBackground({ image, className, children }) {
    const ref = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                backgroundImage: loaded ? `url(${image})` : "none",
            }}
        >
            {children}
        </div>
    );
}

export default LazyBackground;
