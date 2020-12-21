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
  const [chartState] = useState({
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
            fontSize: 15,
            fontColor: '#000',
            position: 'top',
            defaultFontFamily: "'Helvetica'",
          },
          legend: {
            display: true,
            position: 'right',
            labels: {
              boxWidth: 20,
            },
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem: any, data: any) => {
                const dataset = data.datasets[tooltipItem.datasetIndex];
                const value = dataset.data[tooltipItem.index];
                return `${data.labels[tooltipItem.index]}: ${value}%`;
              },
            },
          },
        }}
      />
    </div>
  );
};
export default Chart;
