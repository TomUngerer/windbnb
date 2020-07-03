import React from 'react'
import { Link } from "react-router-dom";

import Logo from '../basic/Logo'

const OffCanvas = props => {
  return (
    <div id="offcanvas-nav" uk-offcanvas="overlay: true; mode: push">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column uk-flex-between">
        <ul className="uk-nav uk-nav-primary">
          <li
            className="uk-nav-header uk-margin-bottom"
            uk-toggle="target: #offcanvas-nav"
          >
            <Logo />
          </li>
          <li>
            <Link to="/work" uk-toggle="target: #offcanvas-nav">
              Our Work
            </Link>
          </li>
          <li>
            <Link to="/about" uk-toggle="target: #offcanvas-nav">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/blog" uk-toggle="target: #offcanvas-nav">
              Blog
            </Link>
          </li>
          {/* <li className="uk-nav-divider" /> */}
          <li>
            <Link to="/contact" uk-toggle="target: #offcanvas-nav">
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="uk-nav uk-nav-default">
          <li>
            <Link to="/cookie-policy" uk-toggle="target: #offcanvas-nav">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" uk-toggle="target: #offcanvas-nav">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/legal-notice" uk-toggle="target: #offcanvas-nav">
              Legal Notice
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OffCanvas