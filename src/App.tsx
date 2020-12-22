import React from 'react';
import { RecoilRoot } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { ToastContainer } from 'react-toastify';
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
