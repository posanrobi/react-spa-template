import teamImg from "../assets/images/team.jpg";
import groupImg from "../assets/images/group.jpg";

const About = ({ title }) => {
    return (
        <section id="about" className="about-section">
            {title && <h3 className="about-section__title">{title}</h3>}
            <div className="about-section-box">
                <div className="about-image-container left-image-container">
                    <img src={teamImg} alt="The team" />
                </div>
                <div className="about-text-container">
                    <h3>Szeretnénk kényelmesebbé tenni a világot</h3>
                    <p>
                        Hiszünk abban, hogy a jó megoldások nem bonyolultak.
                        Olyan webes és digitális eszközöket készítünk, amelyek
                        valódi problémákra adnak választ, és a felhasználók
                        számára is egyszerűek, érthetők és hatékonyak.
                    </p>
                </div>
            </div>

            <div className="about-section-box">
                <div className="about-text-container">
                    <h3>Történetünk dióhéjban..</h3>
                    <p>
                        Kis csapatként indultunk, nagy célokkal. Azóta is
                        folyamatosan tanulunk, fejlődünk és alkalmazkodunk, hogy
                        ügyfeleink számára mindig a lehető legjobb megoldásokat
                        nyújthassuk – legyen szó egy egyszerű bemutatkozó
                        oldalról vagy egy összetettebb rendszerről.
                    </p>
                </div>
                <div className="about-image-container right-image-container">
                    <img src={groupImg} alt="Our story" />
                </div>
            </div>
        </section>
    );
};

export default About;
