import React,{ useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../Store/PostsListProvider";

const Posts = ({ post }) => {
  const  {deletePost} = useContext(PostList)
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
            <AiFillDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary m-1 " key={tag}>{tag}</span>
        ))}
        <div className="alert alert-info reaction" role="alert">
         This Post Has Been Reacted By: <b>{post.reactions}</b> People
        </div>
      </div>
    </div>
  );
};

export default Posts;
