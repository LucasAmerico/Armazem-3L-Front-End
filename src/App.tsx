import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@material-ui/styles';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.css';
import Routes from './routes';

function App() {
  return (
    <RecoilRoot>
      <ToastContainer autoClose={2000} />
      <Routes />
    </RecoilRoot>
  );
}

export default App;
