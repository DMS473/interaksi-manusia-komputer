import React, { useState} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();


  const loginSubmitHandler = async (e) =>{
    // e.preventDefault();
    try{
      let username = document.getElementById("alas").value
      let password = document.getElementById("tinggi").value
      let result = await axios({
        url:"http://localhost:3000/login",
        method: "POST",
        data: {
          username: username,
          password: password
        }
      })
      if(result){
        navigate("/dashboard");
      }
    } catch(err){
        alert(err.response.data.message)
    }
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    loginSubmitHandler();
    // navigate("/dashboard");
  }

  return (
    <div class="App">
      <header class="App-header1">
        <h1 className="mt-3">Login</h1>
        {/* <Link class="btn btn-success" to="/segitga" onClick={moveLog}>
        Menuju Program Segitiga
      </Link> */}
        {/* <Link className="btn btn-success mt-2 mb-2" to="/lingkaran" onClick={moveLog}>
      Menuju Program Lingkaran
      </Link> */}
        <form class="mt-3" id="form">
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
              type="password"
              className="form-control"
              // placeholder="Input image"
              id="tinggi"
            ></input>
          </label>
          <br />
          <hr className="tebal bg-dark"></hr>
          <br />
          <button onClick={submitHandler} class="form-control bg-dark text-light">Log in</button>
          {/* <button class="form-control mt-1" >Register</button> */}
        </form>
      </header>
    </div>
  );
};

export default LoginPage;
