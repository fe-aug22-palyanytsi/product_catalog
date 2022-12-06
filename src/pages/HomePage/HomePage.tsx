import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getClosestDiscountProducts, getNewProducts } from '../../api/products';
import { Categories } from '../../components/Categories';
import { ProductSlider } from '../../components/ProductsSlider';
import { PromoSlider } from '../../components/PromoSlider';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-page__section">
          <h1 className="home-page__title title title--xl">
            Welcome to Nice Gadgets store!
          </h1>
          <PromoSlider />
        </div>

        <section className="home-page__section">
          <h2 className="home-page__subtitle title title--l">
            Brand new models
          </h2>
          <ProductSlider
            requestProducts={getNewProducts}
            uniqueNavigationKeys={{ prev: uuidv4(), next: uuidv4() }}
          />
        </section>

        <section className="home-page__section">
          <h2 className="home-page__subtitle title title--l">
            Shop by category
          </h2>
          <Categories />
        </section>

        <section className="home-page__section">
          <h2 className="home-page__subtitle  title title--l">
            Hot prices
          </h2>
          <ProductSlider
            requestProducts={getClosestDiscountProducts}
            uniqueNavigationKeys={{ prev: uuidv4(), next: uuidv4() }}
          />
        </section>
      </div>
    </div>
  );
};
