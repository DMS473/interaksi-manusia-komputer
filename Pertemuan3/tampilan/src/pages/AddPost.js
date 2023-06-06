import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Trix from "trix";
const AddPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [slug, setSlug] = useState("");
  const [body, setBody] = useState("");

  const addPost = async () => {
    try {
        // let isibody = document.getElementById("body").value
        let result = await axios({
            url: "http://localhost:3000/addPost",
            method: "POST",
            data: {
                title,
                image,
                slug,
                body
            }
        })
        navigate("/dashboard")
    } catch (err) {
        alert(err.message)
    }
  };
  const submitHandler = (e) => {
    e.preventDefault()
    addPost();
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Create Posts</h3>
        </div>
        <div className="col-6 mx-auto form submi">
          <form>
            <div className="mb-3">
              <label>Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input Title"
              ></input>
            </div>
            <div className="mb-3">
              <label>Slug</label>
              <input
                onChange={(e) => setSlug(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input Slug"
              ></input>
            </div>
            <div className="mb-3">
              <label>Image</label>
              <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input Image"
              ></input>
            </div>
            <div className="mb-3">
              <label>Body</label>
              {/* <input
                // onChange={(e) => setBody(e.target.value)}
                type="hidden"
                id="body"
                name="content"
              ></input>
              <trix-editor input="body"></trix-editor> */}
              <textarea
                onChange={(e) => setBody(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input Body"
              ></textarea>
            </div>
            <div className="mb-3">
                <button className="btn btn-success" onClick={submitHandler}>
                    Submit
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
