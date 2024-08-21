import React from 'react';

const Card = ({ children, title }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
            <div>{children}</div>
        </div>
    );
};

export default Card;
