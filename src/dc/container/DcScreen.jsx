import React from 'react';

import HeroList from './../../hero/components/HeroList';

import { PUBLISHER_DC } from './../../shared/constants';

const DcScreen = () => {
  return (
    <>
      <HeroList publisher={PUBLISHER_DC} />
    </>
  );
};

export default DcScreen;
