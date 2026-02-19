import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DayToday from "./GetDay";
import SearchInput from "./SearchInput";
import MovieRendered from "./MovieRendered";
import Login from "./Login";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMovieData() {

    setLoading(true);

    let response1 = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=af494d5c`,
    );
    try {
      if (!response1.ok) {
        console.log(" HTTPS ERROR", response1.status);
        return;
      }

      let data = await response1.json();
      setLoading(true);
      setMovieList(data.Search);
      console.log(data.Search);
      // setMovieList(data.totalResults)
    } catch (error) {
      console.log("Network Error", error);
    }
    console.log(movieList);
    setLoading(false);
  }

  function renderMovieContainer() {
  
    if (loading && searchTerm) {
      return <div className="loader"></div>;
    } else if (!loading && searchTerm)
      return (
        <MovieRendered movieList={movieList} setMovieList={setMovieList} />
      );
  }

  return (
    <div className="allApp">
      {/* <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        getMovies={getMovieData}
      /> */}

       {/* <Login/>  */}

      <div className="movie-container">
        <div className="movie-inner container">{renderMovieContainer()}</div>
      </div>
    </div>
  );
}

export default App;
