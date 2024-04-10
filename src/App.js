import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalog from './pages/catalog';
import Main from './pages/main';
import NotFound from './pages/not-found';
import Portfolio from './pages/portfolio';
import Contacts from './pages/contacts';
import Layout from './pages/layout';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
            <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ScrollToTopButton />
      </div>

  );
}

export default App;
