import { getEthPrice } from 'API/getData';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaEthereum } from 'react-icons/fa';

export const EthPrice = () => {
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    async function getEthPriceData() {
      const priceEth = await getEthPrice();
      setEthPrice(priceEth);
    }
    getEthPriceData();
  }, []);

  return (
    <>
      {ethPrice ? (
        <div className="flex items-center  m-1 p-4 w-1/4 border border-solid border-indigo-500/75 rounded">
          <FaEthereum className="mr-2 text-purple-600" size={48} />
          <div className="flex justify-between w-full">
            <h3 className="w-40 text-lg">ETHER PRICE</h3>
            <p className="text-lg font-bold">{ethPrice}$</p>
          </div>
        </div>
      ) : null}
    </>
  );
};
