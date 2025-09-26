import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, role }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (role === 'admin' && !isAdmin) {
    return <Navigate to="/home" />;
  }

  if (role === 'user' && isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}
