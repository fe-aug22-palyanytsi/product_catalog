import React, { useContext, useEffect, useState } from 'react';
import './CartItem.scss';
import { Phone } from '../../types/Phone';

import Cross from '../../assets/img/Icons/Cross.svg';
import Minus from '../../assets/img/Icons/Minus.svg';
import Plus from '../../assets/img/Icons/Plus.svg';
import { UserContext } from '../../context/Context';

type Props = {
  phoneInfo: Phone;
};

export const CartItem: React.FC<Props> = ({ phoneInfo }) => {
  const {
    id,
    image,
    phoneId,
    price,
  } = phoneInfo;

  const { shop, setShop } = useContext(UserContext);

  const [count, setTotalCount] = useState(phoneInfo.count || 1);
  const [totalAmount, setTotalAmount] = useState(count * price);

  const handleClose = (event: React.MouseEvent) => {
    event.preventDefault();

    const filteredShop = shop.filter(item => item.id !== id);

    setShop(filteredShop);
  };

  const handleMinus = (event: React.MouseEvent) => {
    event.preventDefault();

    setTotalCount(count - 1);
  };

  const handlePlus = (event: React.MouseEvent) => {
    event.preventDefault();

    setTotalCount(count + 1);
  };

  useEffect(() => {
    const shopWithCount = shop.map(item => {
      return item.id === id ? { ...item, count } : item;
    });

    setShop(shopWithCount);
    setTotalAmount(count * price);
  }, [count]);

  return (
    <div className="cartItem">
      <div className="cartItem_left">
        <button
          type="button"
          className="cartItem_closeButton"
          onClick={handleClose}
        >
          <img
            src={Cross}
            alt="Cross"
            className="cartItem_closeIcon"
          />
        </button>
        <div className="cartItem_phoneImage">
          <img
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
            alt="phone_img"
            className="cartItem__image"
          />
        </div>

        <NavLink to="/" className="cartItem_info link-reset">
          <div className="cartItem_phoneImage">
            <img
              src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
              alt="phone_img"
              className="cartItem__image"
            />
          </div>

          <p className="cartItem_description text">
            {`${phoneId.split('-').join(' ')} (iMT9G2FS/A)`}
          </p>
        </NavLink>
      </div>

      <div className="cartItem_right">
        <div className="cartItem_controller">
          <button
            type="button"
            className="cartItem_minus cartItem_button"
            onClick={handleMinus}
            disabled={count <= 1}
          >
            <img
              src={Minus}
              alt="Minus"
              className="cartItem_minusImg"
            />
          </button>
          <div className="cartItem_count">
            {count}
          </div>
          <button
            type="button"
            className="cartItem_plus cartItem_button"
            onClick={handlePlus}
          >
            <img
              src={Plus}
              alt="Plus"
              className="cartItem_plusImg"
            />
          </button>
        </div>

        <div className="cartItem_total">
          $
          {totalAmount}
        </div>
      </div>
    </div>
  );
};
