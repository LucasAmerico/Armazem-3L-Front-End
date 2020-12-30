/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Header from '../components/header/Header';

it('Should do something', async () => {
  // renderizar o componente

  const { queryByTestId } = render(
    <RecoilRoot>
      <Header />
    </RecoilRoot>,
  );

  const input = queryByTestId('app-label');

  expect(input).toBeTruthy();
});
