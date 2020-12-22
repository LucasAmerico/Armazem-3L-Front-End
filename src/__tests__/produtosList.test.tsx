/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ProdutosLista from '../pages/Produtos/components/produtos-list';

const produtos = [
  {
    id: 1,
    nome: 'Playstation 5',
    peso: 1.0,
    preco: 1.0,
    qtd: 100,
  },
  {
    id: 2,
    nome: 'Xbox 1',
    peso: 1.0,
    preco: 1.0,
    qtd: 200,
  },
  {
    id: 3,
    nome: 'Nintendo',
    peso: 1.0,
    preco: 1.0,
    qtd: 300,
  },
];

describe('Tests for ProdutosLista component', () => {
  it('Renders Correctly', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <ProdutosLista />
      </RecoilRoot>,
    );

    expect(queryByTestId('input-search')).toBeTruthy();
    expect(queryByTestId('button-add')).toBeTruthy();
    expect(queryByTestId('list')).toBeTruthy();
  });
  it('Should screem have title Produtos', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <ProdutosLista />
      </RecoilRoot>,
    );
    const titulo = screen.getByTestId('title');

    expect(titulo.textContent).toBe(' Produtos ');
  });
  it('Should present a list of products', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <ProdutosLista />
      </RecoilRoot>,
    );

    const lista = screen.getByTestId('lista');
    console.log(lista);
  });
});
