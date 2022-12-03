import React from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';
import { useStorage } from '../../hooks/useStorage';

import './PhoneList.scss';

type Props = {
  phones: Phone[];
};

export const PhoneList: React.FC<Props> = ({ phones }) => {
  const [storage, setStorage] = useStorage([], 'Favorite');

  const setFavouiteonStorage = (id: number) => {
    if (storage.find((phone: Phone) => phone.id === id)) {
      const filtredStorageList = storage.filter(
        (phone: Phone) => phone.id !== id,
      );

      setStorage(filtredStorageList);
    } else {
      const findNewPhone = phones.find((phone: Phone) => phone.id === id);

      setStorage([...storage, findNewPhone]);
    }
  };

  return (
    <ul className="phone-list grid list-reset">
      {phones.map(phone => (
        <li key={phone.id} className="phone-list__item">
          <ProductCard
            buttonName="Add to cart"
            phoneInfo={phone}
            setFavouiteonStorage={setFavouiteonStorage}
          />
        </li>
      ))}
    </ul>
  );
};
