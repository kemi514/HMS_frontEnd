import React from "react";

import Comments from "../components/Comments";
import HostelList from "../components/HostelList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row my-5 py-3">
        <div className="col">
          <Sidebar/>
        </div>
        <div className="col">
          <HostelList />
        </div>
        <div className="col">
          <Comments /> {/* Incluing the comments component */}
        </div>
        <div className="comments"></div>
      </div>
    </>
  );
};

export default Home;
