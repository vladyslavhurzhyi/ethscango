import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/Home'));
const AddressPage = lazy(() => import('../pages/Address'));
const TransactionDetailsPage = lazy(() =>
  import('../pages/TransactionDetails')
);
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const App = () => {

  return (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/transaction" element={<TransactionDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>);
    </Routes>
  )
};

export default App;
