import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import List from './Pages/List'
import Bogush from './Pages/bagushevichPage'
import Brovka from './Pages/brovkaPage';
import Bogdanovich from './Pages/bogdanovichPage';
import Dorozhn from './Pages/dorozhnPage';
import Bidulya from './Pages/bidulyaPage';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/list" element={< List />} />
        <Route path="/bogush" element={< Bogush />} />
        <Route path="/brovka" element={<Brovka/>} />
        <Route path="/bogdanovich" element={<Bogdanovich/>} />
        <Route path="/dorozhn" element={<Dorozhn/>} />
        <Route path="/bidulya" element={<Bidulya/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
