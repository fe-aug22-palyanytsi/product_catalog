import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';

import 'normalize.css';
import './assets/styles/fonts.scss';
import './assets/styles/reset-classes.scss';
import './assets/styles/main.scss';
import './assets/styles/typography.scss';

import { Header } from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => (
  <div className="App">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="phones" element={<PhonesPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
