import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  buttonName: string;
  handleShop: () => void;
  isSelected: boolean;
};

export const Button: React.FC<Props> = ({
  buttonName,
  handleShop,
  isSelected,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    handleShop();
  };

  return (
    <button
      className={cn('addButton', {
        addButton_selectedButton: isSelected,
      })}
      type="button"
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};
