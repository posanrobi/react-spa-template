const PageHeader = ({ title = "", subtitle = "" }) => {
    return (
        <section className="page-header">
            <h1 className="page-header-title">{title}</h1>
            {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </section>
    );
};

export default PageHeader;
