import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import { DataProvider } from './contexts/DataContext';
import { registerSW } from 'virtual:pwa-register'
registerSW()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
       <App />
    </DataProvider>
  </React.StrictMode>,
)
