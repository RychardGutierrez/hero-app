import { mount } from 'enzyme';
import SearchScreen from './SearchScreen';
import { MemoryRouter } from 'react-router-dom';

const mockNativate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNativate,
}));

describe('SearchScreen', () => {
  it('Should render component defult', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('.alert.alert-info').text().trim()).toBe(
      'Hero found...',
    );
  });

  it('Should render Batman and input with the value of the queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  it('Should render Hero do not found and input with the value of the queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchScreen />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('.alert.alert-danger').text().trim()).toBe(
      'Hero do not found...',
    );
  });

  it('Should call navigate to change screen', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>,
    );

    wrapper.find('input').simulate('change', {
      target: { name: 'searchText', value: 'batman' },
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault: () => {},
    });

    expect(mockNativate).toHaveBeenCalledWith('?q=batman');
  });
});
