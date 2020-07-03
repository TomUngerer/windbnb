import React from 'react';

import Navbar from '../components/layout/Navbar'
import Copyright from '../components/layout/Copyright'

import properties from "../assets/stays.json"

import Home from '../pages/Home'

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
        <div>
          <Navbar />
          <form>
          <div className="uk-margin">
              <input className="uk-range" type="range" min="1" max="11" step="1" onChange={this.onSearchChange} />
          </div>
          Guests : {guests < 11 ? guests : '10+' }
          </form>
          <Home properties={properties} city={city} limit={guests} />
          <Copyright />
        </div>
      </div>
    );
  }
}

export default App;
