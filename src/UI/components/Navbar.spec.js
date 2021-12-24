import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import Navbar from './Navbar';

const mockNativate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNativate,
}));

const contextValue = {
  user: {
    logged: true,
    name: 'lucas',
  },
  dispatch: jest.fn(),
};

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <Navbar />
        </MemoryRouter>
        ,
      </AuthContext.Provider>,
    );
  });

  it('should render component when user is Login', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.nav-item.nav-link.text-info').text().trim()).toBe(
      'LUCAS',
    );
  });

  it('should call logout with navigate and dispach with arguments', () => {
    wrapper.find('button').simulate('click');

    expect(contextValue.dispatch).toBeCalledWith({
      payload: undefined,
      type: '[auth] Logout',
    });
    expect(mockNativate).toBeCalledWith('/login', { replace: true });
    expect(mockNativate).toBeCalledTimes(1);
  });
});
