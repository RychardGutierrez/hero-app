import React, { useEffect, useReducer } from 'react';
import AppRouter from './routers/AppRouter';

import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { initReducer } from './auth/entitys';
import { setStorage } from './auth/localStorage';
import { STORAGE_USER } from './auth/localStorage/constants';

const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, initReducer);

  useEffect(() => {
    if (!user) return;

    setStorage(STORAGE_USER, user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
