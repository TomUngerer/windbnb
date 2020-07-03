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
      city: "Helsinki",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  changeAdults(type) {
    this.setState((prevState) => {
      return {
        adults: type == "add" ? prevState.adults + 1 : prevState.adults > 1 ? prevState.adults - 1 : 0,
      };
    });
  }

  changeChildren(type) {
    this.setState((prevState) => {
      return {
        children: type == "add" ? prevState.children + 1 : prevState.children > 1 ? prevState.children - 1 : 0,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchChange(this.state);
  }

  render() {
    const totalGuests = +this.state.adults + +this.state.children;
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="city" className="uk-select uk-form-width-small" onChange={this.props.cityChange}>
          {this.props.cities.map((city, i) => (
            <option key={`option_${i}`}>{city}</option>
          ))}
        </select>
        {/* <div uk-dropdown="mode: click">
          <ul class="uk-nav uk-dropdown-nav">
            {this.props.cities.map((city, i) => (
              <li key={`option_${i}`}>
                <a href="#">{city}</a>
              </li>
            ))}
          </ul>
        </div> */}
        <button className="uk-button uk-button-default" type="button">
          {totalGuests && totalGuests > 0
            ? `${totalGuests < 100 ? totalGuests : "10+"} guest${
                totalGuests > 1 ? "s" : ""
              }`
            : "add guests"}
        </button>
        <div uk-dropdown="mode: click; pos: bottom-right">
          <label className="uk-h5">Adults</label>
          <br />
          <span>Ages 13 or above</span>
          <br />
          <button
            href="#"
            name="adults"
            className="uk-icon-button"
            onClick={this.changeAdults.bind(this, "sub")}
            uk-icon="minus"
          />
          {this.state.adults}
          <button
            href="#"
            className="uk-icon-button"
            onClick={this.changeAdults.bind(this, "add")}
            uk-icon="plus"
          />
          <hr />
          <label className="uk-h5">Children</label>
          <br />
          <span>Ages 2 - 12</span>
          <br />
          <button
            href="#"
            name="children"
            className="uk-icon-button"
            onClick={this.changeChildren.bind(this, "sub")}
            uk-icon="minus"
          />
          {this.state.children}
          <button
            href="#"
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