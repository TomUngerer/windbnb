import React from 'react'
import styled from "styled-components";
import Typing from "react-typing-animation"

const Hero = props => {

  const Title = styled.h1`
    min-height: 56px;
  `;

  return (
    <div
      id="site-hero"
      className="uk-section uk-section-medium uk-section-primary uk-preserve-color"
    >
      <div className="uk-container">
        <Title>
          <Typing startDelay={100}>{props.title}</Typing>
        </Title>
        {props.children}
      </div>
    </div>
  );
}

export default Hero