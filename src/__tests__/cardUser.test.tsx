/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CardUsers from '../components/cards/CardUsers';
import usuarioEnum from '../utils/enum/usuarioEnum';
import imageEnum from '../utils/enum/imageEnum';

it('Should render component', async () => {
  // renderizar o componente

  const { container } = render(
    <RecoilRoot>
      <CardUsers
        titulo="Administrativo"
        tipoUsuario={usuarioEnum.ADMINISTRATIVO}
        route="/cargas"
      />
    </RecoilRoot>,
  );
  const card = screen.getByLabelText('card') as HTMLInputElement;
  expect(card).toBeTruthy();
});

it('Should render correct props', async () => {
  // renderizar o componente

  const { container } = render(
    <RecoilRoot>
      <CardUsers
        titulo="Administrativo"
        tipoUsuario={usuarioEnum.ADMINISTRATIVO}
        route="/cargas"
      />
    </RecoilRoot>,
  );
  const img = screen.getByRole('img') as HTMLInputElement;
  const imageSrcExpect = `http://localhost/${imageEnum(
    usuarioEnum.ADMINISTRATIVO,
  )}`;

  expect(img).toHaveProperty('src', imageSrcExpect);

  const title = screen.getByText(/Administrativo/i);
  expect(title).toBeTruthy();
});

it('Should handle click on card', async () => {
  render(
    <RecoilRoot>
      <CardUsers
        titulo="Motorista"
        tipoUsuario={usuarioEnum.MOTORISTA}
        route="/cargas"
      />
    </RecoilRoot>,
  );
  fireEvent.click(screen.getByTestId('card'));
  expect(screen.getByTestId('card')).toBeTruthy();
});
