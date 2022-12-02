import React from 'react';

import './ItemsQuantity.scss';

type Props = {
  amount: number;
  itemName: string;
};

export const ItemsQuantity: React.FC<Props> = ({ amount, itemName }) => (
  <span className="items-quantity text text--primary">
    {`${amount} ${itemName}`}
  </span>
);
