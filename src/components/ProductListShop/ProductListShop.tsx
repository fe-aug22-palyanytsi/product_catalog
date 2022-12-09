import React, { useContext } from 'react';
import { UserContext } from '../../context/Context';
import { ProductCardShop } from '../ProductCardShop';
import './ProductListShop.scss';

export const ProductListShop: React.FC = () => {
  const { shop } = useContext(UserContext);

  return (
    <div className="productListShop">
      {shop.length
        ? shop.map(poduct => (
          <ProductCardShop phoneInfo={poduct} key={poduct.id} />
        ))
        : <h2 className="title title--l text-reset">Cart is empty</h2>}
    </div>
  );
};
