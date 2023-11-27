import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import System from './components/System';
import Listas from './components/Listas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/system" element={<System />} />
          <Route path="/listas" element={<Listas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
