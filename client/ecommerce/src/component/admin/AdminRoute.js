import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import AdminRegistration from './AdminRegistartion'
import AdminLogin from './AdminLogin';
import AdminHome from './AdminHome';
import AdminUsers from './AdminUsers';
import AdminContacts from './AdminContacts';
import AdminProduct from './AdminProduct';
import AdminProductlist from './Adminproductlist'

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const userData = sessionStorage.getItem('userData');
    if (!userData) {
      navigate('/login');
    }
  }, [navigate]);

  return element;
};

const AdminRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminRegistration />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/user" element={<ProtectedRoute element={<AdminUsers />} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<AdminHome />} />} />
        <Route path="/contact" element={<ProtectedRoute element={<AdminContacts />} />} />
        <Route path="/product" element={<ProtectedRoute element={<AdminProduct />} />} />
        <Route path="/product-list" element={<ProtectedRoute element={<AdminProductlist />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRoute;