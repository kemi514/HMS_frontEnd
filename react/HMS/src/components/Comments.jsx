import React, { useState, useEffect } from "react";
import Comment from "./Comment";
const Comments = () => {
  // Assuming you have a data source for comments
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "john doe",
      profileImage: "u",
      comment: "This hostel is great!",
      time: "12 hours ago",
    },
    {
      id: 2,
      user: "john doe",
      comment: "Excellent service and facilities.",
      time: "12 hours ago",
    },
    {
      id: 3,
      user: "john doe",
      comment: " Consider improving the speed of the WiFi.",
      time: "12 hours ago",
    },
    {
      id: 4,
      user: "john doe",
      comment: "Train your staff to be more friendly.",
      time: "12 hours ago",
    },
    {
      id: 5,
      user: "john doe",
      comment:
        "My experience at this hostel was terrible. The room was dirty, and the facilities were in poor condition.",
      time: "12 hours ago",
    },
    {
      id: 5,
      user: "john doe",
      comment:
        "My experience at this hostel was terrible. The room was dirty, and the facilities were in poor condition.",
      time: "12 hours ago",
    },
    {
      id: 5,
      user: "john doe",
      comment:
        "My experience at this hostel was terrible. The room was dirty, and the facilities were in poor condition.",
      time: "12 hours ago",
    },
    
  ]);
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
