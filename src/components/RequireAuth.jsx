import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function RequireAuth({ children }) {
  const { authedUser, initializing } = useContext(AuthContext);

  if (initializing) {
    return <p>Loading user data...</p>; // bisa ganti dengan spinner
  }

  if (!authedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RequireAuth;
