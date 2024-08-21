import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ paths }) => {
    return (
        <nav className="text-sm text-gray-500 mb-4">
            {paths.map((path, index) => (
                <span key={index}>
                    {index > 0 && " / "}
                    {path.to ? <Link to={path.to}>{path.name}</Link> : <span>{path.name}</span>}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
