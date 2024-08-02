import React from "react";

const LoadingCard = ({ showMessage }) => {
  return (
    <div>
      <h1 class="loader"></h1>
      {showMessage && <p class="zoom-text">Please activate location</p>}
    </div>
  );
};

export default LoadingCard;
