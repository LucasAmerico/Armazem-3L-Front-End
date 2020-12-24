/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Fretamento from '../pages/Motorista/components/carga-list-motorista';
import '@testing-library/jest-dom/extend-expect';
import DialogAccCarga from '../components/dialog-aceitar-carga';

describe('DialogAccCarga', () => {
  it('Renders Correctly', async () => {
    const handleCloseDialogAccCarga = jest.fn();
    const handleAccCarga = jest.fn();
    const open = true;

    // renderizar o componente
    render(
      <RecoilRoot>
        <DialogAccCarga
          open={open}
          onClose={handleCloseDialogAccCarga}
          onDelete={handleAccCarga}
        />
      </RecoilRoot>,
    );

    expect(screen.getByTestId('title')).toBeTruthy();
  });
  it('Should close dialog after click Cancelar', async () => {
    const handleCloseDialogAccCarga = jest.fn();
    const handleAccCarga = jest.fn();
    const open = true;

    // renderizar o componente
    render(
      <RecoilRoot>
        <DialogAccCarga
          open={open}
          onClose={handleCloseDialogAccCarga}
          onDelete={handleAccCarga}
        />
      </RecoilRoot>,
    );

    fireEvent.click(screen.getByText(/Cancelar/i));
    expect(handleCloseDialogAccCarga).toHaveBeenCalled();
  });
  it('Should delete and clo dialog after click Confirmar', async () => {
    const handleCloseDialogAccCarga = jest.fn();
    const handleAccCarga = jest.fn();
    const open = true;

    // renderizar o componente
    render(
      <RecoilRoot>
        <DialogAccCarga
          open={open}
          onClose={handleCloseDialogAccCarga}
          onDelete={handleAccCarga}
        />
      </RecoilRoot>,
    );

    fireEvent.click(screen.getByText(/Confirmar/i));
    expect(handleAccCarga).toHaveBeenCalled();
  });
});
