import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/address">ADDRESS</NavLink>
      <NavLink to="/transaction">TRANSACTION</NavLink>
    </nav>
  );
};
