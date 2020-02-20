import React from "react";
// import { Link, withRouter } from "react-router-dom";

import "./Twit.css";
import TwitData from "../../../data/twitData";

function Twit() {
  return (
    <div className="Twit">
      {TwitData.map((item, index) => (
        <div className="innerTwit" key={index}>
          <div className="topTwit">
            <div className="imgSide">
              <img src={item.socialMediaImg} alt="Social media" />
              <div className="Twitname">{item.name}</div>
            </div>
            <div className="date">{item.date}</div>
          </div>
          <div className="tileAttachment">
            <div className="title">{item.title}</div>
            <i className={item.Attachement}></i>
          </div>
          <div className="comment">{item.comment}</div>
          {/* <i class="fas fa-paperclip"></i> */}
        </div>
      ))}
    </div>
  );
}

export default Twit;
