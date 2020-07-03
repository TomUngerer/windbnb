import React from 'react';

import Navbar from '../components/layout/Navbar'

import Seo from "../components/layout/Seo"
import Main from "../components/layout/Main"
import Section from "../components/layout/Section"

import Properties from "../components/sections/Properties"

import Copyright from '../components/layout/Copyright'

import properties from "../assets/stays.json"

let cities = [];
properties.forEach(property => {
  if (!cities.includes(property.city)) {
    cities.push(property.city)
  }
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: properties,
      guests: null,
      city: "Helsinki"
    }
  }


  onSearchChange = (event) => {
    this.setState({ guests: event.target.value })
  }

  render() {
    const {properties, guests, city} = this.state
    return (
      <div className="App">
        <Seo title="Home" />
        <div>
          <Navbar />
          <form>
          <div className="uk-margin">
              <input className="uk-range" type="range" min="1" max="11" step="1" onChange={this.onSearchChange} />
          </div>
          Guests : {guests < 11 ? guests : '10+' }
          </form>
          <Main>
            <Section container="large">
              <div className="uk-flex uk-flex-bottom uk-flex-between uk-margin-bottom">
                <h2 className="uk-margin-remove-bottom">Stays in Finland</h2>
                {properties ? (<div style={{ whiteSpace: "nowrap" }}>
                  {properties.length < 12 ? properties.length : "12+"} stays
                </div>) : ''}
              </div>
              {properties ? <Properties properties={properties} city={city} limit={guests} /> : ''}
            </Section>
          </Main>
          <Copyright />
        </div>
      </div>
    );
  }
}

export default App;
