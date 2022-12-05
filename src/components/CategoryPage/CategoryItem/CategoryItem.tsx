import React from 'react';
import { CategoryType } from '../../../../node_modules/.cache/types/Category';
import './CatergoryItem.scss';

export const CategoryItem:React.FC<CategoryType> = (category) => {
  const {
    src,
    type,
    count,
  } = category;

  return (
    <div className="category_item">
      <img
        src={src}
        alt="category_image"
        className="category_item-img"
      />
      <span className="category_item-type title--s">
        {type}
      </span>
      <span className="category_item-count text--primary">
        {`${count} models`}
      </span>
    </div>
  );
};
