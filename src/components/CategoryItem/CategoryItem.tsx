import React from 'react';
import { Link } from 'react-router-dom';
import { ItemsQuantity } from '../ItemsQuantity';
import './CatergoryItem.scss';

type Props = {
  src: string;
  title: string;
  count: number;
  path: string;
};

export const CategoryItem: React.FC<Props> = ({
  src,
  title,
  count,
  path,
}) => {
  return (
    <article className="category">
      <img
        src={src}
        alt={title}
        className="category__img"
      />
      <h3 className="category__heading title title--s text-reset">
        {title}
      </h3>
      <ItemsQuantity amount={count} itemName="models" />
      <Link to={path} className="category__link" />
    </article>
  );
};
