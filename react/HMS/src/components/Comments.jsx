import React, { useState, useEffect } from "react";

const Comments = () => {
  // Assuming you have a data source for comments
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from an API or database and set them in the state
    // Replace this with actual data retrieval logic
    // For this example, we'll use dummy data
    const dummyComments = [
      {
        id: 1,
        user: "john doe",
        profileImage: "user1-profile.jpg",
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
      // Add more comments as needed
    ];

    setComments(dummyComments);
  }, []);

  return (
    <div className="fix">
      <p className="comment-p">comments and reviews</p>
      <div className="li-comments">
        {comments.map((comment) => (
          <div key={comment.id}>
            {comment.user} <br />
            {/* <img src="../../../public/hostels/1.jpg" alt="" /> */}
            <small className="comment-date">{comment.time}</small> <br />
            <p className="text-secondary">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
