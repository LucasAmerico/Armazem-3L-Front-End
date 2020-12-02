import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import Routes from './routes';

function App() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}

export default App;
