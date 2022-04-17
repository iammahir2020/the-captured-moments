import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <h2>${service.price}</h2>
      <hr />
      {service.features.map((feature) => (
        <div className="feature">
          <p>
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
          </p>
          <p>{feature}</p>
        </div>
      ))}

      <br />
      <button
        onClick={() => navigate("/checkout")}
        className="service-checkout"
      >
        Check Out
      </button>
    </div>
  );
};

export default Service;
