import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ERPProvider } from './context/ERPContext';
import Home from './pages/Home';
import InventoryManagement from './pages/InventoryManagement';
import FinanceManagement from './pages/FinanceManagement';
import SalesManagement from './pages/SalesManagement';
import LoginPage from './pages/LoginPage';
import Navbar from './components/common/Navbar';  // Import the Navbar

const App = () => {
  return (
    <AuthProvider>
      <ERPProvider>
        <Router>
          <Navbar />  {/* Add Navbar here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/finance" element={<FinanceManagement />} />
            <Route path="/sales" element={<SalesManagement />} />
          </Routes>
        </Router>
      </ERPProvider>
    </AuthProvider>
  );
};

export default App;
