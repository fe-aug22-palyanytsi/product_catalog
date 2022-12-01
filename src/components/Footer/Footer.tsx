import './Footer.scss';

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

          <a href="/" className="footer__logo">
            <img
              src={Logo}
              alt="Logo icon"
              className="footer__image"
            />
          </a>

          <ul className="list-reset footer__menu">
            <li className="footer__menu-item">
              <a
                href="https://github.com"
                className="link-reset footer__menu-link"
              >
                Github
              </a>
            </li>

            <li className="footer__menu-item">
              <a href="/contacts" className="link-reset footer__menu-link">
                Contacts
              </a>
            </li>

            <li className="footer__menu-item">
              <a href="/rights" className="link-reset footer__menu-link">
                rights
              </a>
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
