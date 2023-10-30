import React, { useState, useEffect, useContext } from "react";
import Comment from "./Comment";
import DataContext from "../utilities/DataContext";
const Comments = () => {
  // Assuming you have a data source for comments
  const {comments} = useContext(DataContext)
  return (
    <div className="fix comments">
      <p className="comment-p opacity-25">comments and reviews</p>
      <div className="li-comments">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id}/>
        ))}
      </div>
    </div>
  );
};

export default Comments;
