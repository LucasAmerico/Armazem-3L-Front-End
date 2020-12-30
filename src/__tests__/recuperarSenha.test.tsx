import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import React from 'react';
import RecuperarSenha from '../components/recuperar-senha';

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

describe('Test RecuperarSenha component', () => {
  it('Should render component', () => {
    render(
      <RecoilRoot>
        <RecuperarSenha />
      </RecoilRoot>,
    );
    expect(screen.getByTestId('recuperar-senha')).toBeTruthy();
  });
  it('Should render the component in a standard way', () => {
    render(
      <RecoilRoot>
        <RecuperarSenha />
      </RecoilRoot>,
    );
    expect(screen.getByTestId('recuperar-senha')).toBeTruthy();
    expect(screen.getByTestId('informa-email')).toBeTruthy();
    expect(screen.getByTestId('informa-senharepetida')).toBeFalsy();
  });
  it('Should be possible to fill in the field ', () => {
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
});
