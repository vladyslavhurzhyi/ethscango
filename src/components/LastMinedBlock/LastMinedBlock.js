import { useState, useEffect } from 'react';
import { getLastMinedBlock } from '../../API/getData';

import { SiCodesandbox } from 'react-icons/si';

export const LastMinedBlock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getMinedBlockData() {
      const data = await getLastMinedBlock();
      setData(data);
      console.log('inside component', data);
    }
    getMinedBlockData();
  }, []);

  return (
    <div className="flex items-center  m-1 p-4 w-1/4 border border-solid border-indigo-500/75 rounded">
      <SiCodesandbox className="mr-2 text-purple-600" size={48} />
      <div className="flex justify-between w-full">
        <h3 className="w-40 text-lg">The most recently mined block</h3>
        <p className="text-lg font-bold">{data}</p>
      </div>
    </div>
  );
};
