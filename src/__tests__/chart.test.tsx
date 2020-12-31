/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Chart from '../components/chart/Chart';

it('Should render chart', async () => {

  const { queryByTestId } = render(
    <RecoilRoot>
      <Chart
        quantidadePendente={10}
        quantidadeAceitas={10}
        quantidadeRejeitada={10}
      />
    </RecoilRoot>,
  );

  const chart = queryByTestId('chart');
  expect(chart).toBeTruthy();
});

it('Should have a canvas', async () => {

  const {container} =render(
    <RecoilRoot>
      <Chart
        quantidadePendente={10}
        quantidadeAceitas={10}
        quantidadeRejeitada={10}
      />
    </RecoilRoot>,
  );

  const canvas = container.querySelector('canvas');
  expect(canvas).toBeTruthy();
});
