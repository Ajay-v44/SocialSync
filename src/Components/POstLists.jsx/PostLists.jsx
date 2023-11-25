import React, { useContext, useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import { PostList } from "../Store/PostsListProvider";
import WelcomeMessage from "../WelcomMEssage/WelcomeMessage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PostLists = () => {
  const { postList, addInitialPost } = useContext(PostList);
  const [fetching, setFettchig] = useState(false);
  useEffect(() => {
    setFettchig(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFettchig(false);
      });
    return () => {
      console.log("cleaning up useeffect");
      controller.abort();
    };
  }, []);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };

  return (
    <div>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {!fetching && postList.map((post) => <Posts key={post.id} post={post} />)}
    </div>
  );
};

export default PostLists;
