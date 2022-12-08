import React, { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

import './ProductGallery.scss';

// const imagePathesStatic = [
//   'img/phones/apple-iphone-11/black/00.jpg',
//   'img/phones/apple-iphone-11/black/01.jpg',
//   'img/phones/apple-iphone-11/black/02.jpg',
//   'img/phones/apple-iphone-11/black/03.jpg',
//   'img/phones/apple-iphone-11/black/04.jpg',
// ];

type Props = {
  imagePathes: Array<string>;
};

export const ProductGallery: React.FC<Props> = ({ imagePathes }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
        >
          {imagePathes.map(path => (
            <SwiperSlide key={path}>
              <img
                src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${path}`}
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
          slidesPerView={5}
          freeMode
          modules={[FreeMode, Thumbs]}
          slideClass="product-gallery__slide"
          breakpoints={{
            320: {
              spaceBetween: 8,
            },
            640: {
              direction: 'vertical',
              spaceBetween: 10,
            },
          }}
        >
          {imagePathes.map(path => (
            <SwiperSlide key={path} className="product-gallery__slide">
              <div className="product-gallery__item">
                <img
                  src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${path}`}
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
