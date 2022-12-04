import React, { useContext } from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';
// import { useStorage } from '../../hooks/useStorage';
import { UserFavourites } from '../../context/Context';

import './PhoneList.scss';

type Props = {
  phones: Phone[];
};

export const PhoneList: React.FC<Props> = ({ phones }) => {
  const { favourites, setFavourites } = useContext(UserFavourites);

  const setFavouiteonStorage = (id: number) => {
    if (favourites.find((phone: Phone) => phone.id === id)) {
      const filtredStorageList = favourites.filter(
        (phone: Phone) => phone.id !== id,
      );

      setFavourites(filtredStorageList);
    } else {
      const findNewPhone = phones.find((phone: Phone) => phone.id === id);

      setFavourites([...favourites, findNewPhone] as Phone[]);
    }
  };

  return (
    <ul className="phone-list grid list-reset">
      {phones.map(phone => (
        <li key={phone.id} className="phone-list__item">
          <ProductCard
            buttonName="Add to cart"
            phoneInfo={phone}
            status={storage.find(
              (item: { id: number; }) => item.id === phone.id,
            )}
            setFavouiteonStorage={setFavouiteonStorage}
          />
        </li>
      ))}
    </ul>
  );
};
