import { authReducer } from './authReducer';
import { actionLogin, actionLogout } from './../login/actions/index';

describe('authReducer', () => {
  it('should return default state', () => {
    const testState = { logged: false };
    const state = authReducer(testState, {});

    expect(state).toEqual(testState);
  });

  it('should return name user', () => {
    const action = actionLogin('Lucas');
    const testState = { logged: true };

    const state = authReducer(testState, action);

    expect(state).toEqual({ ...testState, name: 'Lucas' });
  });

  it('should return without name user', () => {
    const testState = { logged: true, name: 'Lucas' };

    const state = authReducer(testState, actionLogout());

    expect(state).toEqual({ logged: false });
  });
});
