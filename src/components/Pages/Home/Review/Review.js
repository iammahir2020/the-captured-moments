import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review-card">
      <img src={review.photo} alt="" />
      <h4>{review.name}</h4>
      <hr />
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
