import axios from 'axios';

export const getPriceEthMonth = async () => {
  try {
    const response = await axios.get(
      'https://api.coincap.io/v2/assets/ethereum/history?interval=d1'
    );
    const data = response.data;

    console.log('data.rev', data.data.reverse());
    const dataReverse = data.data.reverse();

    const price = dataReverse.map(item => {
      return item;
    });

    const pricePerMonth = price.slice(330);

    return pricePerMonth;
  } catch (error) {
    console.log(error);
  }
};
