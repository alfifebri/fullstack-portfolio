import React from 'react';

const Section = ({
    id,
    children,
    className = '',
    containerClass = '',
    ...props
}) => {
    return (
        <section id={id} className={`section ${className}`} {...props}>
            <div className={`container ${containerClass}`}>
                {children}
            </div>
        </section>
    );
};

export default React.memo(Section);
