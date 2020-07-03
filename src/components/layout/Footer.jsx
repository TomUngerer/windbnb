import React from 'react'
import NavLink from "../basic/NavLink"

import Logo from "../basic/Logo"

const Footer = props => {
  return (
    <footer
      id="site-footer"
      className="uk-section uk-section-small uk-section-muted"
    >
      <div className="uk-container uk-container-xlarge">
        <div className="uk-flex-between uk-flex-middle" data-uk-grid>
          <div
            className="uk-flex-1 uk-text-center uk-text-left@s"
            data-uk-margin
          >
            <Logo />
          </div>
          <div>
            <ul
              className="uk-subnav uk-subnav-divider uk-flex-center uk-flex-right@s"
              data-uk-margin
            >
              <NavLink exact to="/">Home</NavLink>
              <NavLink to="/work">Our Work</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </ul>
            <ul
              className="uk-subnav uk-text-small uk-flex-last uk-flex-center uk-flex-right@s"
              data-uk-margin
            >
              <NavLink to="/cookie-policy">Cookie Policy</NavLink>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/legal-notice">Legal Notice</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer