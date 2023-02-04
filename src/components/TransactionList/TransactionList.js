import { getTransactionListHash } from 'API/getData';
import { useState, useEffect } from 'react';
import { FaStream } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const TransactionList = () => {
  const [txHash, setTxHash] = useState([]);

  useEffect(() => {
    async function getTxHash() {
      const data = await getTransactionListHash();
      setTxHash(data);
      console.log('Tx Hash Data', data);
    }
    getTxHash();
  }, []);

  return (
    <>
      <div>
        {txHash.length > 0 &&
          txHash.map(item => {
            return (
              <ul>
                <li>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaStream style={{ marginRight: '5px' }} />
                    <Link to={`transactions/${item}`}>{item}</Link>
                  </div>
                </li>
              </ul>
            );
          })}
      </div>
    </>
  );
};
