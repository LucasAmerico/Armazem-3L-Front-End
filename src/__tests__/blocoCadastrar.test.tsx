/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom/extend-expect';
import Cadastrar from '../components/bloco-cadastrar';
import userEvent from '@testing-library/user-event';

describe('Tests for Cadastrar component', () => {
  it('Renders Correctly', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <Cadastrar />
      </RecoilRoot>,
    );

    expect(queryByTestId('data-testid')).toBeTruthy();
  });
  // it('Should change components after click Cadastrar', async () => {
  //   const handleClick = jest.fn(() => true);
  //   // const result = handleClick();

  //   // renderizar o componente
  //   render(
  //     <RecoilRoot>
  //       <Cadastrar />
  //     </RecoilRoot>,
  //   );

  //   userEvent.click(
  //     screen.getByRole('button', {
  //       name: /Cadastrar/i,
  //     }),
  //   );

  //   expect(handleClick).toHaveBeenCalled();
  // });
});
