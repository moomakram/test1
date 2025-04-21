import { useEffect, useState } from "react";
import { movies, tvShows } from "./Data";
import MovieCard from "./MovieCard";
import TvShowCard from "./TvShowCard";
import { useLocation } from "react-router-dom";

// دالة لخلط العناصر عشوائيًا مرة واحدة فقط عند تحميل الصفحة
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

function Home() {
  const location = useLocation();

  // ✅ حفظ البيانات في state حتى لا يتم إعادة ترتيبها عند كل Render
  const [uniqueMovies, setUniqueMovies] = useState([]);
  const [uniqueTvShows, setUniqueTvShows] = useState([]);

  // ✅ تحميل البيانات مرة واحدة فقط عند فتح الصفحة
  useEffect(() => {
    setUniqueMovies(shuffleArray([...new Map(movies.map((movie) => [movie.id, movie])).values()]));
    setUniqueTvShows(shuffleArray([...new Map(tvShows.map((show) => [show.id, show])).values()]));
  }, []); // [] تعني أن `useEffect` سيتم تشغيله مرة واحدة فقط عند تحميل الصفحة

  // ✅ دالة لإنشاء قسم (أفلام / مسلسلات)
  const renderSection = (title, data, Component, hideCondition) => {
    if (location.pathname === hideCondition) return null;

    return (
      <div className="mt-5">
        <div className="row">
          {/* ✅ عمود العنوان والكروت معًا في نفس الصف */}
          <div className="col-12 col-md-4">
            <h2 className="fw-bold mb-3">Trending</h2>
            <h2 className="fw-bold mb-3">{title}</h2>
            <h2 className="fw-bold mb-3">To Watch Now</h2>
            <p className="text-muted mt-2">Most watched {title} by Days</p>
            <hr />
          </div>

          {/* ✅ أول 4 كروت بجانب العناوين */}
          <div className="col-12 col-md-8">
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-3">
              {data.slice(0, 4).map((item) => (
                <div key={item.id} className="col">
                  <Component {...{ [title === "Movies" ? "movie" : "show"]: item }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ باقي الكروت في شبكة من 6 أعمدة لكل صف */}
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 mt-4">
          {data.slice(4).map((item) => (
            <div key={item.id} className="col">
              <Component {...{ [title === "Movies" ? "movie" : "show"]: item }} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      {renderSection("Movies", uniqueMovies, MovieCard, "/movies")}
      {renderSection("TV Shows", uniqueTvShows, TvShowCard, "/tvshows")}
    </div>
  );
}

export default Home;
