/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import cn from 'classnames';
import { Phone } from '../../types/Phone';
import { PhoneExtended } from '../../types/PhoneExtended';
import { Button } from '../UI/Button';
import { UserContext } from '../../context/Context';

import './CustomPanel.scss';
import Favourite from '../../assets/img/Icons/Favourite.svg';
import RedFavourite from '../../assets/img/Icons/RedFavourite.svg';

type Props = {
  itemInfo: PhoneExtended | null;
  buttonName: string;
  phones: Phone[],
  memoryCapacity?: string;
  setMemoryCapacity: (arg: string) => void;
  selectedColor?: string;
  setSelectedColor: (arg: string) => void;
};

export const CustomPanel: React.FC<Props> = ({
  itemInfo,
  buttonName,
  phones,
  memoryCapacity,
  setMemoryCapacity,
  selectedColor,
  setSelectedColor,
}) => {
  const {
    setTotalPoduct,
    totalProduct,
    favourites,
    setFavourites,
    shop,
    setShop,
  } = useContext(UserContext);

  const handleCapacity = (capacity: string) => {
    setMemoryCapacity(capacity);
  };

  const selectPhone = phones.find(phone => phone.phoneId === itemInfo?.id);

  const handleShop = () => {
    if (shop.find((phone: Phone) => phone.id === selectPhone?.id)) {
      const filtredStorageList = shop.filter(
        (phone: Phone) => phone.id !== selectPhone?.id,
      );

      setTotalPoduct(filtredStorageList);
      setShop(filtredStorageList);
    } else {
      setShop([...shop, selectPhone] as Phone[]);
      setTotalPoduct([...totalProduct, selectPhone] as Phone[]);
    }
  };

  const handleFavourite = (event: React.MouseEvent) => {
    event.preventDefault();

    if (favourites.find((phone: Phone) => phone.id === selectPhone?.id)) {
      const filtredStorageList = favourites.filter(
        (phone: Phone) => phone.id !== selectPhone?.id,
      );

      setFavourites(filtredStorageList);
    } else {
      setFavourites([...favourites, selectPhone] as Phone[]);
    }
  };

  const handleChangeColor = (newcolor: string) => {
    setSelectedColor(newcolor);
  };

  const isFavourite = !!favourites
    .find(phone => phone.phoneId === itemInfo?.id);
  const isSelected = !!shop.find(phone => phone.phoneId === itemInfo?.id);

  return (
    <div className="custom-panel">
      <div className="custom-panel_colours">
        <p className="custom-panel_char">Available colors</p>
        <div className="custom-panel_colours-list">
          {(itemInfo)
            ? (
              itemInfo.colorsAvailable.map(colour => (
                <div
                  className={cn('custom-panel_colours-background', {
                    isColourSelected: selectedColor === colour,
                  })}
                  key={colour}
                >
                  <button
                    type="button"
                    style={{ background: colour }}
                    className="custom-panel_colours-circle"
                    onClick={() => handleChangeColor(colour)}
                  />
                </div>
              )))
            : ''}
        </div>
        <hr className="custom-panel_lines" />
      </div>
      <div className="custom-panel_select-capacity">
        <p className="custom-panel_char">Select capacity</p>
        <div className="custom-panel_capacity-list">
          {itemInfo?.capacityAvailable.map(capacity => (
            <button
              type="button"
              key={capacity}
              className={cn('custom-panel_capacity-block btn-reset', {
                isActive: capacity === memoryCapacity,
              })}
              onClick={() => handleCapacity(capacity)}
            >
              {capacity}
            </button>
          ))}
        </div>
        <hr className="custom-panel_lines" />
      </div>
      <div className="custom-panel_prices">
        <p className="custom-panel_newprice">
          $
          {itemInfo?.priceDiscount}
        </p>
        <p className="custom-panel_oldprice">
          $
          {itemInfo?.priceRegular}
        </p>
      </div>

      <div className="custom-panel_buttons">
        <Button
          buttonName={buttonName}
          handleShop={handleShop}
          isSelected={isSelected}
        />

        <button
          type="button"
          onClick={handleFavourite}
          className="custom-panel_favourites"
        >
          <img
            src={isFavourite
              ? RedFavourite
              : Favourite}
            alt="Favourite"
            className="custom-panel_heart"
          />
        </button>
      </div>

      <div className="custom-panel_characteristics">
        <div className="custom-panel_text">
          <p className="custom-panel_char">Screen</p>
          <p className="custom-panel_char">Resolution</p>
          <p className="custom-panel_char">Processor</p>
          <p className="custom-panel_char">RAM</p>
        </div>

        <div className="custom-panel_numbers">
          <p className="custom-panel_nums">
            {`${itemInfo?.screen.slice(0, 3)} ${itemInfo?.screen.slice(3)}`}
          </p>
          <p className="custom-panel_nums">
            {itemInfo?.resolution}
          </p>
          <p className="custom-panel_nums">
            {itemInfo?.processor}
          </p>
          <p className="custom-panel_nums">
            {`${itemInfo?.ram.slice(0, -2)} ${itemInfo?.ram.slice(-2)}`}
          </p>
        </div>
      </div>

    </div>
  );
};
