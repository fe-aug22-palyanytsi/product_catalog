import React from 'react';

import './Bullet.scss';

export const Bullet: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  {
    className,
    children,
    ...props
  },
) => (
  <button
    type="button"
    className={`bullet btn-reset ${className}`}
    {...props}
  >
    {children}
  </button>
);
