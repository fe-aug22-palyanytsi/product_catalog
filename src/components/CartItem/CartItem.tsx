import { useState } from 'react';
import './CartItem.scss';
import { Phone } from '../../types/Phone';

import Cross from '../../assets/img/Icons/Cross.svg';
import Minus from '../../assets/img/Icons/Minus.svg';
import Plus from '../../assets/img/Icons/Plus.svg';

type Props = {
  phoneInfo: Phone;
};

export const CartItem: React.FC<Props> = ({ phoneInfo }) => {
  const {
    image,
    phoneId,
    price,
  } = phoneInfo;
  const [count, setCount] = useState(1);

  const handleClose = (event: React.MouseEvent) => {
    event.preventDefault();

    // deleting from cart logic
  };

  const handleMinus = (event: React.MouseEvent) => {
    event.preventDefault();

    setCount(count - 1);
  };

  const handlePlus = (event: React.MouseEvent) => {
    event.preventDefault();

    setCount(count + 1);
  };

  const totalAmount = count * price;

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
            src={image}
            alt="phone_img"
            className="cartItem__image"
          />
        </div>

        <p className="cartItem_description">
          {`${phoneId.split('-').join(' ')} (iMT9G2FS/A)`}
        </p>
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
