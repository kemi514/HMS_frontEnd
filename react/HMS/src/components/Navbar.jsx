import React from 'react'
import { BiSearch } from 'react-icons/bi'
const Navbar = () => {
  return (
    <div className="admin-dashboard mb-5">
        <div className="header p-2 px-5 d-flex align-items-center">
          <small>Hostel Management System</small>
          <div className="search-bar px-3">
            <input type="text" placeholder="Search for hostels..." />
            {/* <button> */}
              <BiSearch/>
            {/* </button> */}
          </div>
        </div>
      </div>
  )
}

export default Navbar
