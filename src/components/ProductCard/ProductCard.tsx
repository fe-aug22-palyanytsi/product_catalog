import React, { useContext } from 'react';
import { Button } from '../UI/Button';
import { Phone } from '../../types/Phone';
import { UserContext } from '../../context/Context';

import './ProductCard.scss';

import Favourite from '../../assets/img/Icons/Favourite.svg';
import RedFavourite from '../../assets/img/Icons/RedFavourite.svg';

type Props = {
  phoneInfo: Phone;
  buttonName: string;
  phones: Phone[],
};

export const ProductCard: React.FC<Props> = ({
  phoneInfo,
  buttonName,
  phones,
}) => {
  const {
    id,
    image,
    phoneId,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = phoneInfo;
  const {
    setTotalPoduct,
    totalProduct,
    favourites,
    setFavourites,
    shop,
    setShop,
  } = useContext(UserContext);

  const handleFavourite = (event: React.MouseEvent) => {
    event.preventDefault();

    if (favourites.find((phone: Phone) => phone.id === id)) {
      const filtredStorageList = favourites.filter(
        (phone: Phone) => phone.id !== id,
      );

      setFavourites(filtredStorageList);
    } else {
      const findNewPhone = phones.find((phone: Phone) => phone.id === id);

      setFavourites([...favourites, findNewPhone] as Phone[]);
    }
  };

  const handleShop = () => {
    if (shop.find((phone: Phone) => phone.id === id)) {
      const filtredStorageList = shop.filter(
        (phone: Phone) => phone.id !== id,
      );

      setShop(filtredStorageList);
      setTotalPoduct(filtredStorageList);
    } else {
      const findNewPhone = phones.find((phone: Phone) => phone.id === id);

      setShop([...shop, findNewPhone] as Phone[]);
      setTotalPoduct([...totalProduct, findNewPhone] as Phone[]);
    }
  };

  const isFavourite = !!favourites.find(phone => phone.id === id);
  const isSelected = !!shop.find(phone => phone.id === id);

  return (
    <div className="productCard">
      <img
        src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
        alt="phone_img"
        className="productCard_image"
      />
      <div className="productCard_block">
        <p className="productCard_description">
          {`${phoneId.split('-').join(' ')} (iMT9G2FS/A)`}
        </p>
        <div className="productCard_prices">
          <p className="productCard_newprice">
            $
            {price}
          </p>
          <p className="productCard_oldprice">
            $
            {fullPrice}
          </p>
        </div>
        <hr className="productCard_line" />
        <div className="productCard_characteristics">
          <div className="productCard_text">
            <p className="productCard_char">Screen</p>
            <p className="productCard_char">Capacity</p>
            <p className="productCard_char">RAM</p>
          </div>

          <div className="productCard_numbers">
            <p className="productCard_char">
              {`${screen.slice(0, 3)} ${screen.slice(3)}`}
            </p>
            <p className="productCard_char">
              {`${capacity.slice(0, -2)} ${capacity.slice(-2)}`}
            </p>
            <p className="productCard_char">
              {`${ram.slice(0, -2)} ${ram.slice(-2)}`}
            </p>
          </div>
        </div>

        <div className="productCard_buttons">
          <Button
            buttonName={buttonName}
            handleShop={handleShop}
            isSelected={isSelected}
          />

          <button
            type="button"
            onClick={handleFavourite}
            className="productCard_favourites"
          >
            <img
              src={isFavourite
                ? RedFavourite
                : Favourite}
              alt="Favourite"
              className="productCard_heart"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
