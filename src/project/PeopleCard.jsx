import React, { useState } from "react";

const PeopleCard = ({ person }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card h-100 rounded border-0 text-center"
      style={{
        boxShadow: hovered ? "0 8px 16px rgba(0,0,0,0.2)" : "0 4px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease-in-out",
        transform: hovered ? "scale(1.03)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={person.photo}
        className="card-img-top rounded-top"
        alt={person.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body bg-light">
        <h5 className="card-title mb-1">{person.name}</h5>
      </div>
    </div>
  );
};

export default PeopleCard;
