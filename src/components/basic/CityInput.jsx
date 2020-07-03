import React from 'react'

const CityInput = ({ cities, cityChange }) => (
  <select className="uk-select uk-form-width-small" onChange={cityChange}>
    {cities.map((city, i) => (
      <option key={`option_${i}`}>{city}</option>
    ))}
  </select>
);

export default CityInput