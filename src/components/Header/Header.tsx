import { useEffect, useState } from 'react';
import { Nav } from '../Nav/Nav';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import Logo from '../../assets/img/Icons/Logo.svg';
import './Header.scss';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;

  return { innerWidth, innerHeight };
}

export const Header = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="header">
      <a href="/" className="header_logo">
        <img src={Logo} alt="Logo" />
      </a>

      {windowSize.innerWidth > 639
        ? <Nav />
        : <BurgerMenu />}
    </div>
  );
};