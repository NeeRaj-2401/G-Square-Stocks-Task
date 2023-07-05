import React from 'react';
import { Line } from 'react-chartjs-2';

function StockChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.datetime),
    datasets: [
      {
        label: 'High',
        data: data.map((item) => item.high),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="m-5 max-w-3xl mx-auto">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default StockChart;
