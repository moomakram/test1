
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card text-center position-relative" style={{ width: "200px" }}>
      <div className="image-container position-relative overflow-hidden">
        <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 p-2">
          {movie.rating} ⭐
        </span>
        <img src={movie.image} alt={movie.title} className="movie-image img-fluid w-100" />
        <div className="overlay d-flex align-items-center justify-content-center">
          <p className="movie-description">{movie.description}</p>
        </div>
      </div>
      <h5 className="fw-bold mt-2">{movie.title}</h5>
    </div>
  );
}

export default MovieCard;
