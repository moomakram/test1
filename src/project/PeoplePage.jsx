import React from "react";
import { PeopleData } from "./Data";
import PeopleCard from "./PeopleCard";

const PeoplePage = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">People Page</h2>
      <div className="row g-4">
        {PeopleData.map((person) => (
          <div key={person.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <PeopleCard person={person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;
