import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST
  );
  const addPost = () => {};
  const deletePost = () => {};

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
    reaction: 0,
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
