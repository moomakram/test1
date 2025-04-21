import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TvShowCard({ show }) {
  console.log("Received show data:", show); // ✅ تحقق من البيانات في الكونسول

  if (!show) {
    return <p className="text-danger">No Data Available</p>; // ✅ منع ظهور كود فارغ
  }

  return (
    <div className="tvshow-card text-center position-relative" style={{ width: "200px" }}>
      <div className="image-container position-relative overflow-hidden">
        <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 p-2">
          {show.rating} ⭐
        </span>
        <img src={show.image} alt={show.title} className="tvshow-image img-fluid w-100" />
        <div className="overlay d-flex align-items-center justify-content-center">
          <p className="tvshow-description">{show.description}</p>
        </div>
      </div>
      <h5 className="fw-bold mt-2">{show.title}</h5>
    </div>
  );
}

export default TvShowCard;
