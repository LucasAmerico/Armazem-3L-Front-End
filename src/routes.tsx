/* eslint-disable linebreak-style */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import Header from './componentes/header/Header';
import SideBar from './componentes/drawer/Drawer';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <SideBar />
    <Switch>
      <Route component={HomePage} path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
