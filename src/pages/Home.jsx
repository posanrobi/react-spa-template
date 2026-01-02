import { Suspense, lazy } from "react";
import img1 from "../assets/images/slider1.jpg";
import img2 from "../assets/images/slider2.jpg";
import img3 from "../assets/images/slider3.jpg";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const IntroText = lazy(() => import("../components/IntroText"));
const ValueProps = lazy(() => import("../components/ValueProps"));
const SoftCTA = lazy(() => import("../components/SoftCTA"));
const CardCarousel = lazy(() => import("../components/CardCarousel"));
const About = lazy(() => import("../components/About"));
const Services = lazy(() => import("../components/Services"));
const Contact = lazy(() => import("../components/Contact"));

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Peakjobs</title>
                <meta
                    name="description"
                    content="Tanácsadás felsőfokon, modern webes megoldások."
                />
                <meta property="og:title" content="Peakjobs" />
                <meta
                    property="og:description"
                    content="Tanácsadás felsőfokon, modern webes megoldások."
                />
                <meta
                    property="og:image"
                    content="https://peakjobshungary.netlify.app/og/og.jpg"
                />
                <meta
                    property="og:url"
                    content="https://peakjobshungary.netlify.app/"
                />
                <meta property="og:type" content="website" />

                <link
                    rel="canonical"
                    href="https://peakjobshungary.netlify.app/"
                />
            </Helmet>
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
                <Hero />
                <div className="page-content">
                    <IntroText
                        title="Tanácsadás felsőfokon"
                        description="Segítünk megtalálni a legjobb megoldásokat vállalkozásod számára. Tapasztalt csapatunk támogatást nyújt minden lépésben, 
                    hogy a döntéseid gyorsak, hatékonyak és megalapozottak legyenek."
                    />
                    <ValueProps />
                    <SoftCTA />
                    <CardCarousel
                        cards={[
                            {
                                image: img1,
                                title: "Projekt A",
                                text: "Weboldal fejlesztés",
                            },
                            {
                                image: img2,
                                title: "Projekt B",
                                text: "UI / UX design",
                            },
                            {
                                image: img3,
                                title: "Projekt C",
                                text: "Mobil alkalmazás",
                            },
                            {
                                image: img1,
                                title: "Projekt D",
                                text: "Weboldal fejlesztés",
                            },
                            {
                                image: img2,
                                title: "Projekt E",
                                text: "UI / UX design",
                            },
                            {
                                image: img3,
                                title: "Projekt F",
                                text: "Mobil alkalmazás",
                            },
                        ]}
                        title="Legutóbbi alkotásaink"
                    />
                    <About title="A csapat" />
                    <Services title="Miket kínálunk?" />
                    <Contact />
                </div>
            </Suspense>
        </>
    );
};

export default Home;
