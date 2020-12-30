/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import DialogConfirmAction from '../components/dialog/DialogConfirmAction';

it('Should show dialog at screen', async () => {
  // renderizar o componente
  const handleCloseDialog = jest.fn();
  const handleDelete = jest.fn();

  const { queryByTestId } = render(
    <RecoilRoot>
      <DialogConfirmAction
        open
        title="Deseja deletar carga?"
        content="A carga selecionada sera deletada, deseja prosseguir com esta ação?"
        leftBtnLabel="Cancelar"
        rigthBtnLabel="Ok"
        closeFunction={handleCloseDialog}
        actionFunction={handleDelete}
      />
    </RecoilRoot>,
  );

  const dialog = queryByTestId('dialog-test');
  expect(dialog).toBeTruthy();
});

it('Should show dialog at screen', async () => {
  // renderizar o componente
  const handleCloseDialog = jest.fn();
  const handleDelete = jest.fn();

  const { getByText } = render(
    <RecoilRoot>
      <DialogConfirmAction
        open
        title="Deseja deletar carga?"
        content="A carga selecionada sera deletada, deseja prosseguir com esta ação?"
        leftBtnLabel="Cancelar"
        rigthBtnLabel="Ok"
        closeFunction={handleCloseDialog}
        actionFunction={handleDelete}
      />
    </RecoilRoot>,
  );

  fireEvent.click(getByText(/Cancelar/i));
  expect(handleCloseDialog).toHaveBeenCalled();
});

it('Should show dialog at screen', async () => {
  // renderizar o componente
  const handleCloseDialog = jest.fn();
  const handleDelete = jest.fn();

  const { getByText } = render(
    <RecoilRoot>
      <DialogConfirmAction
        open
        title="Deseja deletar carga?"
        content="A carga selecionada sera deletada, deseja prosseguir com esta ação?"
        leftBtnLabel="Cancelar"
        rigthBtnLabel="Ok"
        closeFunction={handleCloseDialog}
        actionFunction={handleDelete}
      />
    </RecoilRoot>,
  );

  fireEvent.click(getByText(/Ok/i));
  expect(handleDelete).toHaveBeenCalled();
});
