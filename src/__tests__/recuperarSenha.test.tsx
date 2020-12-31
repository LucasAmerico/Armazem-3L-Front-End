import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElement,
} from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import React from 'react';
import userEvent from '@testing-library/user-event';
import RecuperarSenha from '../components/recuperar-senha';
import MotoristaService from '../services/MotoristaService';

const motorista = [
  {
    id: 1,
    nome: 'Bino',
    login: 'bino',
    senha: 'cargapesada',
    email: 'bino_cilada@gmail.com',
  },
  {
    id: 2,
    nome: 'Pedro',
    login: 'bino',
    senha: 'cargapesada',
    email: 'pedro_cilada@gmail.com',
  },
];
jest.mock('../services/MotoristaService', () => {
  return {
    postVerificarMotorista: jest.fn(() => Promise.resolve(true)),
    putRecuperarSenhaMotorista: jest.fn(() => Promise.resolve()),
  };
});

describe('Test RecuperarSenha component', () => {
  it('Should render component', async () => {
    render(
      <RecoilRoot>
        <RecuperarSenha />
      </RecoilRoot>,
    );
    expect(screen.getByTestId('recuperar-senha')).toBeTruthy();
  });
  it('Should render the component in a standard way', async () => {
    render(
      <RecoilRoot>
        <RecuperarSenha />
      </RecoilRoot>,
    );
    expect(screen.getByTestId('recuperar-senha')).toBeTruthy();
    expect(screen.queryByText(/Insira uma nova senha/i)).toBeNull();
    expect(screen.queryByText(/Repita sua senha/i)).toBeNull();
    expect(screen.getByTestId('form-email')).toBeTruthy();
  });

  it('Should be possible to fill in the field ', async () => {
    render(
      <RecoilRoot>
        <RecuperarSenha />
      </RecoilRoot>,
    );

    const input = screen.getByRole('textbox', {
      name: /weight/i,
    }) as HTMLInputElement;

    expect(input.value).toBe('');

    input.value = 'teste.email@email.com';
    fireEvent.change(input);

    expect(input.value).toBe('teste.email@email.com');
  });

  it('Should change to default form to password form ', async () => {
    render(
      <RecoilRoot>
        <RecuperarSenha />
      </RecoilRoot>,
    );

    const input = screen.getByRole('textbox', {
      name: /weight/i,
    }) as HTMLInputElement;
    const button = screen.getByRole('button', {
      name: /button/i,
    });

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'email.valido@gmail.com' } });

    fireEvent.click(button);

    await screen.findByTestId('recuperar-senha');

    expect(screen.queryByText(/Insira uma nova senha/i)).toBeTruthy();
    expect(screen.queryByText(/Repita sua senha/i)).toBeTruthy();
  });
  it('Should compare passwords in the inputs entered', async () => {
    render(
      <RecoilRoot>
        <RecuperarSenha />
      </RecoilRoot>,
    );

    const input = screen.getByRole('textbox', {
      name: /weight/i,
    }) as HTMLInputElement;
    const button = screen.getByRole('button', {
      name: /button/i,
    });

    userEvent.type(input, 'email.valido@gmail.com');
    fireEvent.click(button);

    await screen.findByTestId('recuperar-senha');

    const inputSenha = screen.getByTestId('informa-senha') as HTMLInputElement;
    const inputSenhaRepetida = screen.getByTestId(
      'informa-senharepetida',
    ) as HTMLInputElement;
    const buttonSalvar = screen.getByRole('button', {
      name: /button/i,
    });

    userEvent.type(inputSenha, 'senhaIgual');
    userEvent.type(inputSenhaRepetida, 'senhaIgual');
    fireEvent.click(buttonSalvar);

    // expect(
    //   await screen.findByText(/Senha alterada com sucesso!/i),
    // ).toBeTruthy();

    screen.debug();
  });
});
