import { NavLink } from 'react-router-dom';
import Burger from '../../assets/img/Icons/Burger.svg';
import './BurgerMenu.scss';

export const BurgerMenu = () => (
  <div className="burger-menu">
    <div className="burger-menu_container">
      <NavLink to="/menu" className="burger-menu_icon">
        <img src={Burger} alt="Burger" />
      </NavLink>
    </div>
  </div>
);
