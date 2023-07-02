import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { StoreContextProvider } from './store/store-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
   <StoreContextProvider>
      <App />
   </StoreContextProvider>
  </React.StrictMode>
);

