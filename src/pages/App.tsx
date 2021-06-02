import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from '../routes';
import GlobalStyles from '../styles';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Routes />
    <ToastContainer />
  </>
);

export default App;
