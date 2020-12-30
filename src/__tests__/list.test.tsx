/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Lista from '../components/list/list';

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

describe('Tests for list component', () => {
  it('Should render with a list of products', async () => {
    render(
      <RecoilRoot>
        <Lista content={ListaProdutos.Produtos} parent="Produto" />
      </RecoilRoot>,
    );

    expect(ListaProdutos.Produtos.length).toBe(3);
    const li = screen.getByLabelText('listagem');
    expect(li.getElementsByTagName('li').length).toBe(3);
    expect(screen.queryByText(/...Sem cargas para visualizar/i)).toBeFalsy();
    expect(render);
  });
  it('should show message when the list is empty', async () => {
    render(
      <RecoilRoot>
        <Lista content={[]} parent="Motorista" />
      </RecoilRoot>,
    );
    expect(screen.queryByText(/...Sem cargas para visualizar/i)).toBeTruthy();
  });
});
