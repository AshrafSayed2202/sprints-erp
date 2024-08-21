import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import DashboardPage from './pages/DashboardPage';
import InventoryPage from './pages/InventoryPage';
import FinancePage from './pages/FinancePage';
import SalesPage from './pages/SalesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext'; // Import the AuthProvider
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-[100vh]">
          <Sidebar />
          <div className="flex-1 justify-between flex flex-col">
            <Navbar />
            <main className="p-6">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<ProtectedRoute component={DashboardPage} />} />
                <Route path="/inventory" element={<ProtectedRoute component={InventoryPage} />} />
                <Route path="/finance" element={<ProtectedRoute component={FinancePage} />} />
                <Route path="/sales" element={<ProtectedRoute component={SalesPage} />} />
                <Route path="/" element={<DashboardPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
