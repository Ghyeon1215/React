import React from 'react';
import Header from './components/Header';
import MainBtn from './components/MainBtn';
import MainIntroEntry from './components/MainIntroEntry';
import {GlobalStyle} from './GlobalStyle';

const App = () => {
  return (
    <div>
        <GlobalStyle />
        <Header />
        <MainBtn />
        <MainIntroEntry />
    </div>
  );  
}

export default App;