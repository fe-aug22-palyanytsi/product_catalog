import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PhoneList } from '../../components/PhonesList';
import { ItemsQuantity } from '../../components/ItemsQuantity';
import { AppContext } from '../../context/AppContext';
import { AppContextType } from '../../types/AppContextType';

import './FavouritesPage.scss';

export const FavouritesPage = () => {
  const { favList } = React.useContext(AppContext) as AppContextType;
  // const [workList, setWorkList] = useState(favList);

  // useEffect(() => {
  //   const checkUserData = () => {
  //     const list = localStorage.getItem('Favorite');

  //     if (list) {
  //       setWorkList(JSON.parse((list)));
  //     }
  //   };

  //   window.addEventListener('storage', checkUserData);

  //   return () => {
  //     window.removeEventListener('storage', checkUserData);
  //   };
  // }, []);

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
          <ItemsQuantity amount={favList.length} itemName="models" />
        </div>

        <div className="phones-page__list">
          <PhoneList phones={favList} />
        </div>
      </div>
    </section>
  );
};
