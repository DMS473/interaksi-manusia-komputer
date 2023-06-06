import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [slug1, setSlug1] = useState("");
  const [body, setBody] = useState("");

  const [article, setArticle] = useState([]);
  const URL = "http://localhost:3000/getPost";
  const URL1 = "http://192.168.18.50:3000/getPost";

  //   const slug = 1;
  const { slug } = useParams();

  const getArticle = async () => {
    try {
      let temp = await axios({
        url: `http://localhost:3000/getPost/${slug}`,
        method: "GET",
      });
      console.log(temp.data);
      setArticle(temp.data);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    console.log("use effect berjalan");
    getArticle();
  }, []);

  const editPost = async () => {
    try {
        // let isibody = document.getElementById("body").value
        let result = await axios({
            url: "http://localhost:3000/updatePost/12",
            method: "PUT",
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
    editPost();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Edit Posts</h3>
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
                // value={article.title}
              ></input>
            </div>
            <div className="mb-3">
              <label>Slug</label>
              <input
                onChange={(e) => setSlug1(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input Slug"
                // value={article.slug}
              ></input>
            </div>
            <div className="mb-3">
              <label>Image</label>
              <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input Image"
                // value={article.image}
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
                // value={article.body}
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
  )
}

export default EditPost