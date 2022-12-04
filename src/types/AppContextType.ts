import { Phone } from './Phone';

export type AppContextType = {
  favList: Phone[];
  addItem: (phone: Phone) => void;
  removeItem: (id: number) => void
};
