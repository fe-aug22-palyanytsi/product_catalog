import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
import { ItemsQuantity } from '../../components/ItemsQuantity';
import { PhoneList } from '../../components/PhonesList/PhoneList';
import { CustomSelect } from '../../components/UI/Select';
import { Phone } from '../../types/Phone';

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically', label: 'Alphabetically' },
  { value: 'cheapest', label: 'Cheapest' },
  { value: 'expensive', label: 'Expensive' },
];

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const getPhones = async () => {
    const products = await getProducts();

    setPhones(products.phones);
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <section className="phones-page">
      <div className="container">
        {/* Breadcrumbs path={[{title:Home, path: 'link:path'}]} */}
        <h1 className="title title--xl">
          Mobile phones
        </h1>

        <div>
          <ItemsQuantity amount={71} itemName="models" />
        </div>
        <div className="selects" style={{ display: 'flex' }}>
          <CustomSelect
            selectLable="Sort by"
            defaultValue="Choose sorting type"
            options={sortOptions}
          />
          <CustomSelect
            selectLable="Items on page"
            defaultValue="Choose items amount"
            options={sortOptions}
          />
        </div>
        <PhoneList phones={phones} />
      </div>
    </section>
  );
};
