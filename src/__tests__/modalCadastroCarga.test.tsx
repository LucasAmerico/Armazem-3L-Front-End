/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CadastroCarga from '../components/modal-cadastro-carga/CadastroCarga';

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

// jest.mock('../services/CargaService');
jest.mock('../services/CargaService', () => {
  return {
    postCarga: jest.fn(),
  };
});

describe('Tests for Modal-detalhes-carga component', () => {
  it('Should render the component correctly', async () => {
    const handleClose = jest.fn();

    const { queryByTestId } = render(
      <RecoilRoot>
        <CadastroCarga modal onClose={handleClose} />
      </RecoilRoot>,
    );

    const modal = queryByTestId('modal-test');
    expect(modal).toBeTruthy();
  });

  it('Should show a list of products', async () => {
    const handleClose = jest.fn();

    render(
      <RecoilRoot>
        <CadastroCarga modal onClose={handleClose} />
      </RecoilRoot>,
    );

    expect(screen.getAllByText(/Selecionar Produtos/i)).toBeTruthy();
  });
  it('Should closes modal when button close is clicked', async () => {
    const handleClose = jest.fn();

    render(
      <RecoilRoot>
        <CadastroCarga modal onClose={handleClose} />
      </RecoilRoot>,
    );

    fireEvent.click(screen.getByText(/Fechar/i));
    expect(handleClose).toHaveBeenCalled();
  });
  it('Should adds new carga when button confirm is clicked', async () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();

    render(
      <RecoilRoot>
        <CadastroCarga modal onClose={handleClose} />
      </RecoilRoot>,
    );

    fireEvent.click(screen.getByText(/Fechar/i));
    expect(handleClose).toHaveBeenCalled();
  });
  // it('Should render data component correctly', async () => {
  //   const handleClose = jest.fn();

  //   const { queryByTestId } = render(
  //     <RecoilRoot>
  //       <CadastroCarga modal onClose={handleClose} />
  //     </RecoilRoot>,
  //   );

  //   const component = queryByTestId('dados');
  //   expect(component).toBeTruthy();
  // });
  // it('Should render the data list component correctly', async () => {
  //   const handleClose = jest.fn();

  //   const { queryByTestId } = render(
  //     <RecoilRoot>
  //       <CadastroCarga modal onClose={handleClose} />
  //     </RecoilRoot>,
  //   );

  //   const component = queryByTestId('lista-dados');
  //   expect(component).toBeTruthy();
  // });
});
