import { useEffect, useState } from "react";

import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

//c52a4030

const API = "http://www.omdbapi.com/?apikey=c52a4030";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  //   useEffect(() => {
  //     searchMovies(searc);
  //   }, []);

  return (
    <div className="app">
      <h1>MovieJunkie</h1>
      <div className="search">
        <input
          placeholder="Search for a movie name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
