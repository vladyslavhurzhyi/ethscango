import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';

import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/ethscango">
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
