import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import jasraharja from "../assets/images/jasa-raharja.png";

const Home = () => {
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
  let name = navigator.userAgent;
  const navigate = useNavigate();
  const movelogging = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/",
        method: "POST",
        data: {
          activity: `User pindah ke halaman Segitiga`,
          type: name,
        },
      });
    } catch (err) {
      alert(err);
    }
  };
  const moveLog = (e) => {
    e.preventDefault();

    movelogging();
    navigate("/segitiga");
  };
  const movelogging1 = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/",
        method: "POST",
        data: {
          activity: `User pindah ke halaman Lingkaran`,
          type: name,
        },
      });
    } catch (err) {
      alert(err);
    }
  };

  const moveLog1 = (e) => {
    e.preventDefault();

    movelogging1();
    navigate("/lingkaran");
  };
  return (
    <div className="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/Logo_UIN_Syarif_Hidayatullah_Jakarta.jpg"
        width="700"
        height="500"
        className="mx-auto d-block"
        alt="jasa"
      />
      <div className="row">
        <div className="col-8">
          <h1>Berita Terbaru</h1>
          {/* <div className="row">
            <div className="col-5"><h1>Berita Terbaru</h1></div>
            <div className="col-7 mt-3"><Link to="article"></Link></div>
          </div> */}

          <hr></hr>
          <div className="row">
            {article.length !== 0 ? (
              article
                .filter((x, y) => y < 4)
                .map((post) => {
                  return (
                    <div className="col-6 mt-2">
                      <Link to={"article/"+post.slug} className="text-decoration-none text-dark">
                      <div className="card">
                        <img
                          className="img-fluid card-img-top"
                          src={post.image}
                        />
                        <div className="card-body">
                          <h5 className="card-title ">{post.title}</h5>
                          {/* <p className="card-text">{post.body}</p> */}
                        </div>
                      </div>
                      </Link>
                    </div>
                    // <h1>tes</h1>
                  );
                })
            ) : (
              <h1>Loading</h1>
            )}
          </div>
          <Link to="article" >Tampilkan Lebih Banyak</Link>
        </div>
        <div className="col-4">
          <h1>Profile</h1>
          <hr></hr>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoQsRZ-dgh-eVEqnYquRTjqBtaPGc5lDaug&usqp=CAU"
          className="mt-2"></img>
          <p>Universitas Islam Negeri (UIN) Jakarta adalah salah satu perguruan tinggi di Jakarta, Indonesia, yang didirikan pada tahun 1957. Kampus UIN Jakarta terletak di Jl. Prof. Dr. Hamka No. 5, Ciputat, Tangerang Selatan, Banten.</p>
          <p>UIN Jakarta dikenal sebagai institusi pendidikan Islam yang menawarkan berbagai program studi yang mencakup berbagai disiplin ilmu, mulai dari ilmu agama dan keislaman hingga ilmu sosial dan humaniora. Kampus ini memiliki fakultas-fakultas seperti Fakultas Ushuluddin dan Filsafat, Fakultas Syariah dan Hukum...</p>
          <Link to="about">Read More..</Link>
        </div>
      </div>
      {/* <input type="hidden" className="mt-3 mb-3"/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <hr></hr> */}
    </div>
    // <div class="App ">
    //   <header class="App-header" style={{ minHeight: "92vh" }}>
    //     {/* <div className="Atasan"> */}
    //     <h1>Program menghitung Luas Bangun Datar!</h1>
    //     <Link class="btn btn-success" to="/segitga" onClick={moveLog}>
    //       Menuju Program Segitiga
    //     </Link>

    //     <Link class="btn btn-success mt-3" to="/segitga" onClick={moveLog1}>
    //       Menuju Program Lingkaran
    //     </Link>
    //     {/* <Link className="btn btn-success mt-2 mb-2" to="/lingkaran" onClick={moveLog}>
    //     Menuju Program Lingkaran
    //     </Link> */}
    //     {/* </div> */}
    //   </header>
    // </div>
  );
};

export default Home;
