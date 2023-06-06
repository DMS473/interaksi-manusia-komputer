import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import {AiFillBulb} from 'react-icons/ai'

import { Outlet, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Dashboard = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ backgrounColor: "lightblue" }}
      >
        {/* style={{marginRight: spacing + 'em'}} */}
        <div class="container">
          <Link class="navbar-brand logo" to="/dashboard">
            {/* <AiFillBulb className='me-2'/> */}
            Dashboard
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
              {/* <li class="nav-item">
                <Link class="nav-link" to="/segitiga" onClick={moveLog1}>
                  Segitiga
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/lingkaran" onClick={moveLog}>
                  Lingkaran
                </Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard/posts">
                  My Posts
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  Logout
                </Link>
              </li>
            </ul>
            {/* <ul className='ms-auto'>
                            <button onClick={() => logoutHandler()} className='btn btn-sm btn-success'>Logout</button>
                    </ul> */}
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Dashboard;
