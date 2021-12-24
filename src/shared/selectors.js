import { heroes } from './../data/HeroData';
import { PUBLISHER_DC, PUBLISHER_MARVEL } from './constants';

const validPublishers = (publisher) => {
  const publishers = [PUBLISHER_DC, PUBLISHER_MARVEL];
  return publishers.includes(publisher);
};

export const getHeroById = (id) => heroes.find((hero) => hero.id === id);

export const getHeroByPublisher = (publisher) => {
  if (!validPublishers(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};

export const getHeroByName = (name) => {
  if (!name.length) {
    return [];
  }
  return heroes.filter((hero) =>
    hero.superhero.toUpperCase().includes(name.toUpperCase().trim()),
  );
};
