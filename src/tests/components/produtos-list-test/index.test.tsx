/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render, screen, waitForElement } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Fretamento from '../../../components/carga-list-motorista';
import '@testing-library/jest-dom/extend-expect';
import ProdutosLista from '../../../components/produtos-list';

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

    expect(screen.getByTestId('title')).toHaveTextContent('Produtos');
  });
});
