import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostilist=currPostList
  if(action.type=='DELETE_POST'){
    newPostilist=currPostList.filter(post=>post.id!==action.payload.postid);
  }
  return newPostilist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST
  );
  const addPost = () => {};
  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST = [
  {
    id: "1",
    title: "buy thakkali",
    body: "going to buy thakkali",
    reaction: 10,
    userId: "user-9",
    tags: ["shoping", "thakkali"],
  },
  {
    id: "2",
    title: "got supply",
    body: "collage supply",
    reaction: 12,
    userId: "user-10",
    tags: ["college", "supply"],
  },
];
export default PostListProvider;
