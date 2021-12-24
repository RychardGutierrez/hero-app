import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth/authContext';
import { STORAGE_PATH } from '../auth/localStorage/constants';
import { setStorage } from './../auth/localStorage/index';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  setStorage(STORAGE_PATH, `${pathname}${search}`);

  return user.logged ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
