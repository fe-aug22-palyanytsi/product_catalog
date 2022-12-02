import { NavLink } from 'react-router-dom';

import './BurgerMenu.scss';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="burger-menu">
      <ul className={`burger-menu_nav ${isMenuOpen ? 'showMenu' : ''}`}>
        <li className="burger-menu_item">
          <NavLink
            to="/"
            className="burger-menu_link"
            onClick={() => closeMenu()}
          >
            Home
          </NavLink>
        </li>

        <li className="burger-menu_item">
          <NavLink
            to="/phones"
            className="burger-menu_link"
            onClick={() => closeMenu()}
          >
            Phones
          </NavLink>
        </li>

        <li className="burger-menu_item">
          <NavLink
            to="/tablets"
            className="burger-menu_link"
            onClick={() => closeMenu()}
          >
            Tablets
          </NavLink>
        </li>

        <li className="burger-menu_item">
          <NavLink
            to="/assessories"
            className="burger-menu_link"
            onClick={() => closeMenu()}
          >
            Assessories
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
