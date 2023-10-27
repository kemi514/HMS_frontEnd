import React, { useState, useEffect } from "react";
import Hostel from "./Hostel";

const AllHostels = () => {
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [page, setPage] = useState(1);
  const Hostels = [
    {
      id: 1,
      hostelname: "DOUGLAS VILLA",
      images: "../../../public/hostels/66.jpg",
      direction: "Location ",
      rating: 3,
    },
    {
      id: 2,
      hostelname: "OLYMPIA",
      images: "../../../public/hostels/9.jpg",
      direction: "Location",
      rating: 5,
    },
    {
      id: 3,
      hostelname: "CASTLE VILLE",
      images: "../../../public/hostels/22.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 4,
      hostelname: "NANA",
      images: "../../../public/hostels/6.jpg",
      direction: "Location",
      rating: 5,
    },
    {
      id: 5,
      hostelname: "JJ",
      images: "../../../public/hostels/1.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 6,
      hostelname: "NAKIYINGI",
      images: "../../../public/hostels/22.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 7,
      hostelname: "AGHA KHAN",
      images: "../../../public/hostels/1.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 8,
      hostelname: "GOD IS ABLE",
      images: "../../../public/hostels/66.jpg",
      direction: "Location",
      rating: 4,
    },
    {
      id: 9,
      hostelname: "MISH",
      images: "../../../public/hostels/1.jpg",
      direction: "Location ",
      rating: 3,
    },

    // Add more hostel objects as needed
  ];

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
      <div className="row">
        {Hostels.map((hostel) => (
        
            <Hostel hostel={hostel} key={hostel.id}/>
        ))}
      </div>
         )}
    </div>
  );
};

export default AllHostels;
