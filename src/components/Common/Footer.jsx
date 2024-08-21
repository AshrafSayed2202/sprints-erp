import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4">
            <div className="container mx-auto text-center text-white">
                &copy; {new Date().getFullYear()} ERP System. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
