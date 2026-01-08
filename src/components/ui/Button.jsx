import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    ...props
}) => {
    const baseClass = 'btn';
    const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';
    const classes = `${baseClass} ${variantClass} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
};

export default React.memo(Button);
