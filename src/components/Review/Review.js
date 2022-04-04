import React from "react";

const Review = ({ review }) => {
  const { name, reviewing, rate } = review;
  return (
    <div>
      <h2>{name}</h2>
      <p>{reviewing}</p>
      <p>{rate}</p>
    </div>
  );
};

export default Review;
