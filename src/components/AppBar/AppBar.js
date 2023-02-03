import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { BiMenu } from 'react-icons/bi';
import { FaEthereum } from 'react-icons/fa';

export const AppBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navVisibilityClassName = navbarOpen ? 'flex' : 'hidden';
  return (
    <header className="relative flex flex-wrap items-center justify-between px-2 py-2 dark:bg-slate-800 mb-3 shadow-md">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="flex items-center text-lg leading-relaxed py-2 mr-4 whitespace-nowrap dark:text-white"
          >
            <FaEthereum className="mr-1 text-blue-500" size={22} />
            EthScanGo
          </Link>

          <button
            className="dark:text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <BiMenu size={32} />
          </button>
        </div>

        <nav
          className={`lg:flex flex-grow items-center ${navVisibilityClassName}`}
        >
          <Navigation />
        </nav>
      </div>
    </header>
  );
};
