import React,{useContext} from 'react'
import { FaStar } from 'react-icons/fa'
import DataContext from '../utilities/DataContext'
function AdvancedSearch() {
  const {Hostels} = useContext(DataContext)
  return (
    <div className='w-75 afixed '>
      <p className="text-center rounded text-light py-2" style={{backgroundColor:"#001031"}}>
        <small className='opacity-75'>Advanced Search</small>
      </p>
      <div className="custom-shadow p-3 rounded advancedSearch d-flex justify-content-beween">
     <small className='d-flex justify-content-between align-items-center'>Hostel <input type="text" list="hostels"/><datalist id='hostels'> 
      {
        Hostels.map(hostel=>(
          <option value={hostel.hostelname} key={hostel.id}>{hostel.hostelname}</option>
        ))
      }
     </datalist>
     </small>
     <small className='d-flex justify-content-between align-items-center'>Hostel rating <span  className='d-flex justify-content-around w-50 search-rating'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span></small>
     <small className='d-flex justify-content-between align-items-center'>Location <input type="text" list='locations'/><datalist id='locations'>
     {
        Hostels.map(hostel=>(
          <option value={hostel.direction} key={hostel.id}>{hostel.direction}</option>
        ))
      }
      </datalist></small>
     <small className='d-flex justify-content-between align-items-center'>Capacity <div className='w-45 d-flex justify-content-between align-items-center'>
     1<input type="range" name="" id="" step={50}/>3</div></small>
     <small className='d-flex justify-content-between align-items-center'>Number of occupants <input type="number" max={5} min={1} className='w-25'/></small>
     <small className='d-flex justify-content-between align-items-center'>Price (UGX)<input type="number" min={400000}/></small>
     <button className="search-btn bg-dark py-2 rounded"><small>Search for room</small></button>
      </div>
    </div>
  )
}

export default AdvancedSearch
