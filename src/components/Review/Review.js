import React from "react";
import './Review.css';

const Review = ({ review }) => {
  const { name, reviewing, rate } = review;
  return (
    <div className="review">
      <h2 className="customer-name">{name}</h2>
      <p>{reviewing}</p>
      <p>{rate}</p>
    </div>
  );
};

export default Review;
