import React from "react";

const Card = (prop) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{prop.data.name}</h5>
        <p class="card-subtitle mb-2 text-muted">
          <i>{prop.data.year}</i>
        </p>
        <p class="card-text">
          <i>{prop.data.comment}</i>
        </p>
      </div>
    </div>
  );
};

export default Card;
