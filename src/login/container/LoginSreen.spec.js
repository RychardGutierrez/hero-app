import { mount } from 'enzyme';
import LoginScreen from './LoginScreen';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { setStorage } from './../../auth/localStorage/index';

const context = {
  dispatch: jest.fn(),
};

const mockNavidate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavidate,
}));

describe('LoginScreen', () => {
  it('should render of the component', () => {
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={['/login']}>
          <LoginScreen />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login');
  });

  it('should call dispatch and navigation', async () => {
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={['/login']}>
          <LoginScreen />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();

    expect(context.dispatch).toBeCalledWith({
      payload: { name: 'lucas duck' },
      type: '[auth] Login',
    });

    expect(mockNavidate).toBeCalledWith('/search', { replace: true });

    setStorage('path', '/dc');

    handleClick();
    expect(mockNavidate).toBeCalledWith('/dc', { replace: true });
  });
});
