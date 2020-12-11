import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/Home';
import Header from './components/header/Header';
import SideBar from './components/drawer/Drawer';
import CargasPage from './pages/Cargas';
import ProdutosPage from './pages/Produtos';
import MotoristasPage from './pages/Motorista';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <SideBar />
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/home" />;
        }}
      />
      <Route component={CargasPage} path="/cargas" exact />
      <Route component={HomePage} path="/home" exact />
      <Route component={ProdutosPage} path="/produtos" exact />
      <Route component={MotoristasPage} path="/motoristas" exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
