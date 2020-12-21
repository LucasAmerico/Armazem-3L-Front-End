/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Fretamento from '../pages/Motorista/components/carga-list-motorista';
import '@testing-library/jest-dom/extend-expect';

describe('Tests for Fretamento component', () => {
  it('Renders Correctly', async () => {
    // renderizar o componente
    const { queryByTestId } = render(
      <RecoilRoot>
        <Fretamento />
      </RecoilRoot>,
    );

    expect(queryByTestId('data-testid')).toBeTruthy();
    expect(queryByTestId('tabs')).toBeTruthy();
  });
  // it('Should screem have title Fretes', async () => {
  //   // renderizar o componente
  //   const { queryByTestId } = render(
  //     <RecoilRoot>
  //       <Fretamento />
  //     </RecoilRoot>,
  //   );

  //   expect(screen.getByTestId('title')).toHaveTextContent('Fretes');
  // });
});
