import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import PrivateRoute from './PrivateRoute';

Storage.prototype.setItem = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>Exit component</span>,
}));

describe('PrivateRoute', () => {
  it('should show of the component if user is autenticate and save in the localstorage', () => {
    const contextValue = {
      user: {
        name: 'Lucas',
        logged: true,
      },
      dispatch: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute>
            <h1>Render component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(wrapper.find('h1').text().trim()).toBe('Render component');
    // expect(localStorage.setItem).toHaveBeenCalledWith('path', "\"/\"");

    expect(wrapper).toMatchSnapshot();
  });

  it('should block component is the user is not authenticate', () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute>
            <h1>Render component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(wrapper.find('span').text().trim()).toBe('Exit component');
    // expect(localStorage.setItem).toHaveBeenCalledWith('path', "\"/\"");

    expect(wrapper).toMatchSnapshot();
  });
});
