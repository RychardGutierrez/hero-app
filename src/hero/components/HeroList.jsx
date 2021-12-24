import { useMemo } from 'react';
import HeroCard from './HeroCard';

import { getHeroByPublisher } from '../../shared/selectors';

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Hero List - {publisher}</h1>
      <div className="row rows-cols-1 row-cols-md-3 g-3 mt-4 animate__animated animate__fadeIn">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default HeroList;
