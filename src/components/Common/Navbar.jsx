import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl">
                    <Link to="/">ERP System</Link>
                </div>
                <div className="flex space-x-4">
                    <Link to="/dashboard" className="text-white">Dashboard</Link>
                    <Link to="/inventory" className="text-white">Inventory</Link>
                    <Link to="/finance" className="text-white">Finance</Link>
                    <Link to="/sales" className="text-white">Sales</Link>
                    {user ? (
                        <>
                            <span className="text-white">{user.email}</span>
                            <button
                                onClick={logout}
                                className="bg-red-600 text-white px-3 py-1 rounded"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="bg-blue-600 text-white px-3 py-1 rounded">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
