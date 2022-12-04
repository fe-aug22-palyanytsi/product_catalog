import React, { ReactNode } from 'react';
import { useStorage } from '../hooks/useStorage';
import { Phone } from '../types/Phone';

interface IUserFavorites {
  favourites: Phone[],
  setFavourites: (phone: Phone[]) => void,
}

export const UserFavourites = React.createContext<IUserFavorites>({
  favourites: [],
  setFavourites: () => {},
});

type Props = {
  children: ReactNode;
};

export const UserFavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useStorage([], 'Favorite');

  const contextValues = {
    favourites,
    setFavourites,
  };

  return (
    <UserFavourites.Provider value={contextValues}>
      { children }
    </UserFavourites.Provider>
  );
};
