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
      {gasPrice ? (
        <div>
          <hr />
          <RiGasStationFill />
          <p>MED GAS PRICE</p>
          <b>{Math.floor(gasPrice)} Gwei</b>
          <hr />
        </div>
      ) : null}
    </>
  );
};
