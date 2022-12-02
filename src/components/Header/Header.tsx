import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { BurgerMenu } from '../BurgerMenu';

import Logo from '../../assets/img/Icons/Logo.svg';
import Burger from '../../assets/img/Icons/Burger.svg';
import Cross from '../../assets/img/Icons/Cross.svg';
import Favourite from '../../assets/img/Icons/Favourite.svg';
import ShoppingBag from '../../assets/img/Icons/ShoppingBag.svg';
import './Header.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header_left">
        <NavLink to="/" className="header_logo">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <div className="header_deskview">
          <Nav />
        </div>
      </div>

      <div className="header_right">
        <NavLink to="/favourites" className="header_link header_deskview">
          <div className="header_button">
            <img
              src={Favourite}
              alt="Favourite"
              className="header_icon"
            />
          </div>
        </NavLink>

        <NavLink to="/shoppingBag" className="header_link  header_deskview">
          <div className="header_button">
            <img
              src={ShoppingBag}
              alt="ShoppingBag"
              className="header_icon"
            />
          </div>
        </NavLink>

        <button
          type="button"
          className="header_burger header_link"
          onClick={handleToggle}
        >
          <div className="header_button">
            {!isMenuOpen
              ? (
                <img
                  src={Burger}
                  alt="burgerIcon"
                  className="header_icon"
                />
              )
              : (
                <img
                  src={Cross}
                  alt="crossIcon"
                  className="header_icon"
                />
              )}
          </div>
        </button>

        <BurgerMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </header>
  );
};
