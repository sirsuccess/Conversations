import React from "react";
// import { Link, withRouter } from "react-router-dom";

import "./TopIcon.css";
import TopIconsData from "../../../data/topIcons";

function Sidebar() {
  return (
    <div className="TopIcon">
      {TopIconsData.map((item, index) => (
        <div className="opIconIcon" key={index}>
          <img src={item.icon} alt="Simpo log" />
          <span className="tooltiptex">{item.tooltip}</span>
          {/* <Link to={item.route}></Link> */}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
