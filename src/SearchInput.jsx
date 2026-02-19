import { useEffect, useState } from "react";

export default function SearchInput({ searchTerm, setSearchTerm ,getMovies}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm.trim()) {
      console.log("Search bar is Empty");
      return;
    }
    getMovies()
    //Do mind the this getMovies function is an asynchronous function
    //what i mean is that the function can allow other functions to 
    //run before it would return its promise
    

    
  }

  return (
    <>
      <div className="container mt-4">
        <div className="input-group">
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for a movie..."
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              autoComplete="on"
              value={searchTerm}
            />

            <button
              type="submit"
              // onClick={handleSubmit}
              className="btn btn-primary"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
