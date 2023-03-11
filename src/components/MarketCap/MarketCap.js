import { getMarketCapEth } from 'API/getDataMarketCap';
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
        <div className="flex items-center  m-1 p-4  border border-solid border-indigo-500/75 rounded">
          <RiEarthFill className="mr-2 text-purple-600" size={48} />
          <div className="flex justify-between ">
            <h3 className="w-40 text-lg">MARKET CAP ETH</h3>
            <p className="text-lg font-bold">{marketCap}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};
