import React from "react";

import Navbar from "../../component/features/navbar/Navbar";
import SideBar from "../../component/features/sidebar/Sidebar";
import Menu from "../../component/features/menu/Menu";
import "./Conversation.css";

export default function Conversation() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          {" "}
          <Navbar />
        </div>
        <div className="conversationTitle">Conversations</div>
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="menu">
          <Menu />
        </div>
        <div className="icon">clock</div>
        <div className="twit">Zerela Reed</div>
        <div className="whatsApp">whatsApp</div>
        <div className="comments">comments</div>
      </div>
    </>
  );
}
