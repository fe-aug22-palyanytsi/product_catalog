import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => (
  <div className="loader">
    <ul className="loader__img">
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
    <p className="loader__text title title--m text-reset">Loading...</p>
  </div>
);
