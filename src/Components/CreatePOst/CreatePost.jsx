import React, { useRef } from "react";
import { useContext } from "react";
import { PostList } from "../Store/PostsListProvider";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userid = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const uid = userid.current.value;
    const postit = postTitle.current.value;

    const posbo = postBody.current.value;

    const reac = reactions.current.value;

    const tg = tags.current.value.split(" ");
    userid.current.value=""
    postTitle.current.value=""
    postBody.current.value=""
    reactions.current.value=""
    addPost(uid,postit,posbo,reac,tg)
  };
  return (
    <div className="d-flex justify-content-center m-5 shadow-lg ">
      <form className=" p-5 w-75" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={postTitle}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="How you are feeling today?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Content
          </label>
          <input
            ref={postBody}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            User ID
          </label>
          <input
            ref={userid}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tags
          </label>
          <input
            ref={tags}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Reactions
          </label>
          <input
            ref={reactions}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
