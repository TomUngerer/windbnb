import React from 'react'

import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = props => {
  return (
    <header id="site-header">
      <Navbar />
      <Hero title="Title" />
    </header>
  );
}

export default Header