import React, { useState } from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  buttonName: string;
};

export const Button: React.FC<Props> = ({ buttonName }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsSelected(!isSelected);
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
