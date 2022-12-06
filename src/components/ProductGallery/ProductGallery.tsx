import React from 'react';

export const ProductGallery = () => {
  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img
          // eslint-disable-next-line max-len
          src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.news_app_ed.jpg"
          alt=""
        />
      </div>

      <ul className="product-gallery__images list-reset">
        <li className="product-gallery__item">
          <img
            // eslint-disable-next-line max-len
            src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.news_app_ed.jpg"
            alt=""
            className="product-gallery__image"
          />
        </li>
        <li className="product-gallery__item">
          <img
            // eslint-disable-next-line max-len
            src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.news_app_ed.jpg"
            alt=""
            className="product-gallery__image"
          />
        </li>
        <li className="product-gallery__item">
          <img
            // eslint-disable-next-line max-len
            src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.news_app_ed.jpg"
            alt=""
            className="product-gallery__image"
          />
        </li>
        <li className="product-gallery__item">
          <img
            // eslint-disable-next-line max-len
            src="https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.news_app_ed.jpg"
            alt=""
            className="product-gallery__image"
          />
        </li>
      </ul>
    </div>
  );
};
