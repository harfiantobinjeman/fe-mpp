import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ role, children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.user) return <Navigate to="/login" />;
  if (role && auth.user.role !== role) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
