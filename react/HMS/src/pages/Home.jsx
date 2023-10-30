import {useContext} from "react";

import Comments from "../components/Comments";
import HostelList from "../components/HostelList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DataContext from "../utilities/DataContext";
const Home = () => {
  const {name} = useContext(DataContext)
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
          {name}
          <Comments /> {/* Incluing the comments component */}
        </div>
        <div className="comments"></div>
      </div>
    </>
  );
};

export default Home;
