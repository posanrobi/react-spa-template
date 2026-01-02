import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero_slider from "../assets/images/hero_slider.jpg";
import { useEffect, useState } from "react";

const slides = [
    {
        image: hero_slider,
        title: "TESZT OLDAL",
        text: "Digitális termékek, valódi érték",
    },
    {
        image: hero_slider,
        title: "TESZT OLDAL",
        text: "Skálázható webes megoldások vállalkozásoknak",
    },
    {
        image: hero_slider,
        title: "TESZT OLDAL",
        text: "Ötlettől a kész termékig végigkísérünk",
    },
];

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 200);
    }, []);

    return (
        <div className={`slider ${loaded ? "loaded" : ""}`}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={false}
                navigation={false}
                loop={true}
                className="hero-slide"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={slide.image}
                            alt={`Hero ${i + 1}`}
                            className="slide-image"
                        />
                        <div className="hero-slide__overlay">
                            <h2>{slide.title}</h2>
                            <p>{slide.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
