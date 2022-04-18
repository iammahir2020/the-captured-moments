import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./CheckOut.css";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const CheckOut = () => {
  const [user, loading, error] = useAuthState(auth);
  let email;
  let name;
  if (user) {
    console.log(user?.email);
    console.log(user?.displayName);
    email = user?.email;
    name = user?.displayName;
  }
  const params = useParams();
  const navigate = useNavigate();
  const handleCheckout = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    Swal.fire({
      title: `${name}, booking Complete!`,
      text: "Thank you for the booking.",
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
            value={name}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            readOnly
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
        <button className="checkout-btn" type="submit">
          Checkout
        </button>
      </Form>
    </div>
  );
};

export default CheckOut;
