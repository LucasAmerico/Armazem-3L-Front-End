/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom/extend-expect';
import Entrar from '../components/bloco-entrar';

describe('Tests for Entrar component', () => {
  it('Renders Correctly', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <Entrar />
      </RecoilRoot>,
    );

    expect(queryByTestId('data-testid')).toBeTruthy();
  });
  // it('Should change components after click Entrar', async () => {
  //   const handleClick = jest.fn();

  //   // renderizar o componente
  //   render(
  //     <RecoilRoot>
  //       <Entrar />
  //     </RecoilRoot>,
  //   );

  //   fireEvent.click(screen.getByText(/Entrar/i));
  //   expect(handleClick).toHaveBeenCalled();
  // });
});
