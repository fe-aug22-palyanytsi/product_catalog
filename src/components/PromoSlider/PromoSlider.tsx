import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './PromoSlider.scss';

import iphone14Img from '../../assets/img/promo-slider-1.jpg';
import iphone12Img from '../../assets/img/promo-slider-2.jpg';
import iphone12NavyImg from '../../assets/img/promo-slider-3.jpg';

export const PromoSlider = () => {
  return (
    <div className="promo-slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation
        loop
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={16}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
      >
        <SwiperSlide>
          <img
            className="promo-slider__image"
            src={iphone14Img}
            alt="IPhone 14 Pro Max"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="promo-slider__image"
            src={iphone12Img}
            alt="IPhone 12 Pro Max"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="promo-slider__image"
            src={iphone12NavyImg}
            alt="IPhone 12 Pro Max Navy"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-custom-pagination" />
    </div>
  );
};
