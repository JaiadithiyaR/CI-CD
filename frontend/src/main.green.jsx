import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./AppGreen";
import { AppMetadataProvider } from './context/AppMetadataContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppMetadataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppMetadataProvider>
  </React.StrictMode>
);
