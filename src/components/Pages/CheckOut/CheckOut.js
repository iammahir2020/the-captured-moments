import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./CheckOut.css";
import Swal from "sweetalert2";

const CheckOut = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleCheckout = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    Swal.fire({
      title: "Booking Complete!",
      text: `${name}, thank you for the bookig.`,
      icon: "success",
      confirmButtonText: "Done",
    });
    navigate("/");
  };
  return (
    <div className="container checkout-container">
      <h2 className="text-center">Provide Information</h2>
      <Form onSubmit={handleCheckout}>
        <p>
          Service Chosen: <strong>{params.serviceName}</strong>{" "}
        </p>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-bold">Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label className="fw-bold">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter adress"
            name="address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label className="fw-bold">Contact Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="+880 XXXXXXXX"
            name="number"
            required
          />
        </Form.Group>
        <button className="form-btn" type="submit">
          Checkout
        </button>
      </Form>
    </div>
  );
};

export default CheckOut;
