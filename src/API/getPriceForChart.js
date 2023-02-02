import axios from 'axios';

export const getPriceEthMonth = async () => {
  try {
    const { data } = await axios.get(
      'https://api.coincap.io/v2/assets/ethereum/history?interval=d1'
    );
    const dataReverse = data.data.reverse();

    const price = dataReverse.map(item => {
      return item;
    });

    const pricePerMonth = price.slice(0, 30);

    console.log('pricePerMonth', pricePerMonth);

    return pricePerMonth;
  } catch (error) {
    console.log(error);
  }
};
