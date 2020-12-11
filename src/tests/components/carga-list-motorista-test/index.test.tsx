/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render, waitForElement } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Fretamento from '../../../components/carga-list-motorista';

describe('Tests for Fretamento component', () => {
  it('Should do something', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <Fretamento />
      </RecoilRoot>,
    );
    const input = queryByTestId('input-filtro');
    console.log(input);

    // expect(queryByTestId('test')).toBeTruthy();
  });
});
