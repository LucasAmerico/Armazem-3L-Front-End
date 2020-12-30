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
  it('Should input accept texts', async () => {
    // renderizar o componente
    const { getByTestId } = render(
      <RecoilRoot>
        <Login />
      </RecoilRoot>,
    );

    const login = getByTestId('login');
    fireEvent.change(login, { target: { value: 'Sama' } });
    expect(login).toHaveValue('Sama');

    const senha = getByTestId('senha');
    fireEvent.change(senha, { target: { value: 'Sama' } });
    expect(senha).toHaveValue('Sama');
  });
  it('Should open toast when button is clicked', async () => {
    // renderizar o componente

    render(
      <RecoilRoot>
        <Login />
      </RecoilRoot>,
    );

    fireEvent.click(screen.getByLabelText('button'));
  });
});
