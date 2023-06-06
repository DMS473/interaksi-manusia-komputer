import React, { useState, useEffect } from "react";
import axios from "axios";

import { Outlet, Link } from "react-router-dom";

const MyPosts = () => {
  const [article, setArticle] = useState([]);
  const URL = "http://localhost:3000/getPost";
  const URL1 = "http://192.168.18.50:3000/getPost";

  const getArticle = async () => {
    try {
      let temp = await axios({
        url: "http://localhost:3000/getPostBanyak",
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

  const removeMovie = async (id) => {
    try {
      await axios({
        url: `http://localhost:3000/deletePost/${id}`,
        method: "DELETE",
      });
      getArticle();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="container">
      <h1>MyPosts</h1>
      <Link className="btn btn-success mt-2 mb-2" to="/dashboard/posts/add">
        +add post
      </Link>
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered border-success">
            <thead>
              <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {article.length !== 0 ? (
                article.map((post) => {
                  return (
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>
                            {/* <button className="btn btn-primary">View</button> */}
                            <Link to={"edit/"+post.slug} className="btn btn-warning">Edit</Link>
                            <button onClick={() => removeMovie(post.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    // <div className="col-4">
                    //     <div className="card">
                    //         <img className="img-fluid card-img-top" src={post.image} />

                    //     </div>
                    // </div>
                    // <h1>tes</h1>
                  );
                })
              ) : (
                <h1>Loading</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
