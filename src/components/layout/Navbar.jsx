import React from 'react'
import Logo from '../basic/Logo'

const Navbar = props => {
  return (
    <div uk-sticky={"sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"}>
      <nav
        className="uk-navbar-container uk-navbar-default"
        style={{ position: "relative" , zIndex: 980 }}
      >
        <div className="uk-container uk-container-xlarge" data-uk-navbar>
          <div className="uk-navbar-left">
            <Logo />
          </div>
          <div className="uk-navbar-right">
            <div className="uk-navbar-item uk-visible@s">
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar