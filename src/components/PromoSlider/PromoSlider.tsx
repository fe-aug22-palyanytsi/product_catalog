import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './PromoSlider.scss';

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
            // eslint-disable-next-line max-len
            src="https://cyberstate.kz/wp-content/uploads/2022/09/camera_iphone-14-pro.jpg"
            alt="IPhone 14 Pro Max"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="promo-slider__image"
            // eslint-disable-next-line max-len
            src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg"
            alt="IPhone 12 Pro Max"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="promo-slider__image"
            // eslint-disable-next-line max-len
            src="https://cdn.wccftech.com/wp-content/uploads/2020/07/iPhone-12-Navy-Blue-color-option-4.jpg"
            alt="IPhone 13 Pro Max"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-custom-pagination" />
    </div>
  );
};
