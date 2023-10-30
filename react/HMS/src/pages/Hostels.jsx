import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AllHostels from "../components/AllHostels";
import AdvancedSearch from "../components/AdvancedSearch";
import { FaArrowAltCircleUp, FaRegHandPointUp } from "react-icons/fa";
import { useState, useContext } from "react";
import DataContext from "../utilities/DataContext";
import Search from "../components/Search";
const Hostels = () => {
  const {blurred} = useContext(DataContext)
  return (
    <>
    <div className={`blurred ${blurred?'blurred-show': ''}`}>
    <Search />
    
    </div>
      <Navbar/>
          <div className="row my-5 py-3">
        <div className="col-lg d-none d-lg-block">
          <Sidebar/>
        </div>
        <div className="col-lg">
          <AllHostels />
        </div>
        <div className="col-lg d-none d-lg-block">
         <AdvancedSearch /> {/* Incluing the comments component */}
         <a href="#" className="navup d-flex align-items-center">
         <FaArrowAltCircleUp className="svg my-2"/>
          <small className="text-secondary">Back to top</small>
         </a>
        </div>
        <div className="comments"></div>
      </div>
        
           
     
          
    </>
  );
};

export default Hostels;
