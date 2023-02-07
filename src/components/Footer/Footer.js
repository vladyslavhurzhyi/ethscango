import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { options } from './config';

export const Footer = () => {
  const particlesInits = useCallback(async engine => {
    await loadFull(engine);
  }, []);
  return (
    <div className="relative p-4">
      <Particles
        className="absolute bottom-0 right-0 w-full h-full"
        id="footer"
        options={options}
        init={particlesInits}
      />
      <p className="relative flex justify-center items-center m-6">
        {' '}
        Copyright &copy; {new Date().getFullYear()} Created by Vlad Krasovsky,
        Irene Creadora, Vladyslav Hurzhyi
      </p>
    </div>
  );
};
