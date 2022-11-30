import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './components/CatalogPage/CatalogPage';
import { HomePage } from './components/HomePage/HomePage';

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="catalog" element={<CatalogPage />} />

      <Route
        path="*"
        element={
          <p>Page not found</p>
        }
      />
    </Routes>
  </div>
);

export default App;
