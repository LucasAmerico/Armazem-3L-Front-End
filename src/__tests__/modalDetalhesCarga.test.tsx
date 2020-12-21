/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import DetalhesCarga from '../components/modal-detalhes-carga';

const carga = {
  id: 1,
  endereco: '902 Milan Stream Apt. 421 - Baton Rouge, OR / 39834',
  frete: 100.0,
  motoristaId: 1,
  listaProdutos: [
    {
      produto: {
        id: 1,
        nome: 'Playstation 5',
        peso: 1.0,
        preco: 1.0,
        qtd: 240,
      },
      quantidade: 10,
    },
    {
      produto: {
        id: 3,
        nome: 'Teclado',
        peso: 1.0,
        preco: 1.0,
        qtd: 275,
      },
      quantidade: 5,
    },
    {
      produto: {
        id: 5,
        nome: 'Dualshock 4',
        peso: 1.0,
        preco: 1.0,
        qtd: 280,
      },
      quantidade: 10,
    },
  ],
  motorista: {
    id: 1,
    nome: 'Bino',
  },
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

    expect(queryByTestId('modal-test')).toBeTruthy();
  });

  // it('Should present a list of products', async () => {
  //   // renderizar o componente
  //   const handleClose = jest.fn();

  //   const { queryByTestId } = render(
  //     <RecoilRoot>
  //       <DetalhesCarga modal onClose={handleClose} carga={carga} />
  //     </RecoilRoot>,
  //   );

  //   const modal = queryByTestId('product-list-test');

  //   expect(queryByTestId('product-list-test')).toBeTruthy();
  // });

  // it('Should closes modal when button close is clicked', async () => {
  //   // renderizar o componente
  //   const handleClose = jest.fn();

  //   const { queryByTestId } = render(
  //     <RecoilRoot>
  //       <DetalhesCarga modal onClose={handleClose} carga={carga} />
  //     </RecoilRoot>,
  //   );
  //   fireEvent.click(queryByTestId('close-button-test'));
  //   expect(handleClose).toHaveBeenCalled();
  // });
});
