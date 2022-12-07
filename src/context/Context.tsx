import React, { ReactNode } from 'react';
import { useStorage } from '../hooks/useStorage';
import { Phone } from '../types/Phone';

interface IUserFavorites {
  favourites: Phone[],
  setFavourites: (phone: Phone[]) => void,
  shop: Phone[],
  setShop: (phone: Phone[]) => void,
  totalProduct: Phone[],
  setTotalPoduct: (phone: Phone[]) => void,
}

export const UserContext = React.createContext<IUserFavorites>({
  favourites: [],
  setFavourites: () => {},
  shop: [],
  setShop: () => {},
  totalProduct: [],
  setTotalPoduct: () => {},
});

type Props = {
  children: ReactNode;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useStorage([], 'Favorite');
  const [shop, setShop] = useStorage([], 'Shop');
  const [totalProduct, setTotalPoduct] = useStorage([], 'TotalProduct');

  const contextValues = {
    favourites,
    setFavourites,
    shop,
    setShop,
    totalProduct,
    setTotalPoduct,
  };

  return (
    <UserContext.Provider value={contextValues}>
      { children }
    </UserContext.Provider>
  );
};
