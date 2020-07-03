import React from "react"
import Property from "./Property"

const Properties = ({ properties, limit, city }) => {
  let cities = [];
  properties.forEach(property => {
    if (!cities.includes(property.city)) {
      cities.push(property.city)
    }
  });
  let filteredProperties = limit ? properties.filter(property => property.maxGuests >= limit) : properties
  filteredProperties = city ? filteredProperties.filter(property => property.city === city) : filteredProperties
  return (
    <ul
      className="uk-child-width-1-2@s uk-child-width-1-3@l"
      id="properties"
      data-uk-grid
      // uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-medium; delay: 250"
    >
        {filteredProperties.map((property, i) => {
        return (
          <li
            key={`property__${i}`}
          >
            <Property property={property} />
          </li>
        );
      })}
      </ul>
  );
}

export default Properties