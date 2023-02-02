import { Chart } from 'components/Chart/Chart';

// import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      {/* <Helmet>
        <title>Home</title>
      </Helmet> */}
      <h1 className="text-3xl font-bold underline">EthScanGo</h1>
      <div>
        <Chart />
      </div>
    </div>
  );
}
