import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductGallery } from '../../components/ProductGallery';

export const ProductPage = () => {
  return (
    <section className="phones-page">
      <div className="container">
        <div className="phones-page__breadcrumbs">
          <Breadcrumbs breads={[
            { title: 'home', path: '/' },
            { title: 'Phones', path: '/phones' },
            { title: 'Apple IPhone 11 Pro Max', path: 'id1' },
          ]}
          />
        </div>

        <h1 className="phones-page__heading text text-xl text-reset">
          Apple IPhone 11 Pro Max
        </h1>

        <ProductGallery />
      </div>
    </section>
  );
};
