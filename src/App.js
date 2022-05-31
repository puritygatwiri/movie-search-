import React, { useEffect, useState } from "react";
import './App.css';
import Movie from "./Movie";
import Filter from "./Filter";

const App = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=63dd81db10191de8fdca3dc427231448&language=en-US&page=1";
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

useEffect(() => {
    fetchPopular();
  },[]);
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <h1>Movies</h1>
      <h2>Here are some of our few samples of movies, enjoy!!</h2>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default App;
