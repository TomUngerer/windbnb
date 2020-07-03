import React from 'react'

import { Link } from 'react-router-dom'

const Button = props => {
  const { color, path, style, type } = props
  const newPath = path
  ? path
  : '/'
  return (
    <Link to={newPath} style={style} type={type} className={`uk-button uk-button-${color ? color : 'default'}`}>
      {props.children}
    </Link>
  );
}

export default Button