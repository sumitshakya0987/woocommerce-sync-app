import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProductFormPage from './pages/ProductFormPage';
import { AuthProvider } from './context/AuthContext';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
      
         
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create-product" element={<ProductFormPage />} />
             <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
