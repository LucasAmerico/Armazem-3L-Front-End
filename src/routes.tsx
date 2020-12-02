/* eslint-disable linebreak-style */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import Header from './components/header/Header';
import SideBar from './components/drawer/Drawer';
import CargasPage from './pages/Cargas';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <SideBar />
    <Switch>
      <Route component={HomePage} path="/" exact />
      <Route component={CargasPage} path="/cargas" exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
