import React from 'react';

import HeroList from './../../hero/components/HeroList';

import { PUBLISHER_MARVEL } from '../../shared/constants';

const MarvelScreen = () => {
  return (
    <>
      <HeroList publisher={PUBLISHER_MARVEL} />
    </>
  );
};

export default MarvelScreen;
