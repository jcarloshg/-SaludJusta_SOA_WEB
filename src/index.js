import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import { theme } from './components';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider theme={theme}>
    <App />
  </NextUIProvider>
);
