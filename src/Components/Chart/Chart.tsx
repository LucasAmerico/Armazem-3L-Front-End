import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

interface Props {
  quantidadePendente: any;
  quantidadeAceitas: any;
  quantidadeRejeitada: any;
}
const Chart = ({
  quantidadePendente,
  quantidadeAceitas,
  quantidadeRejeitada,
}: Props) => {
  const [chartState, setChartState] = useState({
    labels: ['Pendentes', 'Aceitas', 'Rejeitadas'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['#C9DE00', '#2FDE00', '#e41321'],
        hoverBackgroundColor: ['#4B5000', '#175000', '#205000'],
        data: [quantidadePendente, quantidadeAceitas, quantidadeRejeitada],
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
