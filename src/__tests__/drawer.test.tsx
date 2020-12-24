/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import SideBar from '../components/drawer/Drawer';

it('Should do something', async () => {
  // renderizar o componente

  const { queryByTestId } = render(
    <RecoilRoot>
      <Router>
        <SideBar />
      </Router>
    </RecoilRoot>,
  );

  const input = queryByTestId('sidebar-list');

  expect(queryByTestId('sidebar-list')).toBeTruthy();
});
