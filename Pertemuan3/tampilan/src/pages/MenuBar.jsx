import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import {AiFillBulb} from 'react-icons/ai'

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const MenuBar = () => {
  let name = navigator.userAgent;
  const navigate = useNavigate();
  const movelogging = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/",
        method: "POST",
        data: {
          activity: `User Pindah ke halaman Lingkaran`,
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
    navigate("/lingkaran");
  };
  const movelogging1 = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/",
        method: "POST",
        data: {
          activity: `User Pindah ke halaman Segitiga`,
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
    navigate("/segitiga");
  };
  const movelogging2 = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/",
        method: "POST",
        data: {
          activity: `User Pindah ke halaman Home`,
          type: name,
        },
      });
    } catch (err) {
      alert(err);
    }
  };
  const moveLog2 = (e) => {
    e.preventDefault();

    movelogging2();
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-danger"
      style={{ backgrounColor: "lightblue" }}
    >
      {/* style={{marginRight: spacing + 'em'}} */}
      <div class="container">
        <Link class="navbar-brand logo" to="/" onClick={moveLog2}>
          {/* <AiFillBulb className='me-2'/> */}
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/segitiga" onClick={moveLog1}>
                Segitiga
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/lingkaran" onClick={moveLog}>
                Lingkaran
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/log">
                Log
              </Link>
            </li>
          </ul>
          {/* <ul className='ms-auto'>
                            <button onClick={() => logoutHandler()} className='btn btn-sm btn-success'>Logout</button>
                    </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
