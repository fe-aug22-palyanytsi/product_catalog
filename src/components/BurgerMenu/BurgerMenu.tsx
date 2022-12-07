import { useEffect, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/Context';

import './BurgerMenu.scss';

import Favourite from '../../assets/img/Icons/Favourite.svg';
import ShoppingBag from '../../assets/img/Icons/ShoppingBag.svg';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { favourites, shop } = useContext(UserContext);
  const [favCount, setFavCount] = useState(0);
  const [shopCount, setShopCount] = useState(0);

  const setCounter = () => {
    const favouritesLength = favourites.length;

    setFavCount(favouritesLength);
  };

  useEffect(setCounter, [favourites]);

  const setCounterShop = () => {
    const shopLength = shop.length;

    setShopCount(shopLength);
  };

  useEffect(setCounterShop, [shop]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className="burger-menu">
      <div className={`burger-menu_page ${isMenuOpen ? 'showMenu' : ''}`}>
        <ul className="burger-menu_nav">
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

        <div className="burger-menu_buttons">
          <NavLink
            to="/favourites"
            className="burger-menu_bottom-button"
            onClick={() => closeMenu()}
          >
            <div className="burger-menu_button">
              {!!favCount && (
                <div className="burger-menu_button__favourite--Icon">
                  <span className="text-reset text--countFavorites">
                    {favCount}
                  </span>
                </div>
              )}
              <img
                src={Favourite}
                alt="Favourite"
                className="header_icon"
              />
            </div>
          </NavLink>

          <NavLink
            to="/cart"
            className="burger-menu_bottom-button"
            onClick={() => closeMenu()}
          >
            <div className="burger-menu_button">
              {!!shopCount && (
                <div className="burger-menu_button__favourite--Icon">
                  <span className="text-reset text--countFavorites">
                    {shopCount}
                  </span>
                </div>
              )}
              <img
                src={ShoppingBag}
                alt="ShoppingBag"
                className="header_icon"
              />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
