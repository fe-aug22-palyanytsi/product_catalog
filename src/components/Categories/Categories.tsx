import React from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';

import './Categories.scss';

import categoryImgMobile from '../../assets/img/category_1.jpg';
import categoryImgTablets from '../../assets/img/category_2.jpg';
import categoryImgAccessories from '../../assets/img/category_3.jpg';

const CATEGORIES_STATIC = [
  {
    src: categoryImgMobile,
    title: 'Mobile phones',
    path: 'phones',
    count: 71,
  },
  {
    src: categoryImgTablets,
    title: 'Tablets',
    path: 'tablets',
    count: 6,
  },
  {
    src: categoryImgAccessories,
    title: 'Accessories',
    path: '/accessories',
    count: 0,
  },
];

export const Categories: React.FC = () => {
  return (
    <ul className="categories list-reset">
      {CATEGORIES_STATIC.map(item => (
        <li className="categories__item" key={item.path}>
          <CategoryItem
            src={item.src}
            title={item.title}
            count={item.count}
            path={item.path}
          />
        </li>
      ))}
    </ul>
  );
};
