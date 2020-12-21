/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ProdutosLista from '../pages/Produtos/components/produtos-list';

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
  // it('Should screem have title Produtos', async () => {
  //   // renderizar o componente
  //   const { queryByTestId } = render(
  //     <RecoilRoot>
  //       <ProdutosLista />
  //     </RecoilRoot>,
  //   );

  //   expect(screen.getByTestId('title')).toHaveTextContent('Produtos');
  // });
});
