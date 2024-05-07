// Experimental, for testing purpose
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { format } from 'date-fns';
import { ChartTitle, ChartWrapper } from './chart.style';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.defaults.color = 'white';

const options = {
  responsive: true,
  layout: {},
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const dataTemplate = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: 'white',
    },
  ],
};

const AMOUNT_OF_DAYS_TO_FETCH = 5;

export const Chart = () => {
  const [data, setData] = useState();
  const [currentPrice, setCurrentPrice] = useState();

  useEffect(() => {
    updateData();
  }, []);

  const fetchData = async (url: string) => await (await fetch(url)).json();

  const updateData = async () => {
    let datesToFetch: string[] = [];
    for (let i = 0; i < AMOUNT_OF_DAYS_TO_FETCH; i++) {
      const d = new Date();
      let date = 'latest';
      if (i < AMOUNT_OF_DAYS_TO_FETCH) {
        d.setDate(d.getDate() - i);
        date = format(d, 'yyyy-MM-dd');
      }
      datesToFetch.push(date);
    }

    const fetchedData = await Promise.all(
      datesToFetch.reverse().map(async (d) => {
        try {
          return await fetchData(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${d}/currencies/btc.min.json`);
        } catch {
          return null;
        }
      })
    );

    const washedData = fetchedData.filter((data) => data).map((data) => data.btc.usd);
    const newData: any = dataTemplate;

    let lastNumber = 0;
    const backgroundColors = washedData.map((d) => {
      if (lastNumber < d) {
        lastNumber = d;
        return '#6eeb83';
      }
      lastNumber = d;
      return '#eb816e';
    });

    newData.labels = datesToFetch;
    newData.datasets[0].data = washedData;
    newData.datasets[0].backgroundColor = backgroundColors;
    setData(newData);
    setCurrentPrice(washedData[washedData.length - 1]);
  };

  const value = (currentPrice || 0).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (!data) {
    return null;
  }

  return (
    <ChartWrapper>
      <ChartTitle>Current BTC value: {value}</ChartTitle>
      <Bar options={options} data={data} />
    </ChartWrapper>
  );
};
