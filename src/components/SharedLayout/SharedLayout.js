import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import { ToastContainer } from 'react-toastify';

import { AppBar } from '../AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <div>
      <Helmet defaultTitle="EthScanGo" titleTemplate="%s - EthScanGo" />
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      {/* <ToastContainer /> */}
      <Footer />
    </div>
  );
};
