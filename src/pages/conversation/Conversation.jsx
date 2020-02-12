import React, { useState } from "react";

import Navbar from "../../component/features/navbar/Navbar";
import SideBar from "../../component/features/sidebar/Sidebar";
import Menu from "../../component/features/menu/Menu";
import TopIconMenu from "../../component/features/topIconMenu/TopIconMenu";
import Twit from "../../component/features/twit/Twit";
import Comments from "../../component/features/comments/Comments";
import WhatsApp from "../../component/features/whatapp/WhatApp";
import "./Conversation.css";

export default function Conversation() {
  const [openTwit, setOpenTwit] = useState(false);
  const [openWhatApp, setOpenWhatApp] = useState(false);
  const [openComment, setOpenComment] = useState(false);
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
        <div className="icon">
          <TopIconMenu />
        </div>
        <div className="buttons">
          <button>Twit</button>
          <button>WhatApp</button>
          <button>Comments</button>
        </div>
        <div className="twit">
          <Twit />
        </div>
        <div className="whatsApp">
          <WhatsApp />
        </div>
        <div className="comments">
          <Comments />
        </div>
      </div>
    </>
  );
}
