import React from "react";

import Navbar from "../../component/features/navbar/Navbar";
import SideBar from "../../component/features/sidebar/Sidebar";
import Menu from "../../component/features/menu/Menu";
import TopIconMenu from "../../component/features/topIconMenu/TopIconMenu";
import Twit from "../../component/features/twit/Twit";
import Comments from "../../component/features/comments/Comments";
import WhatsApp from "../../component/features/whatapp/WhatApp";
import "./Conversation.css";

export default function Conversation() {
  function twitFun() {
    const twit = document.querySelector(".twit");
    const whatsApp = document.querySelector(".whatsApp");
    const comment = document.querySelector(".comments");

    // twit.classList.toggle("twit-display-none");
    twit.style.display = "block";
    whatsApp.style.display = "none";
    comment.style.display = "none";
    // return twit.classList.add("twit-display-none");
  }
  function whatappFun() {
    const twit = document.querySelector(".twit");
    const whatsApp = document.querySelector(".whatsApp");
    const comment = document.querySelector(".comments");

    twit.style.display = "none";
    whatsApp.style.display = "block";
    comment.style.display = "none";
  }
  function commentsFun() {
    const twit = document.querySelector(".twit");
    const whatsApp = document.querySelector(".whatsApp");
    const comment = document.querySelector(".comments");

    twit.style.display = "none";
    whatsApp.style.display = "none";
    comment.style.display = "block";
  }
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
          <button onClick={twitFun}>Twit</button>
          <button onClick={whatappFun}>WhatApp</button>
          <button onClick={commentsFun}>Comments</button>
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
