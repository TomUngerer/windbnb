import React from 'react';

import Navbar from '../components/layout/Navbar'

import Seo from "../components/layout/Seo"
import Main from "../components/layout/Main"
import Section from "../components/layout/Section"

import Properties from "../components/sections/Properties"

import Copyright from '../components/layout/Copyright'

import properties from "../assets/stays.json"



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      cities: [],
      guests: 0,
      city: '',
    };
  }

  componentDidMount() {
    this.setState({properties: properties})
    let cities = [];
    this.state.properties.forEach((property) => {
      if (!cities.includes(property.city)) {
        cities.push(property.city);
      }
    });
    this.setState({cities: cities})
    this.setState({
      city: "Helsinki"
    });

  
  }

  onGuestChange = (event) => {
    this.setState({ guests: event });
  };

  onCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  onSearchChange = (event) => {
    this.setState({
      city: event.city,
      guests: +event.adults + +event.children,
    });
  };

  render() {
    const { properties, guests, city } = this.state;
    let cities = [];
    properties.forEach((property) => {
      if (!cities.includes(property.city)) {
        cities.push(property.city);
      }
    });
    let filteredProperties = guests
      ? properties.filter((property) => property.maxGuests >= guests)
      : properties;
    filteredProperties = city
      ? filteredProperties.filter((property) => property.city === city)
      : filteredProperties;
    return (
      <div className="App">
        <Seo title="Home" />
        <div>
          <Navbar
            cities={cities}
            city={city}
            searchChange={this.onSearchChange}
            cityChange={this.onCityChange}
          />
          <Main>
            <Section container="large">
              <div className="uk-flex uk-flex-bottom uk-flex-between uk-margin-bottom">
                <h2 className="uk-margin-remove-bottom">Stays in Finland</h2>
                {filteredProperties ? (
                  <div style={{ whiteSpace: "nowrap" }}>
                    {filteredProperties.length < 12
                      ? filteredProperties.length
                      : "12+"}{" "}
                    stays
                  </div>
                ) : (
                  ""
                )}
              </div>
              {filteredProperties.length > 0 ? (
                <Properties properties={filteredProperties} />
              ) : (
                "No results"
              )}
            </Section>
          </Main>
          <Copyright />
        </div>
      </div>
    );
  }
}

export default App;
