/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom/extend-expect';
import ListProducts from '../components/list-products/ListProducts';

const produtos = [
  {
    id: 1,
    nome: 'Playstation 5',
    peso: 1.0,
    preco: 1.0,
    qtd: 299,
  },
  {
    id: 2,
    nome: 'Mouse',
    peso: 1.0,
    preco: 1.0,
    qtd: 300,
  },
  {
    id: 3,
    nome: 'Teclado',
    peso: 1.0,
    preco: 1.0,
    qtd: 300,
  },
  {
    id: 4,
    nome: 'Monitor',
    peso: 1.0,
    preco: 1.0,
    qtd: 300,
  },
  {
    id: 5,
    nome: 'Dualshock 4',
    peso: 1.0,
    preco: 1.0,
    qtd: 300,
  },
  {
    id: 6,
    nome: 'Dualsense',
    peso: 1.0,
    preco: 1.0,
    qtd: 300,
  },
];
const onSelectAllItens = jest.fn();
const onUnselectAllItens = jest.fn();
const onIfSelectAllTrue = jest.fn();
const onSelectItem = jest.fn();
const onChangeFilterValue = jest.fn();
const onChangeQtd = jest.fn();

const prodState = [false, false, false, false, false, false];
let filtro = '';
const selectAll = false;

// jest.mock('../services/CargaService');
jest.mock('../services/CargaService', () => {
  return {
    postCarga: jest.fn(),
  };
});

describe('Tests for Modal-detalhes-carga component', () => {
  it('Should render the component correctly', async () => {
    const { queryByTestId } = render(
      <RecoilRoot>
        <ListProducts
          produtos={produtos}
          prodState={prodState}
          selectAll={selectAll}
          onIfSelectAllTrue={onIfSelectAllTrue}
          onSelectAllItens={onSelectAllItens}
          onSelectItem={onSelectItem}
          onUnselectAllItens={onUnselectAllItens}
          filtro={filtro}
          onChangeFilterValue={onChangeFilterValue}
          onChangeQtd={onChangeQtd}
        />
      </RecoilRoot>,
    );

    const modal = queryByTestId('component');
    expect(modal).toBeTruthy();
  });
  it('Should input accept texts', async () => {
    // renderizar o componente
    const { getByTestId, rerender } = render(
      <RecoilRoot>
        <ListProducts
          produtos={produtos}
          prodState={prodState}
          selectAll={selectAll}
          onIfSelectAllTrue={onIfSelectAllTrue}
          onSelectAllItens={onSelectAllItens}
          onSelectItem={onSelectItem}
          onUnselectAllItens={onUnselectAllItens}
          filtro={filtro}
          onChangeFilterValue={onChangeFilterValue}
          onChangeQtd={onChangeQtd}
        />
      </RecoilRoot>,
    );

    const input = getByTestId('search');
    fireEvent.change(input, { target: { value: filtro } });
    expect(input).toHaveValue(filtro);

    filtro = 'teste';
    rerender(
      <RecoilRoot>
        <ListProducts
          produtos={produtos}
          prodState={prodState}
          selectAll={selectAll}
          onIfSelectAllTrue={onIfSelectAllTrue}
          onSelectAllItens={onSelectAllItens}
          onSelectItem={onSelectItem}
          onUnselectAllItens={onUnselectAllItens}
          filtro={filtro}
          onChangeFilterValue={onChangeFilterValue}
          onChangeQtd={onChangeQtd}
        />
      </RecoilRoot>,
    );
    expect(screen.getByLabelText('Filtro')).toHaveValue('teste');
  });
});
