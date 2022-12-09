import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.scss';
import arrow from '../../assets/img/Icons/ArrowBack.svg';
import { ProductListShop } from '../../components/ProductListShop';
import { Checkout } from '../../components/Checkout';

export const Shop: React.FC = () => {
  return (
    <section className="shop">
      <div className="container shop_container">
        <Link to="/" className="shop_back link-reset">
          <img src={arrow} alt="" className="shop_back shop_back--Img" />
          <p className="shop_back shop_back--text text--secondary text-reset">
            Back
          </p>
        </Link>

        <h1 className="shop_title title title--xl text-reset">
          Cart
        </h1>

        <div className="shop_content">
          <div className="shop_list">
            <ProductListShop />
          </div>
          <div className="shop_checkout">
            <Checkout />
          </div>
        </div>
      </div>
    </section>
  );
};
