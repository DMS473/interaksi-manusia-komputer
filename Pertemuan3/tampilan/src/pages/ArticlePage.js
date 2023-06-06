import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ArticlePage = () => {
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

  return (
    <div className="container">
      <h1>Berita Terkini</h1>
      <div className="row">
        {article.length !== 0 ? (
          article.map((post) => {
            const { title, image, slug, excerpt, body } = post;
            return (
              <div className="col-6 mt-2">
                <Link to={slug} className="text-decoration-none text-dark">
                  <div className="card">
                    <img
                      src={image}
                      alt="kosong"
                      className="img-fluid card-img-top"
                    />
                    <div className="card-body">
                      <h2>{title}</h2>
                      {/* <article>{body}</article> */}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div>Please wait...</div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
