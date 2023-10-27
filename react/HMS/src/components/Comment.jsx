import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="d-flex my-4">
      
     <div className="ribbon" style={{marginRight: 15}}>
        <div className="image">
        <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="circle comment-i"
        alt=""
      />
        </div>
     </div>
    <div className="comment-details" style={{color: '#001031'}}>
    {comment.user}  <br />
      <small className="comment-date opacity-25">{comment.time}</small> <br />
      <p style={{color:'#5A7580', fontSize: 14}}>{comment.comment}</p>
    </div>
    </div>
  );
};

export default Comment;
