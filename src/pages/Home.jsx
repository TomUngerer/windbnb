import React from "react"

import Seo from "../components/layout/Seo"
import Main from "../components/layout/Main"
import Section from "../components/layout/Section"

import Properties from "../components/sections/Properties"


const Home = ({ properties, city, limit}) => {
  return (
    <div>
      <Seo title="Home" />
      <Main>
        <Section container="large">
          <div className="uk-flex uk-flex-bottom uk-flex-between uk-margin-bottom">
            <h2 className="uk-margin-remove-bottom">Stays in Finland</h2>
            {properties ? (<div style={{whiteSpace: "nowrap"}}>
              {properties.length < 12 ? properties.length : "12+"} stays
            </div>) : ''}
          </div>
          {properties ? <Properties properties={properties} city={city} limit={limit} /> : ''}
        </Section>
      </Main>
    </div>
  );
};

export default Home