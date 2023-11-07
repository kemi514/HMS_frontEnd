import React from "react";

import AdvancedSearch from "../components/AdvancedSearch";
import MyProfile from "../components/MyProfile";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="row my-5 py-3">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col">
          <MyProfile />
        </div>
        <div className="col">
         <AdvancedSearch/>
        </div>
        <div className="comments"></div>
      </div>
    </>
  );
};

export default Profile;
