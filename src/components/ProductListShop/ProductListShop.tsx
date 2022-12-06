import React, { useContext } from 'react';
import { UserContext } from '../../context/Context';
import { ProductCardShop } from '../ProductCardShop';
import './ProductListShop.scss';

export const ProductListShop: React.FC = () => {
  const { shop } = useContext(UserContext);

  return (
    <div className="productListShop">
      {shop.map(poduct => (
        <ProductCardShop phoneInfo={poduct} key={poduct.id} />
      ))}
    </div>
  );
};
