import React from "react";
import { FaStar, FaSearchLocation, FaArrowCircleRight, FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hostel = ({ hostel }) => {
  return (
    <div className="card my-4 px-0">
      <img src={hostel.images} className="card-image" alt={hostel.hostelname} />
      <div className="card-body">
        <small className="card-title">{hostel.hostelname}</small>
        <p className="card-text d-flex align-items-center">
        <svg style={{marginRight:5, height:15}}
            xmlns="http://www.w3.org/2000/svg"
            width="16.277"
            height="23.452"
            viewBox="0 0 16.277 23.452"
          >
            <g id="location-sign-svgrepo-com" transform="translate(-60.531)">
              <path
                id="Path_6"
                data-name="Path 6"
                d="M68.669,0a8.148,8.148,0,0,0-8.138,8.139c0,4.32,7.384,14.412,7.7,14.84l.293.4a.182.182,0,0,0,.294,0l.293-.4c.315-.427,7.7-10.52,7.7-14.84A8.149,8.149,0,0,0,68.669,0Zm0,5.224a2.915,2.915,0,1,1-2.915,2.915A2.918,2.918,0,0,1,68.669,5.224Z"
                transform="translate(0)"
                fill="#e14d4d"
              />
            </g>
          </svg>
          <small className="text-secondary">{hostel.direction}</small>
          
        </p>
        
        <small className="stars d-flex align-items-center justify-content-between my-2 text-secondary">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < Math.round(hostel.rating) ? "text-warning" : ""
              }
            />
          ))}
        </small>
        <small className="text-primary d-flex align-items-center justify-content-end more-link">
          <FaHandPointRight style={{marginRight:10}}/>View More 
        </small>
      </div>
    </div>
  );
};

export default Hostel;
