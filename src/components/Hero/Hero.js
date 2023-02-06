import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { options } from './config';

import { SearchBox } from 'components/SearchBox/SearchBox';

export const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);
  return (
    <div className="relative p-4">
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        options={options}
        init={particlesInit}
      />
      <SearchBox />
    </div>
  );
};
