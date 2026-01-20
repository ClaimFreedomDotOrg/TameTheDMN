import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import BrandingPage from './components/BrandingPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/branding" element={<BrandingPage />} />
    </Routes>
  );
};

export default App;