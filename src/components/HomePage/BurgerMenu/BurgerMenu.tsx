import Burger from '../../../UI/Icons/Burger.svg';
import './BurgerMenu.scss';

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
