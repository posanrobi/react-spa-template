import { MdBrandingWatermark, MdDeveloperMode } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoShareSocial } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaMapMarkedAlt } from "react-icons/fa";
import Service from "./Service";
import { useEffect, useRef, useState } from "react";

const Services = ({ title }) => {
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
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="services">
            {title && <h3 className="services__title">{title}</h3>}

            <div
                ref={ref}
                className={`services__container ${loaded ? "loaded" : ""}`}
            >
                <Service
                    serviceIcon={<MdBrandingWatermark />}
                    serviceDetails="Egyedi arculattal és modern webes megjelenéssel segítünk kitűnni a tömegből."
                />

                <Service
                    serviceIcon={<GiCommercialAirplane />}
                    serviceDetails="Stabil alapokra épített weboldalak, amelyek támogatják a növekedést és a fejlődést."
                />

                <Service
                    serviceIcon={<IoShareSocial />}
                    serviceDetails="Online jelenlét és közösségi megoldások, amelyek összekötnek a célközönségeddel."
                />

                <Service
                    serviceIcon={<SiMaterialdesignicons />}
                    serviceDetails="Minden projektet az igényeidhez szabunk, sablonmegoldások nélkül."
                />

                <Service
                    serviceIcon={<MdDeveloperMode />}
                    serviceDetails="Megbízható, modern fejlesztés gyors működéssel és hosszú távú stabilitással."
                />

                <Service
                    serviceIcon={<FaMapMarkedAlt />}
                    serviceDetails="Folyamatos támogatás és iránymutatás az átadás után is."
                />
            </div>
        </section>
    );
};

export default Services;
