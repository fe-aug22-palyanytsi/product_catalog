import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="nav_item">
          <NavLink
            to="/"
            className={({ isActive }) => (
              isActive
                ? 'nav_link nav_link--active'
                : 'nav_link'
            )}
          >
            Home
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink
            to="/phones"
            className={({ isActive }) => (
              isActive
                ? 'nav_link nav_link--active'
                : 'nav_link'
            )}
          >
            Phones
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink
            to="/tablets"
            className={({ isActive }) => (
              isActive
                ? 'nav_link nav_link--active'
                : 'nav_link'
            )}
          >
            Tablets
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink
            to="/assessories"
            className={({ isActive }) => (
              isActive
                ? 'nav_link nav_link--active'
                : 'nav_link'
            )}
          >
            Assessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
