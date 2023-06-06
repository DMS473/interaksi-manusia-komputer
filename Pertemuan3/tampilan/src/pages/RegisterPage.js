import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(0);
  const navigate = useNavigate();

  const addUser = async () => {
    try {
      let username = document.getElementById("alas").value;
        let password = document.getElementById("tinggi").value;
      let result = await axios({
        url: "http://localhost:3000/register",
        method: "POST",
        data: {
          username: username,
          password: password,
        },
      });
    } catch (err) {
      alert(err);
    }
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    addUser();
    navigate("/login");
  };
  
  
  return (
    <div class="App">
    <header class="App-header1">
      <h1 className='mt-3'>Register</h1>
      {/* <Link class="btn btn-success" to="/segitga" onClick={moveLog}>
        Menuju Program Segitiga
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
          Username :
          <br />
          {/* <input
            class="form-control"
            type="text"
            name="alas"
            id="alas"
            value=""
          /> */}
          <input
            //   onChange={(e) => setImage(e.target.value)}
              type="text"
              className="form-control"
              // placeholder="Input image"
              id="alas"
            ></input>
        </label>
        <br />
        <label>
          Password :
          <br />
          <input
            //   onChange={(e) => setImage(e.target.value)}
              type="text"
              className="form-control"
              // placeholder="Input image"
              id="tinggi"
            ></input>
        </label>
        <br />
        <hr className='tebal bg-dark'></hr>
        <br />
        <button class="form-control bg-dark text-light" onClick={submitHandler}>Register</button>
        <button class="form-control mt-1" >Log in</button>

      </form>
    </header>
  </div>
  )
}

export default RegisterPage