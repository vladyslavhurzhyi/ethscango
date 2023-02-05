import { getTransactionLis } from 'API/getData';
import { useState, useEffect } from 'react';
import { FaStream } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const TransactionList = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    async function getTransaction() {
      const data = await getTransactionLis();
      setTransaction(data);
    }
    getTransaction();
  }, []);

  return (
    <>
      <div className="container max-w-xs">
        <ul>
          {transaction.length > 0 &&
            transaction.map(item => {
              return (
                <li key={item.hash}>
                  <div className="flex flex-col mb-2 md:mb-0">
                    <FaStream style={{ marginRight: '5px' }} />
                    <Link to={`transactions/${item.hash}`}>
                      <p className="text-sm">{item.hash}</p>
                    </Link>

                    <p className="text-xs">from</p>
                    <Link to={`address/${item.from}`}>
                      <p className="text-xs">{item.from}</p>
                    </Link>

                    <p className="text-xs">to</p>
                    <Link to={`address/${item.from}`}>
                      <p className="text-xs">{item.to}</p>
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
