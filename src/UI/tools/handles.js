import { getStorage } from '../../auth/localStorage';
import { STORAGE_PATH } from '../../auth/localStorage/constants';

const responseHero = (response) => {
  return {
    data: response,
    successfull: !!response.length,
  };
};

export const handleLogout = (navigate, action, dispatch) => {
  navigate('/login', { replace: true });
  dispatch(action);
};

export const handleLogin = (navigate, action, dispatch) => {
  const redirect = getStorage(STORAGE_PATH) || '/search';

  navigate(redirect, { replace: true });
  dispatch(action);
};

export const handleReturnHome = (navigate) => {
  navigate('/', { replace: true });
};

export const handleNavigate = (navigate, path) => {
  navigate(`/${path}`);
};

export const handleReturnNavigate = (navigate) => {
  navigate(-1);
};

export const handleSearch = (searchText, selector) => {
  return responseHero(selector(searchText));
};
