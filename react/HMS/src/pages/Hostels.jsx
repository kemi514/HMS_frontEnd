import React from "react";
import Navbar from "../components/Navbar";
import AllHostels from "../components/allHostels";

const Hostels = () => {
  return (
    <>
      <Navbar />
      <div className="text-center my-5">
      <AllHostels />
      </div>
    </>
  );
};

export default Hostels;
