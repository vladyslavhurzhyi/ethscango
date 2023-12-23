import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="mx-auto h-10 w-[400px]">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h2 className=" text-blue-800 text-2xl">Error 404: Page Not Found</h2>
      <p>😮Sorry we couldn't find that page 😮</p>
    </div>
  );
}
