const PrivacyPolicy = () => {
    return (
        <section className="legal-page">
            <h1>Adatkezelési tájékoztató</h1>

            <p>
                Az oldal üzemeltetője elkötelezett a személyes adatok védelme
                mellett. Az alábbiakban ismertetjük, milyen adatokat kezelünk és
                milyen célból.
            </p>

            <h2>1. Az adatkezelő</h2>
            <p>
                Az oldal üzemeltetője: magánszemély
                <br />
                Kapcsolat: kalal2000pal@gmail.com
            </p>

            <h2>2. Kezelt adatok</h2>
            <ul>
                <li>név</li>
                <li>email cím</li>
                <li>üzenet tartalma</li>
                <li>IP cím és technikai adatok</li>
            </ul>

            <h2>3. Az adatkezelés célja</h2>
            <p>Kapcsolatfelvétel, üzenetek megválaszolása.</p>

            <h2>4. Az adatkezelés jogalapja</h2>
            <p>Az érintett önkéntes hozzájárulása, valamint jogos érdek.</p>

            <h2>5. Adattárolás időtartama</h2>
            <p>
                Az adatokat a kapcsolatfelvétel lezárásáig, vagy legfeljebb 12
                hónapig tároljuk.
            </p>

            <h2>6. Harmadik fél szolgáltatások</h2>
            <p>
                Az oldalon Google reCAPTCHA v3 szolgáltatás működik, amely az
                automatizált visszaélések elleni védelmet szolgálja. A reCAPTCHA
                használata során adatkezelés történik a Google adatvédelmi
                irányelvei szerint.
            </p>

            <p>
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                >
                    Google Adatvédelmi irányelvek
                </a>{" "}
                |
                <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noreferrer"
                >
                    Google Általános Szerződési Feltételek
                </a>
            </p>

            <h2>7. Az érintettek jogai</h2>
            <p>
                Az érintett jogosult tájékoztatást kérni személyes adatai
                kezeléséről, kérheti azok módosítását vagy törlését.
            </p>
        </section>
    );
};

export default PrivacyPolicy;
