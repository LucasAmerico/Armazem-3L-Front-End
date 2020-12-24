/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Fretamento from '../pages/Motorista/components/carga-list-motorista';
import '@testing-library/jest-dom/extend-expect';
import CargaLista from '../pages/Cargas/components/carga-list';

describe('Tests for Cargas component', () => {
  it('Renders Correctly', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <CargaLista />
      </RecoilRoot>,
    );

    expect(queryByTestId('data-testid')).toBeTruthy();
  });
  it('Should screem have title Cargas', async () => {
    // renderizar o componente
    render(
      <RecoilRoot>
        <CargaLista />
      </RecoilRoot>,
    );

    expect(screen.getByTestId('title')).toHaveTextContent('Listagem de cargas');
  });
  it('Should input accept texts', async () => {
    // renderizar o componente
    const { getByTestId } = render(
      <RecoilRoot>
        <CargaLista />
      </RecoilRoot>,
    );

    const input = getByTestId('search');
    fireEvent.change(input, { target: { value: 'Sama' } });
    expect(input).toHaveValue('Sama');
  });
});
