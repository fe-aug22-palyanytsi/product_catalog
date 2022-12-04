import { createContext, ReactNode } from 'react';
import { useStorage } from './hooks/useStorage';

const UserFavourites = createContext([]);

type Props = {
  children: ReactNode;
};

const UserFavouritesProvider: React.FC<Props> = ({ children }) => {
  const favouritesFromContext = useStorage([], 'Favorite')[0];

  return (
    <UserFavourites.Provider value={favouritesFromContext}>
      { children }
    </UserFavourites.Provider>
  );
};

const UserFavouritesConsumer = UserFavourites.Consumer;

export { UserFavourites, UserFavouritesProvider, UserFavouritesConsumer };
