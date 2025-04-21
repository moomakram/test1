import React, { useEffect, useState } from "react";
import { tvShows } from "./Data";  // ✅ جلب قائمة المسلسلات
import TvShowCard from "./TvShowCard";

function TvShow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 200); // ✅ تأخير بسيط لإضافة تأثير الظهور
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">TV Shows</h2>
      <div className="row">
        {tvShows.map((show) => (
          <div
            key={show.id}
            className={`col-6 col-sm-4 col-md-2 tvshow-card-container ${visible ? "animate__animated animate__fadeInUp" : ""}`}
          >
            <TvShowCard show={show} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TvShow;
