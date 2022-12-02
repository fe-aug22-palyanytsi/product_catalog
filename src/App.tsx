import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';

import 'normalize.css';
import './styles/main.scss';

import { Header } from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => (
  <div className="App">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="phones" element={<PhonesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
