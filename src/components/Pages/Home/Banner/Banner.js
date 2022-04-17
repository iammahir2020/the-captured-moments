import React from "react";
import "./Banner.css";
import logoDark from "../../../../images/logoDark.png";
import nameLogo from "../../../../images/mahir1.png";

const Banner = () => {
  return (
    <div className="banner">
      <h6>Welcome to</h6>
      <img className="brand-logo" src={logoDark} alt="" />
      <h6>By</h6>
      <img className="name-logo" src={nameLogo} alt="" />
      <br />
      <br />
      <button className="gallery-btn">View Gallery</button>
    </div>
  );
};

export default Banner;
