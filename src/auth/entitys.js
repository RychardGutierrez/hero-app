import { getStorage } from './localStorage';
import { STORAGE_USER } from './localStorage/constants';

export const initReducer = () => {
  const initState = getStorage(STORAGE_USER) || {
    logged: false,
  };

  return initState;
};
