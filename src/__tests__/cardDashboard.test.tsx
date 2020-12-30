import {
  fireEvent,
  getByRole,
  getByTestId,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import { RecoilRoot } from 'recoil';
import CardDashboard from '../components/cards-dashboard';

describe('Tests for CardDashboard component', () => {
  it('Should ', async () => {
    render(
      <RecoilRoot>
        <CardDashboard />
      </RecoilRoot>,
    );
    expect(screen.getByRole('Cargas Pendentes')).toBeInTheDocument();
  });
});
