import React from 'react'
import Logo from '../basic/Logo'
import SearchBar from '../basic/SearchBar';

const Navbar = props => {
  return (
    <div
      uk-sticky={
        "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"
      }
    >
      <nav
        className="uk-navbar-container uk-navbar-default"
        style={{ position: "relative", zIndex: 980 }}
      >
        <div
          className="uk-container uk-container-xlarge"
          style={{ minHeight: 80 }}
          data-uk-navbar
        >
          <div className="uk-navbar-left uk-margin-remove">
            <Logo />
          </div>
          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              <SearchBar {...props} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar