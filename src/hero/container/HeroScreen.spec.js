import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import DoNotFound from '../../UI/components/DoNotFound';
import HeroScreen from './HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('HeroScreen', () => {
  it('should render component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          <Route path="/404" element={<DoNotFound />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(wrapper.find('h1').text().trim()).toBe('Ups Hero Do not found');

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path="/hero/:idHero" element={<HeroScreen />} />
          <Route path="/404" element={<DoNotFound />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(wrapper.find('h3').text().trim()).toBe('Spider Man');

    expect(wrapper).toMatchSnapshot();
  });

  it('should return the previus view', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path="/hero/:idHero" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>,
    );
    wrapper.find('button').prop('onClick')();
    expect(mockNavigate).toBeCalledWith(-1);
  });

  it('should return message the hero do not found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/hero-do-not-exist']}>
        <Routes>
          <Route path="/hero/:idHero" element={<HeroScreen />} />
          <Route path="/404" element={<DoNotFound />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(wrapper.find('h1').text().trim()).toBe('Ups Hero Do not found');
  });
});
