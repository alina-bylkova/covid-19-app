import React, { Component } from 'react';

export default class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: null,
      countries: [{ Country: 'Norway' }],
    };
  }
  componentDidMount() {
    console.log('this is running');
    fetch('https://api.covid19api.com/countries')
      .then((res) => res.json())
      .then((data) => this.setState({ countries: data }));

    // fetch(`https://api.covid19api.com/total/country/${country}`)
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ countryData: data }));
  }

  render() {
    return (
      <form>
        <label for="countries">Choose a country</label>
        <select id="countries">
          {this.state.countries.map((element) => {
            return (
              <option value={element.Country} key={element.Country}>
                {element.Country}
              </option>
            );
          })}
        </select>
      </form>
    );
  }
}
