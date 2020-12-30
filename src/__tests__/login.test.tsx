/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Fretamento from '../pages/Motorista/components/carga-list-motorista';
import '@testing-library/jest-dom/extend-expect';
import CargaLista from '../pages/Cargas/components/carga-list';
import Login from '../components/login';

describe('Tests for Cargas component', () => {
  it('Renders Correctly', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <Login />
      </RecoilRoot>,
    );

    expect(queryByTestId('data-testid')).toBeTruthy();
  });
  // it('Should open modal cadastro when button is clicked', async () => {
  //   // renderizar o componente

  //   render(
  //     <RecoilRoot>
  //       <CargaLista />
  //     </RecoilRoot>,
  //   );

  //   expect(() => screen.getByText('Cadastro de Carga')).toThrow(
  //     'Unable to find an element',
  //   );

  //   fireEvent.click(screen.getByLabelText('button'));
  //   expect(screen.getByText('Cadastro de Carga')).toBeTruthy();
  // });
});
