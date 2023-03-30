import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogPage = () => {
  const [movies, setMovies] = useState([]);
  // const [movies1, setMovies1] = useVariable();
  const getMovies = async () => {
    try {
      let temp = await axios({
        url: "http://localhost:3000/log",
        method: "GET",
      });
      // https://api.unsplash.com/search/photos?query=canada █

      console.log(temp.data);
      setMovies(temp.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1> Log Page</h1>
      {movies.length !== 0 ? (
            movies.map((movie) => {
              return (
                <div>
                  <h3>{movie.id}.{movie.activity} | {movie.createdAt}</h3>
                </div>
              );
            })
          ) : (
            <h1>sabar bang</h1>
          )}
    </div>
  );
};

export default LogPage;
