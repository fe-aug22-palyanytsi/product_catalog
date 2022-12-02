import React from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';

type Props = {
  phones: Phone[];
};

export const PhoneList: React.FC<Props> = ({ phones }) => (
  <ul className="grid list-reset">
    {phones.map(phone => (
      <li key={phone.id} style={{ gridColumn: 'span 6' }}>
        <ProductCard buttonName="Add to cart" phoneInfo={phone} />
      </li>
    ))}
  </ul>
);
