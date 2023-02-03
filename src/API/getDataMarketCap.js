import axios from 'axios';

export const getMarketCapEth = async () => {
  try {
    // const { data } = await axios.get('https://api.coincap.io/v2/assets');
    // const marketCapEth = data.data[1].marketCapUsd;
    //   console.log('marketCapEth', Math.floor(marketCapEth));

    const response = await axios.get('https://api.coincap.io/v2/assets');
    const { data } = response.data;
    const marketCapEth = data.data[1].marketCapUsd;
    console.log('marketCapEth', Math.floor(marketCapEth));
    return marketCapEth;
  } catch (error) {
    console.log(error);
  }
};
