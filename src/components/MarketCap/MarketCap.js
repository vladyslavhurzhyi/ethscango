import { getMarketCapEth } from 'API/getDataMarketCap';
import SmallSkeleton from 'components/Skeleton/Skeleton';
import { useEffect } from 'react';
import { useState } from 'react';
import { RiEarthFill } from 'react-icons/ri';

export const MarketCap = () => {
  const [marketCap, setMarketCap] = useState(null);

  useEffect(() => {
    async function getMarketCapData() {
      const data = await getMarketCapEth();
      setMarketCap(data);
    }
    getMarketCapData();
  }, []);

  return (
    <>
      {marketCap ? (
        <div className="flex items-center  p-4 m-1 border border-solid border-indigo-500/75 rounded">
          <RiEarthFill className=" text-purple-600 " size={48} />

          <div className="flex justify-between items-center">
            <h3 className="w-40 text-lg">Market Cap ETH</h3>
            <p className="text-lg font-bold  whitespace-nowrap">{marketCap}</p>
          </div>
        </div>
      ) : (
        <SmallSkeleton />
      )}
    </>
  );
};
