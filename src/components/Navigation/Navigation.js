import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'address', text: 'Address' },
];

const setLinkClassName = ({ isActive }) => {
  const baseLinkClass = 'px-1 lg:px-3 py-2 flex items-center text-sm';
  return isActive
    ? `${baseLinkClass} text-sky-400`
    : `${baseLinkClass} dark:text-white hover:opacity-75`;
};

export const Navigation = () => (
  <ul className="w-full lg:w-auto flex flex-col lg:flex-row list-none lg:ml-auto">
    {navItems.map(({ href, text }) => (
      <li key={href} className="nav-item">
        <NavLink to={href} className={setLinkClassName}>
          {text}
        </NavLink>
      </li>
    ))}
  </ul>
);
