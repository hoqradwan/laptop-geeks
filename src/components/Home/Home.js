import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <>
      <div className="home-container">
        <div className="heading-container">
          <h1>Power To Go</h1>
          <h1 className="blue-text">A new sensation for professionals</h1>
          <p>
            The Apple M1 chip gives the 13‑inch MacBook Pro speed and power
            beyond belief. With up to 2.8x CPU performance. Up to 5x the
            graphics speed. An advanced Neural Engine for up to 11x faster
            machine learning. And up to 20 hours of battery life so you can go
            all day. It’s our most popular pro notebook, taken to a whole new
            level.{" "}
          </p>
        </div>
        <div>
          <h1>Image</h1>
          <img src="../../Images/laptop-12.png" alt="" />
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
    </>
  );
};

export default Home;
