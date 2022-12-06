import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/Context';
import { Button } from '../UI/Button';
import './Checkout.scss';

export const Checkout: React.FC = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const { shop, totalProduct } = useContext(UserContext);

  const handleToggle = () => {
    setButtonToggle(!buttonToggle);
  };

  const counterProducts = shop.length;
  const totalPrice = totalProduct.reduce((acumulator, product) => (
    acumulator + product.price
  ), 0);

  return (
    <div className="checkout">
      <div className="checkout_price text-reset title--l">{`$${totalPrice}`}</div>
      <div className="checkout_counter text-reset text">{`Total for ${counterProducts} items`}</div>
      <div className="checkout_button">
        <Button
          buttonName="Checkout"
          handleShop={handleToggle}
          isSelected={buttonToggle}
        />
      </div>
    </div>
  );
};
