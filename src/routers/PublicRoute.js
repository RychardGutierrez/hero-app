import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { getStorage } from '../auth/localStorage';
import { STORAGE_PATH } from '../auth/localStorage/constants';

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const redirect = getStorage(STORAGE_PATH) || '/search';

  return user.logged ? <Navigate to={redirect} /> : children;
};

export default PublicRoute;
