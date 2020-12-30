/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CardGrafico from '../components/cards/CardGrafico';

jest.mock('../components/chart/Chart', () => () => 'Grafico');

it('Should render component', async () => {
  // renderizar o componente

  const { container } = render(
    <RecoilRoot>
      <CardGrafico
        color="#DAD8D8"
        qtdAceitas={10}
        qtdPendente={10}
        qtdRejeitada={10}
      />
    </RecoilRoot>,
  );
  const card = screen.getByTestId('card') as HTMLInputElement;
  expect(card).toBeTruthy();
});
