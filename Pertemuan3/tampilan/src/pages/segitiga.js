import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Segitiga = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(0);
  let name = navigator.userAgent
  const navigate = useNavigate();
  
  const addMovie = async () => {
    try {
        let alas1 = document.getElementById("alas").value;
  let tinggi1 = document.getElementById("tinggi").value;
  let hasil1 = (alas1 * tinggi1) / 2;
      let result = await axios({
        url: "http://localhost:3000/",
        method: "POST",
        data: {
          activity: `User menghitung luas segitiga dengan alas ${alas1}, tinggi ${tinggi1} = luas = ${hasil1}`,
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
    calculate()
  };

  const movelogging = async () => {
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
  const moveLog = (e) => {
    e.preventDefault();
    
    movelogging()
    navigate("/lingkaran");
  }
  
  let calculate = () => {
    let alas;
      let tinggi;
    // event.preventDefault();

    alas = document.getElementById("alas").value;
        tinggi = document.getElementById("tinggi").value;
        let hasil = (alas * tinggi) / 2;
        document.getElementById("hasil").innerHTML = "Luas Segitiga : " + hasil;
  };
  return (
    <div class="App">
      <header class="App-header">
        <h1>Program menghitung Luas Segitiga!</h1>
        {/* <Link class="btn btn-success" to="/lingkaran" onClick={moveLog}>
          Menuju Program Lingkaran
        </Link> */}
        {/* <Link className="btn btn-success mt-2 mb-2" to="/lingkaran" onClick={moveLog}>
        Menuju Program Lingkaran
        </Link> */}
        <form
          class="mt-3"
          onSubmit="calculate(event)"
          id="form"
          
        >
          <label>
            Panjang Alas :
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
          <br />
          <label>
            Panjang Tinggi :
            <br />
            {/* <input
              class="form-control"
              type="text"
              name="tinggi"
              id="tinggi"
              value=""
            /> */}
            <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
                // placeholder="Input image"
                id="tinggi"
              ></input>
          </label>
          <br />
          <br />
          <button class="btn btn-primary" onClick={submitHandler}>Hitung Luas</button>
          <br />
          <br />

          <h2 id="hasil">Luas Segitiga :</h2>
        </form>
      </header>
    </div>
  );
};

export default Segitiga;
