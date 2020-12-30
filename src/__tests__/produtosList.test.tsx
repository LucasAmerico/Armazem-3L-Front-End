import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ProdutosLista from '../pages/Produtos/components/produtos-list';

describe('Tests for../components/list/listt', () => {
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
  it('Should be possible to fill in the field', async () => {
    render(
      <RecoilRoot>
        <ProdutosLista />
      </RecoilRoot>,
    );
    const input = screen.getByRole('textbox', {
      name: /search/i,
    }) as HTMLInputElement;

    expect(input.value).toBe('');
    input.value = 'teste';
    fireEvent.change(input);

    expect(input.value).toBe('teste');
  });
});
