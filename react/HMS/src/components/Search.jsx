import React from 'react'
import { BiSearch } from 'react-icons/bi'
const Search = () => {
  return (
    <div className="search-bar px-3 d-lg-block d-none" >
    <input type="text" placeholder="Search for hostels..." />
    {/* <button> */}
      <BiSearch/>
    {/* </button> */}
  </div>
  )
}

export default Search
