import { useState } from "react";

function MovieRendered({ movieList }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  console.log(movieList);

  return (
    <>
      {/* Grid Container */}
      <div className="row g-4 justify-content-center">
        {movieList.map(({ imdbID, Year, Title, Type, Poster }, index) => {
          return (
            <div
              key={imdbID}
              className="col-12 col-sm-6 col-md-4 col-lg-3 fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className="card h-100 shadow-sm movie-card"
                onClick={() =>
                  setSelectedMovie({
                    imdbID,
                    Year,
                    Title,
                    Type,
                    Poster,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <img
                  src={
                    Poster !== "N/A"
                      ? Poster
                      : "https://via.placeholder.com/300x450"
                  }
                  className="card-img-top"
                  alt={Title}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{Title}</h5>

                  <p className="card-text text-muted">{Year}</p>

                  <button className="btn btn-primary mt-auto w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedMovie && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-light">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedMovie.Title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedMovie(null)}
                ></button>
              </div>

              <div className="modal-body d-flex gap-4 flex-wrap">
                <img
                  src={selectedMovie.Poster}
                  alt={selectedMovie.Title}
                  style={{ width: "250px" }}
                />

                <div>
                  <p>
                    <strong>Year:</strong> {selectedMovie.Year}
                  </p>
                  <p>
                    <strong>Type:</strong> {selectedMovie.Type}
                  </p>
                  <p>
                    <strong>IMDb ID:</strong> {selectedMovie.imdbID}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieRendered;
