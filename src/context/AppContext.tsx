import * as React from 'react';
import { AppContextType } from '../types/AppContextType';
import { Phone } from '../types/Phone';

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<Props> = ({ children }) => {
  const [favList, setFavList] = React.useState<Phone[]>([]);

  const addItem = (phone: Phone) => {
    setFavList([...favList, phone]);
  };

  const removeItem = (id: number) => {
    const filteredList = favList.filter(item => item.id !== id);

    setFavList(filteredList);
  };

  return (
    <AppContext.Provider value={{ favList, addItem, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
