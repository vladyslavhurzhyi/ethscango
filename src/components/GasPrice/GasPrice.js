import { useState, useEffect } from 'react';
import { getGasPrice } from '../../API/getData';
import { RiGasStationFill } from 'react-icons/ri';

export const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState(0);

  useEffect(() => {
    async function getGasPriceData() {
      const data = await getGasPrice();
      setGasPrice(data);
    }
    getGasPriceData();
  }, []);

  return (
    <>
      {gasPrice > 1 ? (
        <div className="flex items-center  m-1 p-4  border border-solid border-indigo-500/75 rounded">
          <RiGasStationFill className="mr-2 text-purple-600" size={48} />
          <div className="flex justify-between w-full">
            <h3 className="w-40 text-lg">MED GAS PRICE</h3>
            <p className="text-lg font-bold">{Math.floor(gasPrice)} Gwei</p>
          </div>
        </div>
      ) : null}
    </>
  );
};
