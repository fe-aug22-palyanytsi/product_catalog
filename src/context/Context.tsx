import React, { ReactNode } from 'react';
import { useStorage } from '../hooks/useStorage';
import { Phone } from '../types/Phone';

interface IUserFavorites {
  favourites: Phone[],
  setFavourites: (phone: Phone[]) => void,
  shop: Phone[],
  setShop: (phone: Phone[]) => void,
}

export const UserContext = React.createContext<IUserFavorites>({
  favourites: [],
  setFavourites: () => {},
  shop: [],
  setShop: () => {},
});

type Props = {
  children: ReactNode;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useStorage([], 'Favorite');
  const [shop, setShop] = useStorage([], 'Shop');

  const contextValues = {
    favourites,
    setFavourites,
    shop,
    setShop,
  };

  return (
    <UserContext.Provider value={contextValues}>
      { children }
    </UserContext.Provider>
  );
};
