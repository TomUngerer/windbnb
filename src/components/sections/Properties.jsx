import React from "react"
import Property from "./Property"

const Properties = ({ properties }) => {
  return (
    <ul
      className="uk-child-width-1-2@s uk-child-width-1-3@l"
      id="properties"
      data-uk-grid
      uk-scrollspy="target: > li; cls: uk-animation-slide-bottom-medium; delay: 250"
    >
      {properties.map((property, i) => {
        return (
          <li
            uk-scrollspy-class="uk-animation-slide-bottom-medium"
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