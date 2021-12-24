import { mount } from 'enzyme';
import { AuthContext } from '../auth/authContext';
import AppRouter from './AppRouter';

describe('AppRouter', () => {
  it('Should return login if the user is do not authenticate', () => {
    const conextValue = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={conextValue}>
        <AppRouter />
      </AuthContext.Provider>,
    );

    expect(wrapper.find('h1').text().trim()).toBe('Login');
    expect(wrapper).toMatchSnapshot();
  });

  it('Should return DasboardRoutes when the user is authenticate', () => {
    const conextValue = {
      user: {
        logged: true,
        name: 'Lucas',
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={conextValue}>
        <AppRouter />
      </AuthContext.Provider>,
    );

    expect(wrapper.find('.navbar').exists()).toBeTruthy();

    expect(wrapper.find('.nav-item.nav-link.btn').text().trim()).toBe('Logout');
    expect(wrapper.find('.nav-item.nav-link.text-info').text().trim()).toBe(
      'LUCAS',
    );

    expect(wrapper.find('h1').text().trim()).toBe('Welcome to Heroes App');

    expect(wrapper).toMatchSnapshot();
  });
});
