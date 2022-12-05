import React from 'react';
// import { CategoryType } from '../../types/Category';
import { CategoryItem } from './CategoryItem/CategoryItem';
import CategoryStatic from './CategoryStatic';
import './CategoryPage.scss';

// type Props = {
//   category: CategoryType[];
// };

export const CategoryPage:React.FC = () => {
  return (
    <section className="category">
      <h2 className="category_title title-l">Shop by category</h2>
      <div className="category_wrapper">
        {CategoryStatic.map(item => (
          <CategoryItem src={item.src} type={item.type} count={item.count} />
        ))}
      </div>
    </section>
  );
};
