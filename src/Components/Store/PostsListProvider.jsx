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
  }else if(action.type=="ADD_POST")
  {
    newPostilist=[action.payload,...currPostList]
  }
  else if(action.type=="ADD_InitialPOST"){
    newPostilist=action.payload.posts
  }
  return newPostilist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
   []
  );
  const addPost = (uid,postit,posbody,reactions,tags) => {
    dispatchPostList({
      type:"ADD_POST",
      payload:  {
        id: Date.now(),
        title: postit,
        body: posbody,
        reaction:reactions,
        userId: uid,
        tags:tags,
      }
    })
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type:"ADD_InitialPOST",
      payload:  {
   posts
      }
    })
  };
  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost,addInitialPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
