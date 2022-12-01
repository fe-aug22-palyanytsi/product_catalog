import { NavLink } from 'react-router-dom';
import './Nav.scss';

import Favourites from '../../assets/img/Icons/Favourites.svg';
import ShoppingBag from '../../assets/img/Icons/ShoppingBag.svg';

export const Nav = () => (
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

    <div className="nav_buttons">
      <div className="nav_button">
        <NavLink to="/favourites" className="nav_icon">
          <img src={Favourites} alt="Favourites" />
        </NavLink>
      </div>
      <div className="nav_button">
        <a href="/shoppingBag" className="nav_icon">
          <img src={ShoppingBag} alt="ShoppingBag" />
        </a>
      </div>
    </div>
  </nav>
);
