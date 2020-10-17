import React from 'react';
import Header from './components/Header';
import MainBtn from './components/MainBtn';
import ServiceEntry from './components/ServiceEntry';
import {GlobalStyle} from './GlobalStyle';

const App = () => {
  return (
    <div>
        <GlobalStyle />
        <Header />
        <MainBtn />
        <ServiceEntry />
    </div>
  );  
}

export default App;