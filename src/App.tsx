import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'normalize.css';
import './styles/main.scss';

import { HomePage } from './pages/HomePage/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage';
import { ItemPage } from './pages/ItemPage';
import { TabletPage } from './pages/TabletPage/TabletPage';

import { Header } from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';
import { Footer } from './components/Footer/Footer';
import { UserContextProvider } from './context/Context';
import { Shop } from './pages/Shop';

const App: React.FC = () => (
  <UserContextProvider>
    <div className="App">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="tablets" element={<TabletPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="phones/:id" element={<ItemPage />} />
          <Route path="shoppingBag" element={<Shop />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </UserContextProvider>
);

export default App;
