import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify"
import parse from "html-react-parser"

const PostPage = () => {
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

  const cleanHTML = DOMPurify.sanitize(article.body, {
    USE_PROFILES: { html:true}
  })

  return (
    <div className="container mx-auto">
      {/* {article.title} */}
      {article.length !== 0 ? (
        <div>
          <h1>{article.title}</h1>
          <img src={article.image} className="img-fluid"/>
          {/* <article>{ dangerouslySetInnerHTML=article.body }</article> */}
          <article>{parse(cleanHTML)}</article>
        </div>
      ) : (
        //   article.map((post) => {
        //     const { title, image, slug, excerpt, body } = post;
        //     return (
        //       <div className="col-6 mt-2">
        //         <Link to={slug} className="text-decoration-none text-dark">
        //           <div className="card">
        //             <img
        //               src={image}
        //               alt="kosong"
        //               className="img-fluid card-img-top"
        //             />
        //             <div className="card-body">
        //               <h2>{title}</h2>
        //               {/* <article>{body}</article> */}
        //             </div>
        //           </div>
        //         </Link>
        //       </div>
        //     );
        //   })
        <div>Please wait...</div>
      )}
    </div>
  );
};

export default PostPage;
