import React, { useEffect, useState } from 'react';
import { FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

import './ProductGallery.scss';

type Props = {
  imagePathes: Array<string>;
  selectedColor: string;
};

export const ProductGallery: React.FC<Props> = ({
  imagePathes,
  selectedColor,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [pathes, setPathes] = useState(imagePathes);

  useEffect(() => {
    const newPathes = pathes.map(path => {
      const prevColour = path.split('/')[3];

      return path.replace(prevColour, selectedColor);
    });

    setPathes(newPathes);
  }, [selectedColor]);

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
        >
          {pathes.map(path => (
            <SwiperSlide key={path}>
              <img
                src={`https://raw.githubusercontent.com/fe-aug22-palyanytsi/product_catalog_BE/main/public/${path}`}
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
          {pathes.map(path => (
            <SwiperSlide key={path} className="product-gallery__slide">
              <div className="product-gallery__item">
                <img
                  src={`https://raw.githubusercontent.com/fe-aug22-palyanytsi/product_catalog_BE/main/public/${path}`}
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
