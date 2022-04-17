import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Spinner from "../../../Shared/Spinner/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const handleEmailBlur = (event) => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
    ) {
      setEmail({ value: event.target.value, error: "" });
    } else {
      setEmail({
        value: "",
        error: "Invalid Email. Please Enter a valid email.",
      });
    }
  };

  const handlePasswordBlur = (event) => {
    setPassword({ value: event.target.value, error: "" });
  };

  if (user) {
    navigate("/");
  }

  useEffect(() => {
    if (error || resetError) {
      setErrorMessage(error?.message || resetError?.message);
    }
  }, [error, resetError]);

  const handleUserLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email.value, password.value);
  };

  const handlePasswordReset = async () => {
    if (!email.value) {
      toast("Please Enter Email address.");
      return;
    }
    await sendPasswordResetEmail(email.value);
    toast("Password Reset Email Sent!");
  };

  // if (loading || sending) {
  //   return <Spinner></Spinner>;
  // }
  return (
    <div className="container form-container">
      <h2 className="text-center">Please Login</h2>
      <Form onSubmit={handleUserLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
          <small className="text-danger">{email.error}</small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <button className="form-btn" type="submit">
          Login
        </button>
        <p className="text-danger mt-2">{errorMessage}</p>
        <p className="form-toggle">
          Forgot Password?{" "}
          <button className="reset-btn" onClick={handlePasswordReset}>
            Reset Password
          </button>
        </p>
        <p className="form-toggle">
          New here? <Link to="/register">Please Register</Link>
        </p>
      </Form>

      <SocialLogin></SocialLogin>

      <ToastContainer />
    </div>
  );
};

export default Login;
