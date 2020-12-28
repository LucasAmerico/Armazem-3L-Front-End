/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CargaList from '../pages/Cargas/components/carga-list';

it('Should change search input value', async () => {
  // renderizar o componente

  const { getByLabelText } = render(
    <RecoilRoot>
      <CargaList />
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
      <CargaList />
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
      <CargaList />
    </RecoilRoot>,
  );

  const list = getByLabelText('listagem') as HTMLInputElement;

  expect(list).toBeTruthy();
});
