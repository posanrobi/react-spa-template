import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

const CardCarousel = ({ cards = [], title }) => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([event]) => {
                if (event.isIntersecting) {
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
        <section ref={ref} className="card-carousel">
            {title && <h3 className="card-carousel__title">{title}</h3>}
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className={`card-carousel__swiper ${loaded ? "loaded" : ""}`}
            >
                {cards.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="card-carousel__card"
                            style={{ backgroundImage: `url(${card.image})` }}
                            role="button"
                            tabIndex={0}
                            aria-label={card.title}
                        >
                            <div className="card-carousel__overlay">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CardCarousel;
