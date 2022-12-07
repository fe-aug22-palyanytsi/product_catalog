import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  buttonName: string;
  handleShop: () => void;
  isSelected: boolean;
  isDisabled?: boolean;
};

export const Button: React.FC<Props> = ({
  buttonName,
  handleShop,
  isSelected,
  isDisabled,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    handleShop();
  };

  const isCheckout = buttonName === 'Checkout';

  return (
    <button
      className={cn('addButton', {
        addButton_checkout_selectedButton: isSelected && isCheckout,
        addButton_selectedButton: isSelected,
        addButton_checkout: isCheckout,
      })}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {buttonName}
    </button>
  );
};
