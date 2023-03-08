import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './components/weather-menu/weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);


