import React, { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

import './ProductGallery.scss';

const IMAGES = [
  'img/phones/apple-iphone-11/black/00.jpg',
  'img/phones/apple-iphone-11/black/01.jpg',
  'img/phones/apple-iphone-11/black/02.jpg',
  'img/phones/apple-iphone-11/black/03.jpg',
  'img/phones/apple-iphone-11/black/04.jpg',
];

export const ProductGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
        >
          {IMAGES.map(image => (
            <SwiperSlide key={image}>
              <img
                src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
                alt=""
                className="product-gallery__main-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product-gallery__images">
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          spaceBetween={10}
          slidesPerView={5}
          freeMode
          modules={[FreeMode, Thumbs]}
          slideClass="product-gallery__slide"
          breakpoints={{
            640: {
              direction: 'vertical',
            },
          }}
        >
          {IMAGES.map(image => (
            <SwiperSlide key={image} className="product-gallery__slide">
              <div className="product-gallery__item">
                <img
                  src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
                  alt=""
                  className="product-gallery__preview"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
