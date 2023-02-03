import { Chart } from 'components/Chart/Chart';
import { LastMinedBlock } from 'components/LastMinedBlock/LastMinedBlock';
import { Helmet } from 'react-helmet-async';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { GasPrice } from 'components/GasPrice/GasPrice';
export default function Home() {
  return (
    <div>
      {
        <Helmet>
          <title>Home</title>
        </Helmet>
      }
      <h1 className="text-3xl font-bold underline">EthScanGo</h1>
      <SearchBox />
      <LastMinedBlock />
      <GasPrice />
      <div>
        <Chart />
      </div>
    </div>
  );
}
