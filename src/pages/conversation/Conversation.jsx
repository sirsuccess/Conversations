import React from "react";

import Navbar from "../../component/features/navbar/Navbar";
import "./Conversation.css";

export default function Conversation() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          {" "}
          <Navbar />
        </div>
        <div className="conversationTitle">title</div>
        <div className="sideBar">sidebar</div>
        <div className="menu">Open</div>
        <div className="icon">clock</div>
        <div className="twit">Zerela Reed</div>
        <div className="whatsApp">whatsApp</div>
        <div className="comments">comments</div>
      </div>
    </>
  );
}
