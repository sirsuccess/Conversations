import React from "react";

import "./Whatapp.css";
import WhatAppData from "../../../data/WhatAppData";

function WhatApp() {
  return (
    <div className="WhatApp">
      <div className="mesage">
        WhatsApp for Business: Don't forget to start your free trial
      </div>
      <div className="WhatApp-scroll">
        <div className="replyCon">
          <img src="/assets/img/reply.png" alt="" /> Reply this conversation
        </div>
        {WhatAppData.map((item, index) => (
          <div className="innerWhatApp" key={index}>
            <div className="username">{item.name}</div>
            <div className={item.read ? "WhatAppMsg" : "lightBgMsg"}>
              {item.msg}
            </div>
            <div className="time">
              {item.time}{" "}
              <div className={item.read ? "check" : "display-none"}>
                <i class="fa fa-check"></i>
                <i class="fa fa-check"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="typeMesage">
        <input type="text" placeholder="Type a messages…" />
        <i class="fa fa-paperclip"></i>
      </div>
    </div>
  );
}

export default WhatApp;
