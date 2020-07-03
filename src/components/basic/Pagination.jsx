import React from 'react'
import { Link } from "react-router-dom"

const Pagination = ({next, previous}) => {
  return (
      <ul className="uk-pagination">
        <li>
          {next && (
            <Link to={`/article/${next.strapiId}`} rel="prev">
              <span
                className="uk-margin-small-right"
                data-uk-pagination-previous
              ></span>{" "}
              Previous
            </Link>
          )}
        </li>
        <li className="uk-margin-auto-left">
          {previous && (
            <Link to={`/article/${previous.strapiId}`} rel="prev">
              Next{" "}
              <span
                className="uk-margin-small-left"
                data-uk-pagination-next
              ></span>
            </Link>
          )}
        </li>
      </ul>
  )
}

export default Pagination