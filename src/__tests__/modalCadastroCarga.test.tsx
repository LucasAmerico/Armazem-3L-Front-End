/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CadastroCarga from '../components/modal-cadastro-carga/CadastroCarga';

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
  it('Should call close modal funcrion when button close is clicked', async () => {
    const handleClose = jest.fn();

    render(
      <RecoilRoot>
        <CadastroCarga modal onClose={handleClose} />
      </RecoilRoot>,
    );

    fireEvent.click(screen.getByText(/Fechar/i));
    expect(handleClose).toHaveBeenCalled();
  });
});
