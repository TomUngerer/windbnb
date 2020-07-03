import React from "react"
import Property from "./Property"

const Properties = ({ properties }) => {
  return (
    <ul
      className="uk-child-width-1-2@s uk-child-width-1-3@l"
      id="properties"
      data-uk-grid
    >
      {properties.map((property, i) => {
        return (
          <li key={`property__${i}`}>
            <Property property={property} />
          </li>
        );
      })}
    </ul>
  );
}

export default Properties