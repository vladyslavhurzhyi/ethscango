import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/Home'));
const AddressPage = lazy(() => import('../pages/Address'));
const TransactionDetailsPage = lazy(() =>
  import('../pages/TransactionDetails')
);
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const App = () => {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList = 'bg-white dark:bg-slate-700 dark:text-white';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="address/:addressnum" element={<AddressPage />} />
        <Route
          path="transactions/:transactionHash"
          element={<TransactionDetailsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
