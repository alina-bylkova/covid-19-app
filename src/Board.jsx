import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component {
  render() {
    return (
      <main className="board">
        <Card />
      </main>)
  }
}
