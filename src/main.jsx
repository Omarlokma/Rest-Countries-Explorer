import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { CountryProvider } from './context/CountryContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Rest-Countries-Explorer">
      <CountryProvider>
        <App />
      </CountryProvider>
    </BrowserRouter>
  </StrictMode>
);
