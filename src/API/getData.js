import axios from 'axios';
import { ethers } from 'ethers';

const network = 'homestead';

const provider = ethers.getDefaultProvider(network, {
  etherscan: 'RRGX2T9UHU34WNT1V78GWJMGFSUKFFX6ID',
  infura: '80a2cde872574b6380285aedb7c3fc77',
  alchemy: 'NGRnDW4RdxfHH_ZgkWkvds6I3wiEQcGi',
  // pocket: {
  //   applicationId: '49753bca74527ebbbfcd8d63',
  //   applicationSecretKey: 'da5ab6ab31ea0cb93b639a4f86648449',
  // },
});

export const getTransactionData = async transactionHash => {
  try {
    const data = await provider.getTransaction(transactionHash);

    if (!data) return null;

    const { hash, blockNumber, from, to, value } = data;

    return {
      hash,
      blockNumber,
      from,
      to,
      value: ethers.utils.formatEther(value._hex),
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTransactionListHash = async () => {
  try {
    const data = await provider.getBlock();
    const transaction = data.transactions.slice(0, 10);
    console.log('transactionList', transaction);

    return transaction;
  } catch (error) {
    console.log(error);
  }
};

export const getGasPrice = async () => {
  try {
    const data = await provider.getGasPrice();
    const gasPrice = ethers.utils.formatUnits(data, 'gwei');

    return Number(gasPrice);
  } catch (error) {
    console.log(error);
  }
};

export const getEthPrice = async () => {
  try {
    const { data } = await axios.get(
      'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'
    );

    console.log('ETH Price in USD', data.USD);
  } catch (error) {
    console.log(error);
  }
};

export const getLastMinedBlock = async () => {
  try {
    const data = await provider.getBlockNumber();
    console.log('last mined block number', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
