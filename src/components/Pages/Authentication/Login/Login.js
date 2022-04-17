import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div className="container form-container">
      <h2 className="text-center">Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className="form-btn" type="submit">
          Login
        </button>
        <p className="form-toggle">
          New here? <Link to="/register">Please Register</Link>
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

export default Login;
