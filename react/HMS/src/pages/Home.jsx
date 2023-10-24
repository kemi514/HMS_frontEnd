import React from "react";
import {
  FaHome,
  FaUser,
  FaCalendar,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";
import Comments from "../components/Comments";
import HostelList from "../components/HostelList";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="item">
          <div className="sidebar fix">
            <ul>
              <li>
                <FaHome /> Home
              </li>
              <li>
                <FaUser /> My Profile
              </li>
              <li>
                <FaCalendar /> My Reservation
              </li>
              <li>
                <FaSignOutAlt /> Sign Out
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <HostelList />
        </div>
        <div className="item">
          <Comments /> {/* Incluing the comments component */}
        </div>
        <div className="comments"></div>
      </div>
    </>
  );
};

export default Home;
