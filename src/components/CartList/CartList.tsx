import { FC } from 'react';
import { Phone } from '../../types/Phone';
import { CartItem } from '../CartItem';
import './CartList.scss';

type Prop = {
  shop: Phone[];
};

export const CartList: FC<Prop> = ({ shop }) => {
  return (
    <ul className="list-reset cart-page__list">
      {shop.map(item => (
        <CartItem phoneInfo={item} key={item.id} />
      ))}
    </ul>
  );
};
