import React from 'react'
import {
    FaHome,
    FaUser,
    FaCalendar,
    FaSignOutAlt,
    FaSearch,
  } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar fix">
            <ul>
              <li className='d-flex align-items-center'>
                <FaHome className='mx-2'/> <small>Home</small>
              </li>
              <li>
                <FaUser className='mx-2'/> <small>My Profile</small>
              </li>
              <li>
                <FaCalendar className='mx-2'/> <small>My Reservation</small>
              </li>
              <li>
                <FaSignOutAlt className='mx-2'/> <small>Sign Out</small>
              </li>
            </ul>
          </div>
  )
}

export default Sidebar
