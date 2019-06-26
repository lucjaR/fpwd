import React from 'react';

import './App.css';

import { Layout } from './components/Layout';

import {
  MainApp
} from './styledComponents/StyledComponents';

function App() {
  return (
    <MainApp className="App">
      <Layout />
    </MainApp>
  );
}

export default App;
