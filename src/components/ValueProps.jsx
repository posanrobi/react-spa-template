import { useEffect, useRef, useState } from "react";

const ValueProps = () => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef(null);

    const items = [
        { title: "Gyors kivitelezés", text: "Határidők csúszás nélkül." },
        { title: "Megfizethető", text: "Átlag ember számára is elérhető." },
        { title: "Testreszabás", text: "Nem sablonokban gondolkodunk." },
        { title: "Támogatás", text: "Nem tűnünk el az átadás után." },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="value-props">
            <h2 className="value-props__title">Miért minket válassz?</h2>
            <div className={`value-props__grid ${loaded ? "loaded" : ""}`}>
                {items.map((item, i) => (
                    <div key={i} className="value-props__card">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValueProps;
