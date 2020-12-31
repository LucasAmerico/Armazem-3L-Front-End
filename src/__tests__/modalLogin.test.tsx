/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ModalLogin from '../components/modal-login/index';

it('Should render modal correctly', async () => {
  // renderizar o componente
  const handleClose = jest.fn();

  const { queryByTestId } = render(
    <RecoilRoot>
      <ModalLogin modal onClose={handleClose} />
    </RecoilRoot>,
  );

  expect(queryByTestId('modal-test')).toBeTruthy();
});

it('Should change modal content based on button clicks', async () => {
  const handleClose = jest.fn();

  render(
    <RecoilRoot>
      <ModalLogin modal onClose={handleClose} />
    </RecoilRoot>,
  );
  
  expect(screen.getByLabelText(/Login/i)).toBeTruthy();
  expect(screen.getByText(/Cadastrar/i)).toBeTruthy();
  
  fireEvent.click(screen.getByText(/Cadastrar/i));
  expect(screen.getByTestId("form")).toBeTruthy();
  expect(screen.getByText(/Entrar/i)).toBeTruthy();
  
  fireEvent.click(screen.getByText(/Entrar/i));
  expect(screen.getByLabelText(/Login/i)).toBeTruthy();
  expect(screen.getByText(/Esqueci a Senha/i)).toBeTruthy();
  
  fireEvent.click(screen.getByText(/Esqueci a Senha/i));
  expect(screen.getByLabelText(/Recuperar senha/i)).toBeTruthy();    
});
