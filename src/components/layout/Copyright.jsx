import React from 'react'
const Copyright = props => {
  return (
    <div
      id="site-copyright"
      className="uk-section uk-section-small uk-section-default uk-text-center"
      style={{ fontSize: 16 }}
    >
      <div
        className="uk-container"
      >
        <ul className="uk-subnav uk-flex-center">
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <span
                className="uk-icon-button uk-margin-small-right"
                uk-icon="instagram"
              />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <span
                className="uk-icon-button uk-margin-small-right"
                uk-icon="twitter"
              />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <span
                className="uk-icon-button uk-margin-small-right"
                uk-icon="linkedin"
              />
            </a>
          </li>
        </ul>
        {/* <ul
          className="uk-subnav uk-subnav-divider uk-flex-center"
          data-uk-margin
        >
          <li>
            <a href="mailto:info@umaidigital.com">
              <span className="uk-margin-small-right" uk-icon="receiver" />
              info@umaidigital.com
            </a>
          </li>
          <li>
            <a href="tel:07923609647">
              <span className="uk-margin-small-right" uk-icon="mail" />
              {"+44 (0) 7923 609 647"}
            </a>
          </li>
        </ul> */}
        <p>
          Copyright &copy; {new Date().getFullYear()} Tom Ungerer.
          <br />
          All rights reserved.
        </p>
        <p>
          Built with ♥ by{" "}
          <a
            href="https://tomungerer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tom Ungerer
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Copyright