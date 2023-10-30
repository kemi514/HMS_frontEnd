import React, { useState, useEffect } from "react";
import Hostel from "./Hostel";
import DataContext from "../utilities/DataContext";
import { useContext } from "react";
const AllHostels = () => {
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [page, setPage] = useState(1);
  const {Hostels} = useContext(DataContext)

  useEffect(() => {
    // Simulate an asynchronous data loading process
    setTimeout(() => {
      setLoading(false); // Set loading to false when the data is loaded (simulated)
    }, 2000); // Simulate a 2-second loading delay
  }, []);
  return (
    <div className="container">
        {loading ? ( // Conditionally render loading spinner while loading is true
        <div className="loading-spinner">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : ( 
      <div>
        <small className="w-50 rounded d-md-block d-none px-3 havailable py-3">All Hostels available</small>
        {Hostels.map((hostel) => (
        
            <Hostel hostel={hostel} key={hostel.id}/>
        ))}
      </div>
         )}
    </div>
  );
};

export default AllHostels;
