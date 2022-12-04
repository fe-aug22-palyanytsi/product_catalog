// import { useEffect, useState } from 'react';
// import { useStorage } from '../../hooks/useStorage';
import { useContext } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PhoneList } from '../../components/PhonesList';
import { ItemsQuantity } from '../../components/ItemsQuantity';

import { UserFavourites } from '../../FavContext';
import './FavouritesPage.scss';

export const FavouritesPage = () => {
  // const [favourites, setfavourites] = useState(useStorage([], 'Favorite')[0]);
  const favs = useContext(UserFavourites);

  // useEffect(() => {
  //   const getValue = () => {
  //     const storage = localStorage.getItem('Favorite');

  //     if (storage) {
  //       return JSON.parse(storage);
  //     }

  //     return [];
  //   };

  //   setfavourites(getValue());
  // }, [favourites]);

  return (
    <section className="favourites-page">
      <div className="container">
        <div className="favourites-page__breadcrumbs">
          <Breadcrumbs
            breads={[
              { title: 'home', path: '/' },
              { title: 'Favourites', path: '/favourites' },
            ]}
          />
        </div>

        <h1 className="favourites-page__title title title--xl text-reset">
          Favourites
        </h1>

        <div className="phones-page__quantity">
          <ItemsQuantity amount={favs.length} itemName="models" />
        </div>

        <div className="phones-page__list">
          <PhoneList phones={favs} />
        </div>
      </div>
    </section>
  );
};
