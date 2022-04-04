import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, reviewing, rate, image } = review;
  return (
    <div className="review">
      <div className="review-heading">
        <img className="user-image" src={image} alt="" />
        <h2 className="customer-name">{name}</h2>
      </div>
      <p>{reviewing}</p>
      <p className="rate">
        Rating: <span className="rating">{rate}</span>
      </p>
    </div>
  );
};

export default Review;
