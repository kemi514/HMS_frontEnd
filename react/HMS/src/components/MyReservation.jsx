import React from "react";
import { FaAngleRight, FaSearchLocation, FaStar } from "react-icons/fa";

const MyReservation = () => {
  return (
    <>
      <div className="r-image">
        <div className="card-image">
          <img
            src="../../../public/hostels/s8.jpg"
            className="d-block w-100"
            alt=""
          />
        </div>
      </div>

      <div className="r-prof">
        <small>RM</small> <smalL className="prof1">306</smalL> <br />
        <smalL className="prof2">DOUGLAS VILLA</smalL> <br />
        <smalL className="prof3">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </smalL>{" "}
        <br />
        <smalL className="prof3">
          <FaSearchLocation /> Located in kikoni, plot 1234
        </smalL>{" "}
        <br />
        <small>UGX 2000000</small> <br />
        <button className="search-btn bg-dark py-2 rounded">
          <small>
            {" "}
            <FaAngleRight />
            Reserve Room
          </small>
        </button>
      </div>
    </>
  );
};

export default MyReservation;
