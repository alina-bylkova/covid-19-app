import React, { Component } from 'react';
import Card from './Card';

export default class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: null,
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
    console.log('this is running');
    fetch('https://api.covid19api.com/countries')
      .then((res) => res.json())
      .then((data) => this.setState({ countries: data }));
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
              console.log(result);
              fetch(`https://api.covid19api.com/total/country/${result}`)
                .then((res) => res.json())
                .then((data) => this.setState({ countryData: data }));
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
        <Card value={this.state.countryData.Cases} name="Country" />
      </>
    );
  }
}
