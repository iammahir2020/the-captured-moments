import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <h2>Sorry! The page you're looking for can not be found.</h2>
      <button onClick={() => navigate("/")} className="gallery-btn">
        Go back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
