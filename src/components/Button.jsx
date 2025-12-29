const Button = ({
    children,
    onClick,
    href,
    variant = "primary",
    size = "md",
    type = "button",
    className = "",
    ...props
}) => {
    const classes = `btn btn--${variant} btn--${size} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
