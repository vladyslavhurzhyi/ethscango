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
      {transaction.length > 1 && (
        <div className="container flex  max-w-max m-auto">
          {/* <div className="flex bg-slate-50"> */}
          <ul className="flex flex-col items-center ">
            <p className="font-bold">Latest Transactions</p>
            {transaction.length > 0 &&
              transaction.map(item => {
                return (
                  <li
                    key={item.hash}
                    className="border border-solid border-indigo-500/75 rounded m-1 mb-2 p-2"
                  >
                    <div className="flex overflow-hidden max-w-sm items-center">
                      <FaStream style={{ marginRight: '5px' }} />
                      <Link
                        to={`transactions/${item.hash}`}
                        className="text-ellipsis overflow-hidden text-blue-500 hover:text-blue-900"
                      >
                        <p className="text-sm text-ellipsis overflow-hidden">
                          {item.hash}
                        </p>
                      </Link>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-xs text-ellipsis overflow-hidden">
                        from
                      </p>
                      <Link to={`address/${item.from}`}>
                        <p className="text-xs text-ellipsis overflow-hidden text-blue-500 hover:text-blue-900">
                          {item.from}
                        </p>
                      </Link>

                      <p className="text-xs text-ellipsis overflow-hidden">
                        to
                      </p>
                      <Link
                        to={`address/${item.from}`}
                        className="text-ellipsis overflow-hidden text-blue-500 hover:text-blue-900"
                      >
                        <p className="text-xs">{item.to}</p>
                      </Link>
                    </div>
                  </li>
                );
              })}
            <div className="w-full mx-auto">
              <button className="block w-full text-xs text-sky-500 hover:bg-sky-600 hover:text-slate-50  bg-gray-300 rounded-sm p-1 mb-1">
                View all transactions
              </button>
            </div>
          </ul>
        </div>
      )}
      {/* </div> */}
    </>
  );
};
