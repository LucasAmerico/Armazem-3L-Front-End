/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import DetalhesCarga from '../components/modal-detalhes-carga';

const carga = {
  id: 1,
  endereco: '902 Milan Stream Apt. 421 - Baton Rouge, OR / 39834',
  frete: 100.0,
  motoristaId: 1,
  produtos: [],
  listaProdutos: [
    {
      quantidade: 0,
      produto: {
        id: 1,
        nome: 'string',
        peso: 0,
        preco: 0,
        qtd: 1,
        qtdCarga: 1,
      },
      id: 1,
      nome: 'string',
      peso: 0,
      preco: 0,
      qtd: 0,
      qtdCarga: 0,
    },
  ],
};
describe('Tests for Modal-detalhes-carga component', () => {
  it('Should render the component correctly', async () => {
    const handleClose = jest.fn();

    const { queryByTestId } = render(
      <RecoilRoot>
        <DetalhesCarga modal onClose={handleClose} carga={{}} />
      </RecoilRoot>,
    );

    const modal = queryByTestId('modal-test');
    expect(modal).toBeTruthy();
  });

  it('Should show a list of products', async () => {
    const handleClose = jest.fn();

    render(
      <RecoilRoot>
        <DetalhesCarga modal onClose={handleClose} carga={carga} />
      </RecoilRoot>,
    );

    expect(screen.getAllByText(/Lista de produtos/i)).toBeTruthy();
  });

  it('Should show message when the list of products is empty', async () => {
    const handleClose = jest.fn();

    const cargaEmpty = carga;
    cargaEmpty.listaProdutos = [];

    render(
      <RecoilRoot>
        <DetalhesCarga modal onClose={handleClose} carga={cargaEmpty} />
      </RecoilRoot>,
    );

    expect(screen.getAllByText(/Produtos não encontrados./i)).toBeTruthy();
  });

  it('Should closes modal when button close is clicked', async () => {
    const handleClose = jest.fn();

    render(
      <RecoilRoot>
        <DetalhesCarga modal onClose={handleClose} carga={carga} />
      </RecoilRoot>,
    );

    fireEvent.click(screen.getByText(/Fechar/i));
    expect(handleClose).toHaveBeenCalled();
  });
});
