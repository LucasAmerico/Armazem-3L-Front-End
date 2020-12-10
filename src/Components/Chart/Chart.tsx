import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

interface Props {
  quantidadePendente: any;
  quantidadeAceitas: any;
}
const Chart = ({ quantidadePendente, quantidadeAceitas }: Props) => {
  const [chartState, setChartState] = useState({
    labels: ['Pendentes', 'Aceitas'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['#C9DE00', '#2FDE00'],
        hoverBackgroundColor: ['#4B5000', '#175000'],
        data: [quantidadePendente, quantidadeAceitas],
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
