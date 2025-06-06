import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user, loading} = use(AuthContext);
  if (loading) {
    return <div>loading..</div>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;