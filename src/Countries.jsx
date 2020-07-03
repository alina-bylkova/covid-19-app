import React, { Component } from 'react';

export default class Countries extends Component {
  constructor(props) {
    super(props);
    state = {
      countryData: null,
      countries: null,
    }
  }

  getCountries = function () {
    fetch('https://api.covid19api.com/countries')
      .then((res) => res.json())
      .then(data => this.setState({ countries: data }))
  }

  getCountryData = function (country) {
    fetch(`https://api.covid19api.com/total/country/${country}`)
      .then((res) => res.json())
      .then(data => this.setState({ countryData: data }))
  }

  render() {
    return (
      <form>
        <input type="dropdown"></input>
      </form>
    );
  }
}
