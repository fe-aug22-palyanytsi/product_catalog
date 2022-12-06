import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Cross from '../../assets/img/Icons/Cross.svg';
import Minus from '../../assets/img/Icons/Minus.svg';
import Plus from '../../assets/img/Icons/Plus.svg';
import { Phone } from '../../types/Phone';
import './ProductCardShop.scss';
import { UserContext } from '../../context/Context';

interface Props {
  phoneInfo: Phone
}

export const ProductCardShop: React.FC<Props> = ({ phoneInfo }) => {
  const {
    image,
    name,
    price,
    id,
  } = phoneInfo;
  const {
    setTotalPoduct,
    totalProduct,
    shop,
    setShop,
  } = useContext(UserContext);

  const counter = totalProduct.filter(product => product.id === id).length;

  const handlerIncreaseCounter = () => {
    if (counter < 10) {
      setTotalPoduct([...totalProduct, phoneInfo]);
    }
  };

  const handlerDicreaseCounter = () => {
    if (counter > 1) {
      totalProduct.splice(
        totalProduct.lastIndexOf(phoneInfo), 1,
      );

      setTotalPoduct([...totalProduct]);
    }
  };

  const handleClose = () => {
    const filtredListShop = shop.filter(poduct => poduct.id !== id);
    const filterdListTotalProduct = totalProduct.filter(
      poduct => poduct.id !== id,
    );

    setShop([...filtredListShop]);
    setTotalPoduct([...filterdListTotalProduct]);
  };

  const totalPrice = price * counter;

  return (
    <div className="productCardShop">
      <div className="productCardShop_left">
        <button
          type="button"
          className="btn-reset productCardShop_cancel"
          onClick={handleClose}
        >
          <img
            src={Cross}
            alt="Cancel"
          />
        </button>

        <NavLink to="/" className="productCardShop_info link-reset">
          <img
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
            alt="phone_img"
            className="productCardShop_image"
          />
          <div className="productCardShop_name">
            <p className="productCardShop_text text">
              {`${name} (iMT9G2FS/A)`}
            </p>
          </div>
        </NavLink>
      </div>

      <div className="productCardShop_right">
        <div className="productCardShop_counter">
          <button
            type="button"
            className="productCardShop_dicrease btn-reset"
            onClick={handlerDicreaseCounter}
          >
            <img
              src={Minus}
              alt="Dicrease"
              className="productCardShop_minus"
            />
          </button>

          <div className="productCardShop_amount text">
            {counter}
          </div>

          <button
            type="button"
            className="productCardShop_increase btn-reset"
            onClick={handlerIncreaseCounter}
          >
            <img
              src={Plus}
              alt="Increase"
              className="productCardShop_plus"
            />
          </button>
        </div>

        <div className="productCardShop_price title--m">
          {`$${totalPrice}`}
        </div>

      </div>
    </div>
  );
};
