import { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { SingleValue } from 'react-select';
import { getProductsByQuery } from '../../api/products';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ItemsQuantity } from '../../components/ItemsQuantity';
import { PhoneList } from '../../components/PhonesList/PhoneList';
import { Pagination } from '../../components/UI/Pagination';
import { CustomSelect } from '../../components/UI/Select';
import { Phone } from '../../types/Phone';
import { Loader } from '../../components/Loader/Loader';

import './PhonesPage.scss';
import { SelectOptions } from '../../types/SelectOptions';

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

export const PhonesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesLength, setPhonesLength] = useState(0);
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

  const handleOnSortSelect = (option: SingleValue<SelectOptions>) => {
    setSort(option?.value || 'newest');
  };

  const handleOnPerPageSelect = (option: SingleValue<SelectOptions>) => {
    setPerPage(option?.value || 'all');
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const getPhones = async () => {
    try {
      setIsLoading(true);

      const products = await getProductsByQuery(searchParams.toString());

      setPhones(products.phones);
      setPhonesLength(products.length);
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
    <section className="phones-page">
      <div className="container">
        <div className="phones-page__breadcrumbs">
          <Breadcrumbs
            breads={[
              { title: 'home', path: '/' },
              { title: 'Phones', path: '/phones' },
            ]}
          />
        </div>

        <h1 className="phones-page__title title title--xl text-reset">
          Mobile phones
        </h1>

        <div className="phones-page__quantity">
          <ItemsQuantity amount={phonesLength} itemName="models" />
        </div>

        <div className="phones-page__selects">
          <CustomSelect
            selectLabel="Sort by"
            options={sortOptions}
            selected={sort}
            handleOnSelect={handleOnSortSelect}
          />
          <CustomSelect
            selectLabel="Items on page"
            options={perPageOptions}
            selected={perPage}
            handleOnSelect={handleOnPerPageSelect}
          />
        </div>

        {isLoading
          ? (
            <div className="phones-page__loader">
              <Loader />
            </div>
          )
          : (
            <>
              <div className="phones-page__list">
                <PhoneList phones={phones} />
              </div>

              {!Number.isNaN(+perPage) && (
                <Pagination
                  total={phonesLength}
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
