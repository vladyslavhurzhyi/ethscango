import { getBalance, getEthPrice, getTransactionLis } from 'API/getData';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export default function Address() {
  const { addressnum } = useParams(null);
  const [balance, setBalance] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);
  const [transaction, setTransaction] = useState([]);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    async function getBalanceData() {
      const balanceData = await getBalance(addressnum);
      setBalance(balanceData);

      const priceEth = await getEthPrice();
      setEthPrice(priceEth);

      const data = await getTransactionLis();
      setTransaction(data);
    }

    getBalanceData();
  }, [addressnum]);

  const hoverOnOff = () => {
    setSignUp(p => !p);
  };

  return (
    <>
      {
        <Helmet>
          <title>Address</title>
        </Helmet>
      }

      <main className="px-2 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mb-5">Address {addressnum}</h1>
          <p className="font-bold mb-3">Overview</p>

          {balance && ethPrice && (
            <>
              <div className="grid grid-cols-4 md:gap-4 text-sm overflow-x-auto">
                <div>Balance:</div>
                <div className="col-span-4 md:col-span-3 mb-2 md:mb-0">
                  {balance} Ether
                </div>

                <div>Ether Value:</div>
                <div className="col-span-4 md:col-span-3 mb-2 md:mb-0">
                  {ethPrice * Number(balance)} $
                  <p className="text-sm text-stone-300">(@ ${ethPrice}/ETH)</p>
                </div>
              </div>

              {signUp && <div>Register to unlock this content</div>}
              <div
                className="blur-sm"
                onMouseEnter={hoverOnOff}
                onMouseLeave={hoverOnOff}
              >
                <ul>
                  {transaction.map(item => (
                    <li key={item.hash}>{item.hash}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
