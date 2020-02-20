import React, { useState } from "react";

import "./Comments.css";
import CommentData from "../../../data/commentData";

function Comments() {
  const [comments, setComments] = useState(CommentData);
  const [inputedText, setInputedText] = useState("");

  const handleChange = e => {
    const value = e.target.value;
    setInputedText(value);
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      addComment();
    }
  };
  function addComment() {
    const inputObj = {
      img: "/assets/img/me.jpg",
      comment: inputedText
    };

    setComments([...comments, inputObj]);
    setInputedText("");
  }
  return (
    <div className="Comments">
      <div className="comment-scroll">
        {comments.map((item, index) => (
          <div className="innerComment" key={index}>
            <img src={item.img} alt="user" />
            <div className="commentMsg">{item.comment}</div>
          </div>
        ))}
      </div>
      <div className="reply">
        <img src="/assets/img/me.jpg" alt="user" />
        <div className="replyInput">
          <input
            type="text"
            className="commentInput"
            placeholder="Write your comment…."
            value={inputedText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <div className="send" onClick={addComment}>
            <i class="fa fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
