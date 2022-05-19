import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedComponets/Loading';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const loaction = useLocation();
  if (loading) {
    return <Loading />
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: loaction }} replace />;
  }

  return children;
};

export default RequireAuth;