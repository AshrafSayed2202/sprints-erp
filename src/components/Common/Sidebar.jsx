import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-[100vh] w-64 p-4">
            <h2 className="text-xl font-bold mb-4">ERP System</h2>
            <ul>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded block">Dashboard</Link>
                </li>
                <li className="mb-2">
                    <Link to="/inventory" className="hover:bg-gray-700 p-2 rounded block">Inventory</Link>
                </li>
                <li className="mb-2">
                    <Link to="/finance" className="hover:bg-gray-700 p-2 rounded block">Finance</Link>
                </li>
                <li className="mb-2">
                    <Link to="/sales" className="hover:bg-gray-700 p-2 rounded block">Sales</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
