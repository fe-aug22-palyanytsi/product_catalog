import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './ProductsSlider.scss';

import { ProductCard } from '../ProductCard';
import { Bullet } from '../UI/Bullet';
import { Phone } from '../../types/Phone';
import { Loader } from '../Loader';

const replaceNums = (str: string) => str.replace(/\d/gi, '');

type Props = {
  requestProducts: () => Promise<Phone[]>;
  uniqueNavigationKeys: { next: string, prev: string };
};

export const ProductSlider: React.FC<Props> = ({
  requestProducts,
  uniqueNavigationKeys,
}) => {
  const [products, setProducts] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);

      const requestedProducts = await requestProducts();

      setProducts(requestedProducts);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isError) {
    return (
      <h2 className="title title-l">
        Wow, some error has occurred! Try to reload the page
      </h2>
    );
  }

  return (
    isLoading
      ? <Loader />
      : (
        <div className="products-slider">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: `.${replaceNums(uniqueNavigationKeys.next)}`,
              prevEl: `.${replaceNums(uniqueNavigationKeys.prev)}`,
            }}
            spaceBetween={16}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 2.3,
              },
              960: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map(product => (
              <SwiperSlide key={Math.random()}>
                <ProductCard
                  phoneInfo={product}
                  buttonName="Add to cart"
                  phones={products}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="products-slider__buttons">
            <Bullet
              className={cn(
                'bullet--prev products-slider__button',
                'products-slider__button--prev',
                replaceNums(uniqueNavigationKeys.prev),
              )}
            />
            <Bullet
              className={cn(
                'bullet--next products-slider__button',
                'products-slider__button--next',
                replaceNums(uniqueNavigationKeys.next),
              )}
            />
          </div>
        </div>
      )
  );
};
