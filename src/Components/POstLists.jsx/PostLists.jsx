import React, { useContext } from "react";
import Posts from "../Posts/Posts";
import { PostList } from "../Store/PostsListProvider";

const PostLists = () => {
  const { postList } = useContext(PostList); 

  return (
    <div>
      {postList.map((post) => (
        <Posts key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default PostLists;
