import React from "react"

import styled from "styled-components"

const PropertyWrapper = styled.div`
  background-color: #eee;
  font-size: 1rem;
  color: white;
  border-radius: 10px;
  background-size: cover;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.image || ""});
  height: 300px;
  display: flex;
  margin-bottom: 1rem;
  & > div {
    background:linear-gradient(30deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%);
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

// const Title = styled.div`
//   font-size: 2em;
//   font-weight: bold;
//   line-height: 1.1;
//   margin-bottom: .25em;
// `

const SuperHost = styled.div`
  order: -1;
  position: relative;
  // top: -3px;
  font-size: .8rem;
  padding: .25rem .75rem;
  border: 2px solid;
  border-radius: 20px;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: .75rem;
  text-align: center;
`

const Type = styled.div`
  display: inline-block;
  color: #999;
  line-height: 1.25;
`

const Rating = styled.div`
  width: 60px;
  display: inline-block;
  color: #999;
  text-align: right;
  white-space: nowrap;
  svg {
    position: relative;
    top: -2px;
    vertical-align: middle;
    line-height: 1;
    polygon {
      fill: rgb(235, 87, 87);
      stroke: none !important;
    }
  } 
`

const Beds = styled.span`
  white-space: nowrap;
`

const Property = ({ property }) => {
  const imageUrl = property ? property.photo : "";
  const beds = property.beds ? ` • ${property.beds} bed${property.beds === 1 ? '' : 's'}` : ''
  return (
    <div key={`property_${property.id}`}>
      <PropertyWrapper>
        <img src={imageUrl} alt="" data-uk-cover />
        {/* <div>
          <Title>{property.title}</Title>
        </div> */}
      </PropertyWrapper>
      <div className="uk-flex uk-flex-middle">
        <div>{property.superHost ? <SuperHost>Super Host</SuperHost> : ""}</div>
        <div className="uk-flex-auto">
          <Type>
            {property.type}
            <Beds>{beds}</Beds>
          </Type>
        </div>
        <div>
          <Rating>
            <span uk-icon="star" /> {property.rating}
          </Rating>
        </div>
      </div>
      <p>{property.title}.</p>
    </div>
  );
};

export default Property;