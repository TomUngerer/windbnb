import React from 'react'

const SearchBar = props => {
  return (
    <form class="uk-search uk-search-default">
      <input
        class="uk-search-input"
        type="search"
        placeholder={props.placeholder || "Search..."}
      />
      <button className="uk-search-icon-flip" data-uk-search-icon />
    </form>
  )
}

export default SearchBar;