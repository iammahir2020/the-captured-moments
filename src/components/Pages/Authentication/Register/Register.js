import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  return (
    <div className="container form-container">
      <h2 className="text-center">Please Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="fw-bold">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex gap-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" />{" "}
          <span className="agreement">
            Agree to the <a href="terms">terms</a> and{" "}
            <a href="conditions">conditions</a>.
          </span>
        </Form.Group>
        <button className="form-btn" type="submit">
          Register
        </button>
        <p className="form-toggle">
          Already Have an account? <Link to="/login">Please Login</Link>
        </p>
      </Form>

      <div className="or-line">
        <div className="line"></div>
        <p className="or">OR</p>
        <div className="line"></div>
      </div>
      <div className="social-login">
        <button className="btn-google">
          <FontAwesomeIcon className="footer-icon" icon={faGoogle} />
          Continue with Google
        </button>
        <button className="btn-github">
          <FontAwesomeIcon className="footer-icon" icon={faGithub} />
          Continue with Github
        </button>
        <button className="btn-facebook">
          <FontAwesomeIcon className="footer-icon" icon={faFacebookSquare} />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
