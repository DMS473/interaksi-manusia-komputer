import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Lingkaran = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(0);
  let name = navigator.userAgent;
  const navigate = useNavigate();

  const addMovie = async () => {
    try {
      let alas1 = document.getElementById("alas").value;
      //   let tinggi1 = document.getElementById("tinggi").value;
      let hasil1 = alas1 * alas1 * 3.14;
      let result = await axios({
        url: "http://localhost:3000/",
        method: "POST",
        data: {
          activity: `User menghitung luas Lingkaran dengan jari-jari ${alas1}, luas = ${hasil1}`,
          type: name,
        },
      });
    } catch (err) {
      alert(err);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addMovie();
    calculate();
  };

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
  let calculate = () => {
    let alas;
    //   let tinggi;
    // event.preventDefault();

    alas = document.getElementById("alas").value;
    // tinggi = document.getElementById("tinggi").value;
    let hasil = alas * alas * 3.14;
    document.getElementById("hasil").innerHTML = "Luas Lingkaran : " + hasil;
  };
  return (
    <div class="App">
      <header class="App-header">
        <h1>Program menghitung Luas Lingkaran!</h1>
        {/* <Link class="btn btn-success" to="/segitga" onClick={moveLog}>
          Menuju Program Segitiga
        </Link> */}
        {/* <Link className="btn btn-success mt-2 mb-2" to="/lingkaran" onClick={moveLog}>
        Menuju Program Lingkaran
        </Link> */}
        <form class="mt-3" onSubmit="calculate(event)" id="form">
          <label>
            Panjang Jari-jari :
            <br />
            {/* <input
              class="form-control"
              type="text"
              name="alas"
              id="alas"
              value=""
            /> */}
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              className="form-control"
              // placeholder="Input image"
              id="alas"
            ></input>
          </label>
          {/* <br />
          <label>
            Panjang Tinggi :
            <br />
            <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
                // placeholder="Input image"
                id="tinggi"
              ></input>
          </label> */}
          <br />
          <br />
          <button class="btn btn-primary" onClick={submitHandler}>
            Hitung Luas
          </button>
          <br />
          <br />

          <h2 id="hasil">Luas Lingkaran :</h2>
        </form>
      </header>
    </div>
  );
};

export default Lingkaran;
