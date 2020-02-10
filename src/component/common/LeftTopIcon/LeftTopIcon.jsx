import React from "react";

import "./LeftTopIcon.css";

function LeftTopIcon() {
  return (
    <div className="LeftTopIcon">
      <ul>
        <li>
          <img src="/assets/img/me.jpg" alt="user" />
        </li>
        <li>
          <img src="/assets/img/me.jpg" alt="user" />
        </li>
        <li>
          <img src="/assets/img/me.jpg" alt="user" />
        </li>
      </ul>
      <div className="assign">Assign</div>
      <i class="fa fa-user"></i>
    </div>
  );
}

export default LeftTopIcon;
