import { Chart } from 'components/Chart/Chart';
import { LastMinedBlock } from 'components/LastMinedBlock/LastMinedBlock';
import { Helmet } from 'react-helmet-async';
import { Hero } from 'components/Hero/Hero';
import { GasPrice } from 'components/GasPrice/GasPrice';
import { TransactionList } from 'components/TransactionList/TransactionList';
import { MarketCap } from 'components/MarketCap/MarketCap';
import { EthPrice } from 'components/EthPrice/EthPrice';

export default function Home() {
  return (
    <div>
      {
        <Helmet>
          <title>Home</title>
        </Helmet>
      }
      <Hero />
      <div className="block">
        <div>
          <EthPrice />
          <LastMinedBlock />
        </div>
        <div>
          <GasPrice />
          <MarketCap />
        </div>

        <Chart />
      </div>
      <div>
        <TransactionList />
      </div>
    </div>
  );
}
