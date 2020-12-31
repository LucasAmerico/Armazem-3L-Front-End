/* eslint-disable no-undef */
import React from 'react';
import { render  } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Registro from '../components/registrar/index';

it('Should render component correctly', async () => {
  // renderizar o componente

  const { queryByTestId } = render(
    <RecoilRoot>
      <Registro />
    </RecoilRoot>,
  );
  expect(queryByTestId('form-cadastro')).toBeTruthy();
});