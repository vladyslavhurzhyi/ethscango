// import { Helmet } from 'react-helmet';
import { SearchBox } from 'components/SearchBox/SearchBox';
export default function Home() {
  return (
    <div>
      {/* <Helmet>
        <title>Home</title>
      </Helmet> */}
      <h1 className="text-3xl font-bold underline">EthScanGo</h1>
      <SearchBox />
    </div>
  );
}
