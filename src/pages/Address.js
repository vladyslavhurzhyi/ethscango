import { Helmet } from 'react-helmet-async';

export default function Address() {
  return (
    <div>
      {
        <Helmet>
          <title>Address</title>
        </Helmet>
      }
      <h1>Address Page</h1>
    </div>
  );
}
