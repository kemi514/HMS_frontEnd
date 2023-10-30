import React, {useContext} from 'react'

import { FaBars } from 'react-icons/fa'
import DataContext from '../utilities/DataContext'
import Search from './Search'
const Navbar = () => {
  let {blurred, setBlurred} = useContext(DataContext)
  return (
    <div className="admin-dashboard  ">
        <div className="header p-2 px-5 d-flex align-items-center justify-content-between" id='nav'>
          <small><span className='d-lg-none d-block'>HMS</span><span className='d-lg-block d-none'>Hostel Management System</span></small>
          <Search/>
        <FaBars className='d-block d-lg-none d-block' onClick={()=>setBlurred(!blurred)}/>
        </div>
      </div>
  )
}

export default Navbar
