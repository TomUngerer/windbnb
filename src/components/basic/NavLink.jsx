import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function NavLink({ children, to, exact }) {
  let match = useRouteMatch({
    path: to,
    exact: exact,
  });

  return (
    <li className={match ? "uk-active" : ""}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  )
}

export default NavLink