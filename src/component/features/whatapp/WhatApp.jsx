import React, { useState } from "react";

import "./Whatapp.css";
import WhatAppData from "../../../data/WhatAppData";

function WhatApp() {
  const [comments, setComments] = useState(WhatAppData);
  const [inputedText, setInputedText] = useState("Type a messages...");

  const handleChange = e => {
    const value = e.target.value;
    setInputedText(value);
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      addComment();
    }
  };
  const getTimeOfTheDay = () => {
    const today = new Date();

    let h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    let pm = "AM";
    if (h > 12) {
      h = h - 12;
      pm = "PM";
    }
    let time = h + ":" + m + ":" + s + " " + pm;
    return time;
  };
  function addComment() {
    const inputObj = {
      name: "Zarela Reed",
      msg: inputedText,
      time: getTimeOfTheDay(),
      read: false
    };

    setComments([...comments, inputObj]);
    setInputedText("");
  }
  return (
    <div className="WhatApp">
      <div className="mesage">
        WhatsApp for Business: Don't forget to start your free trial
      </div>
      <div className="WhatApp-scroll">
        <a href="#textinput">
          <div className="replyCon">
            <img src="/assets/img/reply.png" alt="" /> Reply this conversation
          </div>
        </a>
        {comments.map((item, index) => (
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
        <textarea
          rows="100%"
          value={inputedText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="textinput"
          class="textinput"
          name="description"
        >
          Type a messages.. .
        </textarea>
        <label
          htmlFor="file-upload"
          className="bg-success form-control uploadFile text-white col-4"
        >
          <i class="fa fa-paperclip"></i>
          <input
            id="file-upload"
            type="file"
            className="d-none"
            // accept=".csv"
            // onChange={handleFilesPath}
          />
        </label>
      </div>
    </div>
  );
}

export default WhatApp;
