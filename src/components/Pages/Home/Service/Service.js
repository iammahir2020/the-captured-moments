import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Service.css";

const Service = ({ service }) => {
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
      <button>Check Out</button>
    </div>
  );
};

export default Service;
