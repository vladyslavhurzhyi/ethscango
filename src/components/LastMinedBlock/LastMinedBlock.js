import { useState, useEffect } from 'react';
import { getLastMinedBlock } from '../../API/getData';

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
    <div>
      <hr />
      <p>The most recently mined block</p>
      <b>{data}</b>
      <hr />
    </div>
  );
};
