// compnent/Protected.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, allowedRoles, role }) => {
  if (allowedRoles.includes(role)) {
    return element;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
