import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header';
import MainBtn from './components/MainBtn';
import ServiceEntry from './components/ServiceEntry';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div>
        <GlobalStyle />
        <Header />
        <MainBtn />
        <ServiceEntry />
        <Portfolio />
    </div>
  );  
}

export default App;