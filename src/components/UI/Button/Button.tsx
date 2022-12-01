import React, { useState } from 'react';
import cn from 'classnames';

import Favourite from '../Icons/Favourite.svg';
import RedFavourite from '../Icons/RedFavourite.svg';

import './Button.scss';

export const Button = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsSelected(!isSelected);
  };

  const handleFavourite = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsFavourite(!isFavourite);
  };

  return (
    <div className="addButton">
      <button
        className={cn('addButton_main', {
          addButton_selectedButton: isSelected,
        })}
        type="button"
        onClick={handleClick}
      >
        Add to cart
      </button>

      <button
        type="button"
        onClick={handleFavourite}
        className="addButton_favourites"
      >
        <img
          src={isFavourite
            ? RedFavourite
            : Favourite}
          alt="Favourite"
          className="addButton_img"
        />
      </button>
    </div>
  );
};
