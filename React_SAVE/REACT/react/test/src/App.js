import React, { Component, Fragment } from 'react';
import IterationSample, { InputBox } from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import styled from 'styled-components';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
        <IterationSample></IterationSample>
      </div>
    );
  }
}

export default App;