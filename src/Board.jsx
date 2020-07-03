import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((res) => res.json())
      .then((result) => {
        this.setState({ data: result.Global });
        console.log(this.state);
      });
  }

  render() {
    return (
      <main className="board">
        <Card value={this.state.data.TotalConfirmed} name="Total confirmed cases" />
        <Card value={this.state.data.TotalDeaths} name="Total deaths" />
        <Card value={this.state.data.TotalRecovered} name="Total recoveries" />
      </main>
    );
  }
}
