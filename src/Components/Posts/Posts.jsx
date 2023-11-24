import React from "react";
import { AiFillDelete } from "react-icons/ai";
const Posts = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <AiFillDelete />
            <span class="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary m-1 ">{tag}</span>
        ))}
        <div class="alert alert-info reaction" role="alert">
         This Post Has Been Reacted By: <b>{post.reaction}</b> People
        </div>
      </div>
    </div>
  );
};

export default Posts;
