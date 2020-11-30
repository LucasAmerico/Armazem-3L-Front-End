/* eslint-disable linebreak-style */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={HomePage} path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
