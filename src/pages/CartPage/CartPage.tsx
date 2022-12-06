import {
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.scss';

import { UserContext } from '../../context/Context';
import { Button } from '../../components/UI/Button';
import { CartList } from '../../components/CartList';

export const CartPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { shop } = useContext(UserContext);

  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    const price = shop.reduce((acc, item) => (
      acc + (item.count || 1) * item.price
    ), 0);

    setFullPrice(price);
  }, [shop]);

  const handleCheckout = () => {};

  return (
    <main className="cart-page">
      <div className="container">
        <button
          className="cart-page__back-btn text--secondary"
          type="button"
          onClick={goBack}
        >
          Back
        </button>

        <h1 className="cart-page__title title title--xl">Cart</h1>

        <div className="cart-page__content">
          <CartList shop={shop} />
          <section className="cart-page__order">
            <p className="title-l cart-page__price">
              {`$${fullPrice}`}
            </p>
            <p className="cart-page__total-items">
              {`Total for ${shop.length} items`}
            </p>
            <Button
              buttonName="Checkout"
              handleShop={handleCheckout}
              isSelected={false}
            />
          </section>
        </div>

      </div>
    </main>
  );
};
