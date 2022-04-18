import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-img">
        <img src={review.photo} alt="" />
      </div>
      <div className="review-info">
        <h4>{review.name}</h4>
        <p>"{review.comment}"</p>
      </div>
    </div>
  );
};

export default Review;
