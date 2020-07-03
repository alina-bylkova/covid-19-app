import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Board />
      </>
    );
  }
}

export default App;
