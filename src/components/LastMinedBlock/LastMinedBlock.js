import { useState, useEffect } from 'react';
import { getLastMinedBlock } from '../../API/getData';

import { SiCodesandbox } from 'react-icons/si';
import SmallSkeleton from 'components/Skeleton/Skeleton';

export const LastMinedBlock = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getMinedBlockData() {
      const data = await getLastMinedBlock();
      setData(data);
      console.log('inside component', data);
    }
    getMinedBlockData();
  }, []);

  return (
    <>
      {data ? (
        <div className="flex items-center  m-1 p-4  border border-solid border-indigo-500/75 rounded">
          <SiCodesandbox className="mr-2 text-purple-600" size={48} />
          <div className="flex justify-between w-full items-center">
            <h3 className="w-40 text-lg">Last Block</h3>
            <p className="text-lg font-bold">{data}</p>
          </div>
        </div>
      ) : (
        <SmallSkeleton />
      )}
    </>
  );
};
