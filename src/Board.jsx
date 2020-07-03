import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    state = {
      data: null,
    }
  }

  getData = () => {
    fetch('https://api.covid19api.com/summary')
      .then((res) => {
        res.json
      }).then(data => this.setState({ data }))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <main className="board">


        <Card />
      </main>)
  }
}
