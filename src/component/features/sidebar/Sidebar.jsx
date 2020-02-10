import React from "react";
// import { Link, withRouter } from "react-router-dom";

import "./Sidebar.css";
import SidebarData from "../../../data/sitebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      {SidebarData.map((item, index) => (
        <div className="sidebarIcon" key={index}>
          <img src={item.icon} alt="Simpo log" />
          {/* <Link to={item.route}></Link> */}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
