import React from "react";

import "./Comments.css";
import CommentData from "../../../data/commentData";

function Comments() {
  return (
    <div className="Comments">
      <div className="comment-scroll">
        {CommentData.map((item, index) => (
          <div className="innerComment" key={index}>
            <img src={item.img} alt="user" />
            <div className="commentMsg">{item.comment}</div>
          </div>
        ))}
      </div>
      <div className="reply">
        <img src="/assets/img/me.jpg" alt="user" />
        <div className="replyInput">
          <input type="text" placeholder="Write your comment…." />
          <div className="send">
            <i class="fa fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
