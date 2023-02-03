import axios from 'axios';

export const getMarketCapEth = async () => {
  try {
    const { data } = await axios.get('https://api.coincap.io/v2/assets');

    const marketCapEth = data.data[1].marketCapUsd;
    console.log('marketCapEth', Math.floor(marketCapEth));
  } catch (error) {
    console.log(error);
  }
};
