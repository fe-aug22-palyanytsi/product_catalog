import React from 'react';
import cn from 'classnames';

import { getNumbers } from '../../../utils/getNumbers';

import './Pagination.scss';
import { Bullet } from '../Bullet';

interface Props {
  total: number;
  perPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  onPageChange,
  currentPage = 1,
}) => {
  const paginationLength = Math.ceil(total / perPage);
  const paginationItems = getNumbers(1, paginationLength);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === paginationLength;

  const changePageToPrev = () => {
    if (!isPrevDisabled) {
      onPageChange(currentPage - 1);
    }
  };

  const changePageToNext = () => {
    if (!isNextDisabled) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className="pagination list-reset">
      <li className="pagination__item pagination__item--prev">
        <Bullet
          className={cn('bullet--prev', {
            'bullet--disabled': isPrevDisabled,
          })}
          disabled={isPrevDisabled}
          onClick={changePageToPrev}
          aria-label="Move to previous page"
        />
      </li>

      {
        paginationItems.map(item => (
          <li className="pagination__item" key={item}>
            <Bullet
              className={cn('text text--primary', {
                'bullet--active': item === currentPage,
              })}
              onClick={() => onPageChange(item)}
              aria-label={`Move to ${item} page`}
            >
              {item}
            </Bullet>
          </li>
        ))
      }

      <li className="pagination__item pagination__item--next">
        <Bullet
          className={cn('bullet--next', {
            'bullet--disabled': isNextDisabled,
          })}
          disabled={isNextDisabled}
          onClick={changePageToNext}
          aria-label="Move to previous page"
        />
      </li>
    </ul>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
};
