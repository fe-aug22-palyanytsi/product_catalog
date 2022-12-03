import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumbs.scss';

import homeImg from '../../assets/img/Icons/Home.svg';

type Props = {
  breads: Array<{
    title: string,
    path: string,
  }>
};

export const Breadcrumbs: React.FC<Props> = ({ breads }) => (
  <ul className="breadcrumbs list-reset">
    {breads.map(({
      title,
      path,
    }) => {
      return (
        <li className="breadcrumbs__item text text--secondary">
          <Link
            to={path}
            key={path}
            className="breadcrumbs__link link-reset"
          >
            {title !== 'home'
              ? title
              : <img src={homeImg} alt="" className="breadcrumbs__home" />}
          </Link>
        </li>
      );
    })}
  </ul>
);
