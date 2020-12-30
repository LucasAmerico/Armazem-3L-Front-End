/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CardComponent from '../components/cards/CardComponent';

it('Should do something', async () => {
  // renderizar o componente

  const { queryByTestId } = render(
    <RecoilRoot>
      <CardComponent color="x" titulo="c" quantidade="4" />
    </RecoilRoot>,
  );

  const input = queryByTestId('card');

  expect(input).toBeTruthy();
});
