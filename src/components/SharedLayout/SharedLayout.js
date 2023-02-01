import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

import { AppBar } from '../AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      {/* <ToastContainer /> */}
    </div>
  );
};
