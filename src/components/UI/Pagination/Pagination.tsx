import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { getNumbers } from '../../../utils/getNumbers';

import './Pagination.scss';

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
      <li
        className={cn('pagination__item pagination__item--prev', {
          'pagination__item--disabled': isPrevDisabled,
        })}
      >
        <Link
          className="pagination__link link-reset"
          to={`?page=${currentPage - 1}`}
          aria-disabled={isPrevDisabled}
          onClick={changePageToPrev}
        />
      </li>

      {
        paginationItems.map(item => (
          <li
            className={cn('pagination__item text text--primary', {
              'pagination__item--active': item === currentPage,
            })}
            key={item}
          >
            <Link
              className="pagination__link link-reset"
              to={`?page=${item}`}
              onClick={() => onPageChange(item)}
            >
              {item}
            </Link>
          </li>
        ))
      }

      <li
        className={cn('pagination__item pagination__item--next', {
          'pagination__item--disabled': isNextDisabled,
        })}
      >
        <Link
          className="pagination__link link-reset "
          to={`?page=${currentPage + 1}`}
          aria-disabled={isNextDisabled}
          onClick={changePageToNext}
        />
      </li>
    </ul>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
};
