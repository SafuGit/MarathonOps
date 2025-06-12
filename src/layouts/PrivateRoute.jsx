import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading} = use(AuthContext);
  if (loading) {
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;