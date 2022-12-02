import React from 'react';
import { PromoSlider } from '../../components/PromoSlider';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <section>
      <div className="container">
        <h1 className="title title--xl"> Welcome to Nice Gadgets store!</h1>
        <PromoSlider />
      </div>
    </section>
  );
};
