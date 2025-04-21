import React, { useEffect, useState } from "react";
import { movies } from "./Data";  // ✅ جلب الأفلام فقط
import MovieCard from "./MovieCard";

function Movies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 200); // تأخير بسيط لإظهار التأثير
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`col-6 col-sm-4 col-md-2 ${visible ? "animate__animated animate__fadeInUp" : ""}`}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;