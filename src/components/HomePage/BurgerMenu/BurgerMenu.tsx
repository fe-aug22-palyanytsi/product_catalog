import Burger from '../assets/Burger.svg';
import './BurgerMenu.css';

export default function BurgerMenu() {
  return (
    <div className="burger-menu">
      <div className="burger-menu_container">
        <a href="/menu" className="burger-menu_icon">
          <img src={Burger} alt="Burger" />
        </a>
      </div>
    </div>
  );
}
