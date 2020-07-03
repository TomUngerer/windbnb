import React from 'react'

const Main = props => {
  return (
    <main
      id="site-main"
      className="uk-section uk-section-default uk-padding-remove-vertical"
    >
      {props.children}
    </main>
  );
}

export default Main