import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  return (
    <div className="service-card">
      <h2>{service.name}</h2>
      <h4>${service.price}</h4>
      {service.features.map((feature) => (
        <div className="feature">
          <p>
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
          </p>
          <p>{feature}</p>
        </div>
      ))}

      <br />
      <button>Check Out</button>
    </div>
  );
};

export default Service;
