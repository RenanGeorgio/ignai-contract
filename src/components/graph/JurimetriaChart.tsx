import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Chart as ChartJSChart,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

const data: ChartData<'bar' | 'line'> = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: [50, 50, 50, 50],
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
    },
  ],
};

const options: ChartOptions<'bar' | 'line'> = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const JurimetriaChart = () => {
  return (
    <div>
      <div>
        <h2>Jurimetria de busca</h2>
        <p>Total número de processos no período 23.8k</p>
      </div>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default JurimetriaChart;
