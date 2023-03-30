// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Segitiga from "./pages/segitiga";
import Lingkaran from "./pages/lingkaran";
import LogPage from "./pages/LogPage";
import MenuBar from "./pages/MenuBar";

function App() {
  return (
    <div>
      {/* <h1> Hello world</h1> */}
      <BrowserRouter>
        <MenuBar/>
        <Routes>
          
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} /> */}
            
            {/* <Route path="genres" element={<Genre />} />
            <Route path="studios" element={<Studio />} />
            <Route path="movies/add" element={<MovieAdd/>} />
            <Route path="movies/update/:id" element={<MovieEdit/>} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
          <Route path="/segitiga" element={<Segitiga />} />
          <Route path="/lingkaran" element={<Lingkaran />} />
          <Route path="/log" element={<LogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
