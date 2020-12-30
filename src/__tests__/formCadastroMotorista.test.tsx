/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import userEvent from '@testing-library/user-event';
import FormCadastroMotorista from '../components/form-cadastro';

it('Should render component correctly', async () => {
  // renderizar o componente

  const { queryByTestId } = render(
    <RecoilRoot>
      <FormCadastroMotorista />
    </RecoilRoot>,
  );

  expect(queryByTestId('form')).toBeTruthy();
});

it('Should call save function when save button is clicked', async () => {
  const handleChange = jest.fn();
  const handleSave = jest.fn();

  render(
    <RecoilRoot>
      <FormCadastroMotorista
        email=""
        nome=""
        senha=""
        onChangeValue={handleChange}
        handleSave={handleSave}
      />
    </RecoilRoot>,
  );

  fireEvent.click(screen.getByText(/Cadastrar/i));
  expect(handleSave).toHaveBeenCalled();
});

it('Should call input change function on user type event', async () => {
  // renderizar o componente
  const handleChange = jest.fn();
  const handleSave = jest.fn();

  const { getByLabelText } = render(
    <RecoilRoot>
      <FormCadastroMotorista
        email=""
        nome=""
        senha=""
        onChangeValue={handleChange}
        handleSave={handleSave}
      />
    </RecoilRoot>,
  );
  const input = getByLabelText('Nome') as HTMLInputElement;
  userEvent.type(input, 'teste');

  expect(handleChange).toHaveBeenCalled();
});

it('Should shoe input value when passed by props', async () => {
  // renderizar o componente
  const handleChange = jest.fn();
  const handleSave = jest.fn();

  const { getByDisplayValue } = render(
    <RecoilRoot>
      <FormCadastroMotorista
        email="test@test.com"
        nome="nomeTest"
        login="loginTest"
        senha="senhaTest"
        onChangeValue={handleChange}
        handleSave={handleSave}
      />
    </RecoilRoot>,
  );
  const inputEmail = getByDisplayValue('test@test.com') as HTMLInputElement;
  expect(inputEmail.value).toBeTruthy();

  const inputNome = getByDisplayValue('nomeTest') as HTMLInputElement;
  expect(inputNome.value).toBeTruthy();

  const inputLogin = getByDisplayValue('loginTest') as HTMLInputElement;
  expect(inputLogin.value).toBeTruthy();

  const inputSenha = getByDisplayValue('senhaTest') as HTMLInputElement;
  expect(inputSenha.value).toBeTruthy();
});
