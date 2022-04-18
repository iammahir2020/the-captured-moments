import {
  faCheckCircle,
  faBookBookmark,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div className="service-card">
      <img src={service.photo} alt="" />
      <h3>{service.name}</h3>
      <h2>${service.price}</h2>
      <hr />
      <p>{service.features}</p>
      {/* {service.features.map((feature) => (
        <div className="feature">
          <p>
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
          </p>
          <p>{feature}</p>
        </div>
      ))} */}

      <br />
      <button
        onClick={() => navigate(`/checkout/${service.name}`)}
        className="service-checkout"
      >
        <span>Book Now</span>{" "}
        <span className="btn-icon">
          <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
        </span>
      </button>
    </div>
  );
};

export default Service;
