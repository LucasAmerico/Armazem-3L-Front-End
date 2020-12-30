/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CardDashboard from '../components/cards-dashboard/index';

jest.mock('../components/cards/CardGrafico', () => () => 'Grafico');

it('Should render dashboard', async () => {
  const { queryByTestId } = render(
    <RecoilRoot>
      <CardDashboard />
    </RecoilRoot>,
  );

  expect(queryByTestId('dashboard')).toBeTruthy();
});

it('Should render info cards', async () => {
  const { queryByText } = render(
    <RecoilRoot>
      <CardDashboard />
    </RecoilRoot>,
  );

  expect(queryByText('Cargas Pendentes')).toBeTruthy();
  expect(queryByText('Cargas Aceitas')).toBeTruthy();
  expect(queryByText('Cargas Rejeitadas')).toBeTruthy();
  expect(queryByText('Total de Cargas')).toBeTruthy();
});
