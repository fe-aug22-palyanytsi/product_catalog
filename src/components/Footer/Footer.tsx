import './Footer.scss';

import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Icons/Logo.svg';
import ArrowTop from '../../assets/img/Icons/ArrowTop.svg';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Link to="/" className="footer__logo">
            <img
              src={Logo}
              alt="Logo icon"
              className="footer__image"
            />
          </Link>

          <ul className="list-reset footer__menu">
            <li className="footer__menu-item">
              <a
                href="https://github.com/fe-aug22-palyanytsi"
                target="_blank"
                rel="noreferrer"
                className="link-reset footer__menu-link"
              >
                Github
              </a>
            </li>

            <li className="footer__menu-item">
              <Link to="/contacts" className="link-reset footer__menu-link">
                Contacts
              </Link>
            </li>

            <li className="footer__menu-item">
              <Link to="/rights" className="link-reset footer__menu-link">
                rights
              </Link>
            </li>
          </ul>

          <button
            className="btn-reset footer__back-link"
            type="button"
            onClick={scrollToTop}
          >
            Back to top
            <img
              src={ArrowTop}
              alt="Arrow icon"
              className="footer__back-image"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
