/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import DataCadastro from '../components/chose-products/DataCarga';
// import { TextField } from '@material-ui/core';

it('Should change input value for Endereco', async () => {
  // renderizar o componente
  const { getByLabelText } = render(
    <RecoilRoot>
      <DataCadastro
        address=""
        freight=""
        onChangeValue={jest.fn()}
        disabled={false}
      />
    </RecoilRoot>,
  );

  const input = getByLabelText('Endereço') as HTMLInputElement;
  expect(input.value).toBe('');

  input.value = 'TEST VALUE';
  fireEvent.change(input);

  expect(input.value).toBe('TEST VALUE');
});

it('Should change input value for Valor de Frete', async () => {
  // renderizar o componente
  const { getByLabelText } = render(
    <RecoilRoot>
      <DataCadastro
        address=""
        freight=""
        onChangeValue={jest.fn()}
        disabled={false}
      />
    </RecoilRoot>,
  );

  const input = getByLabelText('Valor de Frete') as HTMLInputElement;
  expect(input.value).toBe('');

  input.value = '100';
  fireEvent.change(input);

  expect(input.value).toBe('100');
});

it('Should show value on disabled input Endereco', async () => {
  // renderizar o componente
  const { getByDisplayValue } = render(
    <RecoilRoot>
      <DataCadastro
        address="TEST"
        freight="100"
        onChangeValue={jest.fn()}
        disabled
      />
    </RecoilRoot>,
  );
  const inputEndereco = getByDisplayValue('TEST') as HTMLInputElement;
  expect(inputEndereco.value).toBeTruthy();
});

it('Should show values on disabled input Frete', async () => {
  // renderizar o componente
  const { getByDisplayValue } = render(
    <RecoilRoot>
      <DataCadastro
        address="TEST"
        freight="100"
        onChangeValue={jest.fn()}
        disabled
      />
    </RecoilRoot>,
  );
  const inputFrete = getByDisplayValue('100') as HTMLInputElement;
  expect(inputFrete).toBeTruthy();
});
