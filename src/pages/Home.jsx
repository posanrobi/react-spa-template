import CallToAction from "../components/CallToAction";
import CardCarousel from "../components/CardCarousel ";
import Hero from "../components/Hero";
import ValueProps from "../components/ValueProps";

import img1 from "../assets/images/slider1.jpg";
import img2 from "../assets/images/slider2.jpg";
import img3 from "../assets/images/slider3.jpg";
import IntroText from "../components/IntroText";
import SoftCTA from "../components/SoftCTA";
import Contact from "../components/Contact";
import About from "../components/About";
import Servces from "../components/Servives";

const Home = () => {
    return (
        <>
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
                <About title={"A csapat"} />
                <Servces title={"Miket kínálunk?"} />
                <Contact />
            </div>
        </>
    );
};

export default Home;
