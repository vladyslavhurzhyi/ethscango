import axios from 'axios';

export const getMarketCapEth = async () => {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets');
    const { data } = response.data;
    const marketCapEth = data[1].marketCapUsd;
    const ethMC = marketCapEth / 1000000000;

    return '$' + ethMC.toFixed(2) + ' B';
  } catch (error) {
    console.log(error);
  }
};
