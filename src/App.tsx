import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import Routes from './routes';
import theme from './componentes/ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
