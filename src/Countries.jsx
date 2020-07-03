import React, { Component } from 'react';
import Card from './Card';

export default class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: '',
      countries: [{ Country: 'Norway' }],
    };
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/countries')
      .then((res) => res.json())
      .then((data) => this.setState({ countries: data }));
  }

  updateCountryData(data) {
    this.setState({ countryData: data });
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <form>
          <label htmlFor="countries">Choose a country</label>
          <select
            id="countries"
            onChange={() => {
              const e = document.querySelector('#countries');
              const result = e.options[e.selectedIndex].value;
              fetch(`https://api.covid19api.com/total/country/${result}`)
                .then((res) => res.json())
                .then((res2) => res2[res2.length - 1])
                .then((data) => this.updateCountryData(data));
              console.log(this.state.countryData);
            }}
          >
            {this.state.countries.map((element) => {
              return (
                <option value={element.Country} key={element.Country}>
                  {element.Country}
                </option>
              );
            })}
          </select>
        </form>
        <h1>Country</h1>
        <Card value={this.state.countryData.Confirmed} name="Total Confirmed Cases" />
        <Card value={this.state.countryData.Deaths} name="Total Dead" />
        <Card value={this.state.countryData.Recovered} name="Total Recovered" />
      </>
    );
  }
}
