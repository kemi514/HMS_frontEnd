import React from "react";

import AdvancedSearch from "../components/AdvancedSearch";
import MyReservation from "../components/MyReservation";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Reservation = () => {
  return (
    <>
      <Navbar />
      <div className="row my-5 py-3">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col">
          <MyReservation />
        </div>
        <div className="col">
          <AdvancedSearch />
        </div>
        <div className="comments"></div>
      </div>
    </>
  );
};

export default Reservation;
