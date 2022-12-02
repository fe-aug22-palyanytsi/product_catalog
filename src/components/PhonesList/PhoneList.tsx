import React from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';

import './PhoneList.scss';

type Props = {
  phones: Phone[];
};

export const PhoneList: React.FC<Props> = ({ phones }) => (
  <ul className="phone-list grid list-reset">
    {phones.map(phone => (
      <li key={phone.id} className="phone-list__item">
        <ProductCard buttonName="Add to cart" phoneInfo={phone} />
      </li>
    ))}
  </ul>
);
