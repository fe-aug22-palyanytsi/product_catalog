import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { PhonesPage } from './components/PhonesPage/PhonesPage';

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="phones" element={<PhonesPage />} />

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
