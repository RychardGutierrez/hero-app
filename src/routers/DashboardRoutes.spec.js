import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import DashboardRoutes from './DashboardRoutes';

describe('DashboardRouters', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'lucas',
    },
  };

  it('should shown component', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.nav-item.nav-link.text-info').text().trim()).toBe(
      'LUCAS',
    );
  });

  it('should shown component marvel', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-center').text().trim()).toBe(
      'Hero List - Marvel Comics',
    );
  });

  it('should shown component dc', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-center').text().trim()).toBe(
      'Hero List - DC Comics',
    );
  });
});
