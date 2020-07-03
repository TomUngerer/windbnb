import React from 'react'

const Section = props => {
  const container = props.container ? `uk-container-${props.container}` : ''
  return (
    <section className="uk-section">
      <div className={`uk-container ${container}`}>
        {props.children}
      </div>
    </section>
  )
}

export default Section