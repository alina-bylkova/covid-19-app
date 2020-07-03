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

  // listedCountry = (country) => {
  //   fetch(`https://api.covid19api.com/total/country/${country}`)
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ countryData: data }));
  // }

  // getSelectedValue = () => {
  //   const e = document.querySelector("#countries");
  //   const result = e.options[e.selectedIndex].value;

  //   fetch(`https://api.covid19api.com/total/country/${result}`)
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ countryData: data }));
  // }

  componentDidMount() {
    fetch('https://api.covid19api.com/countries')
      .then((res) => res.json())
      .then((data) => this.setState({ countries: data }));
  }

  updateCountryData(data) {
    this.setState({ countryData: data })
  }

  componentDidUpdate() {
  }

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
                .then(res2 => res2[res2.length - 1].Confirmed)
                .then((data) => this.updateCountryData(data))
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
        <Card value={this.state.countryData} name="Country" />
      </>
    );
  }
}
