const Service = ({ serviceIcon, serviceDetails }) => {
    return (
        <div className="service">
            <span className="service__icon">{serviceIcon}</span>
            <p className="service__details">{serviceDetails}</p>
        </div>
    );
};

export default Service;
