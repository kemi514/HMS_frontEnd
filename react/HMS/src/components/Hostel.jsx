import React from 'react'
import { FaStar, FaSearchLocation } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Hostel = ({hostel}) => {
  return (
    <div className="card">
              <img
                src={hostel.images}
                className="card-image"
                alt={hostel.hostelname}
              />
              <div className="card-body">
                <h5 className="card-title">{hostel.hostelname}</h5>
                <p className="card-text">
                  {hostel.direction} <FaSearchLocation />
                </p>
                <div className="stars d-flex align-items-center justify-content-between my-2 text-secondary">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < Math.round(hostel.rating) ? "text-warning" : ""
                      }
                    />
                  ))}
                </div>
                

            </div>
          </div>
  )
}

export default Hostel
