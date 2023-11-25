import React, { useContext } from "react";
import Posts from "../Posts/Posts";
import { PostList } from "../Store/PostsListProvider";
import WelcomeMessage from "../WelcomMEssage/WelcomeMessage";

const PostLists = () => {
  const { postList } = useContext(PostList); 
  const handleGetPostsClick =()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(console.log);
                
  }

  return (
    <div>
      {postList.length===0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick}/>}
      {postList.map((post) => (
        <Posts key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default PostLists;
