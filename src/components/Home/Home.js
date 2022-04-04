import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="heading-container">
          <p className="power-text">Power To Go</p>
          <p className="blue-text">A new sensation for professionals</p>
          <p>
            The Apple M1 chip gives the 13‑inch MacBook Pro speed and power
            beyond belief. With up to 2.8x CPU performance. Up to 5x the
            graphics speed. An advanced Neural Engine for up to 11x faster
            machine learning. And up to 20 hours of battery life so you can go
            all day. Its our most popular pro notebook, taken to a whole new
            level.
          </p>
        </div>
        <div className="image-container">
          <img src={require("../../Assets/Images/mackbookpro.jpg")} />
        </div>
      </div>

      <div>
        <h1 className="review-header">Customer Reviews</h1>
        <div className="reviews-container">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
      <div className="button-div">
        <button onClick={() => navigate("/reviews")} className="reviews-button">
          See All Reviews
        </button>
      </div>
    </>
  );
};

export default Home;
