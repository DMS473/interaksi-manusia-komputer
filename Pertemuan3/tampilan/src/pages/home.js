import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
    let name = navigator.userAgent
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
        
        movelogging()
        navigate("/segitiga");
      }
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
        
        movelogging1()
        navigate("/lingkaran");
      }
  return (
    <div class="App ">
      <header class="App-header" style={{ minHeight: "92vh" }}>
        {/* <div className="Atasan"> */}
        <h1>Program menghitung Luas Bangun Datar!</h1>
        <Link class="btn btn-success" to="/segitga" onClick={moveLog}>
          Menuju Program Segitiga
        </Link>

        <Link class="btn btn-success mt-3" to="/segitga" onClick={moveLog1}>
          Menuju Program Lingkaran
        </Link>
        {/* <Link className="btn btn-success mt-2 mb-2" to="/lingkaran" onClick={moveLog}>
        Menuju Program Lingkaran
        </Link> */}
        {/* </div> */}
      </header>
    </div>
  )
}

export default Home