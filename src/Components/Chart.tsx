import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

interface IProps {
}

interface IState {
   chartData: string[]
  }

class Chart extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      chartData:{
        labels: ['Pendentes', 'Aceitas']
      datasets:[
          {
            label:'Quantidade',
            data:[
              10,
              30
            ],
            backgroundColor:[
              'rgba(150, 187, 136, 0.6)',
              'rgba(224, 220, 116, 0.6)'
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          options={{}}
        />
      </div>
    );
  }
}
export default Chart;
