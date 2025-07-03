import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute component to check authentication
const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated (e.g., by checking a token in localStorage)
  const isAuthenticated = localStorage.getItem('authToken'); // Replace with your auth logic

  // If authenticated, render the children (the protected component)
  // If not authenticated, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;