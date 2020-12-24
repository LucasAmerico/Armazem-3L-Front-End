/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import {
  fireEvent,
  getByRole,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import { RecoilRoot } from 'recoil';
import Lista from '../components/List/list';
import ProdutosLista from '../pages/Produtos/components/produtos-list';

const ListaProdutos = {
  Produtos: [
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
  ],
};
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
    expect(queryByTestId('lista')).toBeTruthy();
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
    render(
      <RecoilRoot>
        <ProdutosLista />
      </RecoilRoot>,
    );

    const lista = screen.getByTestId('lista');
    expect(lista.getElementsByTagName('nav').length).toBe(1);
  });

  it('should open the modal when click the add button', async () => {
    render(
      <RecoilRoot>
        <ProdutosLista />
      </RecoilRoot>,
    );
    expect(screen.queryByText(/Cadastro de Produto/i)).toBeNull();
    userEvent.click(screen.getByTestId('button-add'));
    expect(screen.queryByText(/Cadastro de Produto/i)).toBeTruthy();
  });
});
