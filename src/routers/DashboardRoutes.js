import { Routes, Route } from 'react-router-dom';
import Navbar from './../UI/components/Navbar';
import MarvelScreen from './../marvel/container/MarvelScreen';
import DcScreen from './../dc/container/DcScreen';
import SearchScreen from './../search/container/SearchScreen';
import HomeScreen from './../Home/container/HomeScreen';
import HeroScreen from './../hero/container/HeroScreen';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/hero/:idHero" element={<HeroScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
