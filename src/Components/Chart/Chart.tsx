import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

// const CardComponent = ({ titulo, quantidade, color }: Props) => {
const Chart = () => {
  const [chartState, setChartState] = useState({
    labels: ['Pendentes', 'Aceitas'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['#C9DE00', '#2FDE00'],
        hoverBackgroundColor: ['#4B5000', '#175000'],
        data: [65, 59],
      },
    ],
  });
  return (
    <div>
      <Pie
        data={chartState}
        options={{
          title: {
            display: true,
            text: 'Quantidade de cargas',
            fontSize: 12,
            fontColor: '#000',
            position: 'top',
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};
export default Chart;
