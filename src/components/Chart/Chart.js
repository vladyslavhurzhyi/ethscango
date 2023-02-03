import React from 'react';
import { format } from 'date-fns';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { getPriceEthMonth } from 'API/getPriceForChart';
import { useEffect } from 'react';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const Chart = () => {
  const [price, setPrice] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    async function getDataPrice() {
      const data = await getPriceEthMonth();
      setPrice(data.map(item => Math.floor(item.priceUsd)));
      setDate(data.map(item => format(item.time, 'MM/dd/yyyy')));
    }
    getDataPrice();
  }, []);

  const data = {
    labels: date.map(item => item),
    datasets: [
      {
        label: 'Price $',
        data: price.map(item => item),
        borderColor: 'black',
        pointBorderWidth: 0,
        pointBackgroundColor: 'transparent',
        borderWidth: 2.5,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
    gridLines: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      {price.length > 1 && (
        <div style={{ maxWidth: '300px', maxHeight: '200px' }}>
          <Line data={data} options={options}></Line>
        </div>
      )}
    </>
  );
};
