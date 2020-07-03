import React, { Component } from 'react';
import Card from './Card';
import './Board.css';
import Countries from './Countries';

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
      .then((result) => this.setState({ data: result.Global }));
  }

  render() {
    return (
      <>
        <h1>Global statistics to date</h1>
        <main className="board">
          <Card value={this.state.data.TotalConfirmed} name="Total confirmed cases" />
          <Card value={this.state.data.TotalDeaths} name="Total deaths" />
          <Card value={this.state.data.TotalRecovered} name="Total recoveries" />
        </main>
        <h1>Daily statistics</h1>
        <main className="board">
          <Card value={this.state.data.NewConfirmed} name="New confirmed cases" />
          <Card value={this.state.data.NewDeaths} name="New deaths" />
          <Card value={this.state.data.NewRecovered} name="New recoveries" />
        </main>
        <Countries />
      </>
    );
  }
}
