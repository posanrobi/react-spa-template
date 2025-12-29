const NotFound = () => {
    return (
        <section className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-container__title">404</h1>
                <h2 className="notfound-container__description">
                    Az oldal nem található!
                </h2>
                <p className="notfound-container__text">
                    <a href="/" className="notfound-container__link">
                        Vissza a kezdőlapra
                    </a>
                </p>
            </div>
        </section>
    );
};

export default NotFound;
