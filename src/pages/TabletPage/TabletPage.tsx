import React, { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { getProductsByQuery } from '../../api/products';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ItemsQuantity } from '../../components/ItemsQuantity';
import { PhoneList } from '../../components/PhonesList/PhoneList';
import { Pagination } from '../../components/UI/Pagination';
import { CustomSelect } from '../../components/UI/Select';
import { Phone } from '../../types/Phone';
import { Loader } from '../../components/Loader/Loader';

import './TabletPage.scss';

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically', label: 'Alphabetically' },
  { value: 'cheapest', label: 'Cheapest' },
  { value: 'expensive', label: 'Expensive' },
];

const perPageOptions = [
  { value: 'all', label: 'All' },
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '16', label: '16' },
];

export const TabletPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tablets, setTablets] = useState<Phone[]>([]);
  const [tabletsLength, setTabletsLength] = useState(0);
  const [sort, setSort] = useState(
    searchParams.get('sort') || 'newest',
  );
  const [perPage, setPerPage] = useState(
    searchParams.get('perPage') || 'all',
  );
  const [page, setPage] = useState(
    (searchParams.get('page') && Number(searchParams.get('page'))) || 1,
  );
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSortSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  const handleOnPerPageSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPerPage(event.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const getPhones = async () => {
    try {
      setIsLoading(true);

      const products = await getProductsByQuery(searchParams.toString());

      setTablets(products.tablets);
      setTabletsLength(products.tabletsLength);
      setIsLoading(false);
    } catch (err: any) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPhones();
  }, [searchParams]);

  useEffect(() => {
    const params = {};

    if (sort !== 'newest') {
      Object.assign(params, { sort });
    }

    if (page !== 1) {
      Object.assign(params, { page });
    }

    if (perPage !== 'all') {
      Object.assign(params, { perPage });
    }

    setSearchParams(params);
  }, [sort, perPage, page]);

  if (hasError) {
    return (<Navigate to="/not-found" />);
  }

  return (
    <section className="tablet-page">
      <div className="container">
        <div className="tablet-page__breadcrumbs">
          <Breadcrumbs
            breads={[
              { title: 'home', path: '/' },
              { title: 'Tablets', path: '/tablets' },
            ]}
          />
        </div>

        <h1 className="tablet-page__title title title--xl text-reset">
          Tablets
        </h1>

        <div className="tablet-page__quantity">
          <ItemsQuantity amount={tabletsLength} itemName="models" />
        </div>

        <div className="tablet-page__selects">
          <CustomSelect
            selectLabel="Sort by"
            defaultValue="Choose sorting type"
            options={sortOptions}
            selected={sort}
            handleOnSelect={handleOnSortSelect}
          />
          <CustomSelect
            selectLabel="Items on page"
            defaultValue="Choose items amount"
            options={perPageOptions}
            selected={perPage}
            handleOnSelect={handleOnPerPageSelect}
          />
        </div>

        {isLoading
          ? (
            <div className="tablet-page__loader">
              <Loader />
            </div>
          )
          : (
            <>
              <div className="tablet-page__list">
                <PhoneList phones={tablets} />
              </div>

              {!Number.isNaN(+perPage) && (
                <Pagination
                  total={tabletsLength}
                  perPage={+perPage}
                  onPageChange={handlePageChange}
                  currentPage={page}
                />
              )}
            </>
          )}
      </div>
    </section>
  );
};
