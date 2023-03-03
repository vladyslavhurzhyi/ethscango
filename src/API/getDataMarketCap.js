import axios from 'axios';

export const getMarketCapEth = async () => {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets');
    const { data } = response.data;
    const marketCapEth = data[1].marketCapUsd;
    return '$' + Math.floor(marketCapEth);
  } catch (error) {
    console.log(error);
  }
};
