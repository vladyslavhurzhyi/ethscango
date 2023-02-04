import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getTransactionData } from 'API/getData';

const pageTitle = 'Transaction Details';

export default function TransactionDetails() {
  const { transactionHash } = useParams();
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTransaction() {
      try {
        const transactionDetails = await getTransactionData(transactionHash);

        if (!transactionDetails) {
          return navigate('/error-page');
        }

        setTransaction({ ...transactionDetails });
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTransaction();
  }, [transactionHash, navigate]);

  if (!transaction) {
    return null;
  }

  const { hash, blockNumber, from, to, value } = transaction;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <main className="px-2 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mb-5">{pageTitle}</h1>
          <p className="font-bold mb-3">Overview</p>

          {transaction && (
            <div className="grid grid-cols-4 md:gap-4 text-sm overflow-x-auto">
              <div>Transaction Hash:</div>
              <div className="col-span-4 md:col-span-3 mb-2 md:mb-0">
                {hash}
              </div>

              <div>Block Number:</div>
              <div className="col-span-4 md:col-span-3 mb-2 md:mb-0">
                {blockNumber}
              </div>

              <div>From:</div>
              <div className="col-span-4 md:col-span-3 mb-2 md:mb-0">
                {from}
              </div>

              <div>To:</div>
              <div className="col-span-4 md:col-span-3 mb-2 md:mb-0">{to}</div>

              <div>Value:</div>
              <div className="col-span-4 md:col-span-3 mb-2 md:mb-0">
                {value} Ether
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
