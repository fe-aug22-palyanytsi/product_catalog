import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="nav_item">
          <NavLink to="/" className="nav_link">Home</NavLink>
        </li>

        <li className="nav_item">
          <NavLink to="/phones" className="nav_link">Phones</NavLink>
        </li>

        <li className="nav_item">
          <NavLink to="/tablets" className="nav_link">Tablets</NavLink>
        </li>

        <li className="nav_item">
          <NavLink to="/assessories" className="nav_link">Assessories</NavLink>
        </li>
      </ul>
    </nav>
  );
};
