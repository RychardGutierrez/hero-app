import { types } from '../../types/types';
import { actionContex } from './../../auth/authAction';

export const actionLogin = (name) => actionContex(types.login, { name });

export const actionLogout = () => actionContex(types.logout);
