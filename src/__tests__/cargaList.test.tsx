/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
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

  it('Should change search input value', async () => {
    // renderizar o componente

    const { getByLabelText } = render(
      <RecoilRoot>
        <CargaLista />
      </RecoilRoot>,
    );

    const input = getByLabelText('search') as HTMLInputElement;
    expect(input.value).toBe('');

    input.value = 'TEST VALUE';
    fireEvent.change(input);

    expect(input.value).toBe('TEST VALUE');
  });

  it('Should open modal cadastro when button is clicked', async () => {
    // renderizar o componente

    render(
      <RecoilRoot>
        <CargaLista />
      </RecoilRoot>,
    );

    expect(() => screen.getByText('Cadastro de Carga')).toThrow(
      'Unable to find an element',
    );

    fireEvent.click(screen.getByLabelText('button'));
    expect(screen.getByText('Cadastro de Carga')).toBeTruthy();
  });

  it('Should have a list of itens', async () => {
    // renderizar o componente

    const { getByLabelText } = render(
      <RecoilRoot>
        <CargaLista />
      </RecoilRoot>,
    );

    const list = getByLabelText('listagem') as HTMLInputElement;

    expect(list).toBeTruthy();
  });
});
