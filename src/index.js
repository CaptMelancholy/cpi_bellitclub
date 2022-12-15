import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import List from './Pages/List'
import Person from './Pages/Person';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/list" element={< List />} />
        <Route path="/:id" element={< Person />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
