import React from 'react'

import styled from 'styled-components'

const addIcon = styled.div`
  
`

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 0,
      children: 0,
      city: this.props.city,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeAdults = (type, event) => {
    this.setState((prevState) => {
      return {
        adults:
          type === "add"
            ? prevState.adults + 1
            : prevState.adults > 1
            ? prevState.adults - 1
            : 0,
      };
    });
  }

  changeChildren = (type) => {
    this.setState((prevState) => {
      return {
        children:
          type === "add"
            ? prevState.children + 1
            : prevState.children > 1
            ? prevState.children - 1
            : 0,
      };
    });
  }

  changeCity = event => {
    event.preventDefault();
    this.setState({ city: event.target.value });
    
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchChange(this.state);
  }

  render() {
    const totalGuests = +this.state.adults + +this.state.children;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="city"
          className="uk-select uk-form-width-small"
          // onChange={this.handleChange}
          value={this.state.city}
        />
        <div uk-dropdown="mode: click">
          <ul class="uk-nav uk-dropdown-nav">
            {this.props.cities.map((city, i) => (
              <li key={`option_${i}`}>
                <button
                  className="uk-button uk-button-link"
                  name="city"
                  value={city}
                  onClick={this.changeCity}
                >
                  <span uk-icon="location" /> {city}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button className="uk-button" type="button">
          {totalGuests && totalGuests > 0
            ? `${totalGuests < 11 ? totalGuests : "10+"} guest${
                totalGuests > 1 ? "s" : ""
              }`
            : "add guests"}
        </button>
        <div uk-dropdown="mode: click; pos: bottom-right">
          <label className="uk-h5">Adults</label>
          <br />
          <span>Ages 13 or above</span>
          <br />
          <div
            name="adults"
            className="uk-icon-button"
            onClick={this.changeAdults.bind(this, "sub")}
            uk-icon="minus"
          />
          {this.state.adults}
          <div
            name="adults"
            className="uk-icon-button"
            onClick={this.changeAdults.bind(this, "add")}
            uk-icon="plus"
          />
          <hr />
          <label className="uk-h5">Children</label>
          <br />
          <span>Ages 2 - 12</span>
          <br />
          <div
            name="children"
            className="uk-icon-button"
            onClick={this.changeChildren.bind(this, "sub")}
            uk-icon="minus"
          />
          {this.state.children}
          <div
            name="children"
            className="uk-icon-button"
            onClick={this.changeChildren.bind(this, "add")}
            uk-icon="plus"
            hide
          />
        </div>

        <button type="submit" className="uk-button uk-button-default">
          <span uk-icon="search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;