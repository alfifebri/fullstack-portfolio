import React from 'react';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
    return (
        <div
            className={`card ${hoverEffect ? 'hover-effect' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default React.memo(Card);
