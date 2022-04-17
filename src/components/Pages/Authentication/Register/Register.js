import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import auth from "../../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirm, setConfirm] = useState({ value: "", error: "" });
  const [agree, setAgree] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

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
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(event.target.value)) {
      setPassword({ value: event.target.value, error: "" });
    } else {
      setPassword({
        value: "",
        error:
          "Password must contain minimum 8 characters, at least 1 letter and 1 number.",
      });
    }
  };

  const handleConfirmBlur = (event) => {
    setConfirm({ value: event.target.value, error: "" });
  };

  useEffect(() => {
    if (error || verificationError || updateError) {
      setErrorMessage(
        error?.message || verificationError?.message || updateError?.message
      );
    } else {
      setErrorMessage("");
    }
  }, [error, verificationError, updateError]);

  // if (user) {
  //   navigate("/");
  // }

  const handleUserRegistration = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (password.value !== confirm.value) {
      console.log("email:" + password.value);
      console.log("confirm:" + confirm.value);
      setConfirm({ value: "", error: "Password do not match." });
      return;
    }
    console.log(name, email.value, password.value, confirm.value);
    await createUserWithEmailAndPassword(email.value, password.value);
    await updateProfile({ displayName: name });
    await sendEmailVerification(email);
  };
  if (user) {
    navigate("/");
  }
  return (
    <div className="container form-container">
      <h2 className="text-center">Please Register</h2>
      <Form onSubmit={handleUserRegistration}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            name="email"
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
            name="password"
            placeholder="Password"
            required
          />
          <small className="text-danger">{password.error}</small>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="fw-bold">Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfirmBlur}
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
          />
          <small className="text-danger">{confirm.error}</small>
        </Form.Group>

        <Form.Group className="mb-3 d-flex gap-2" controlId="formBasicCheckbox">
          <Form.Check onClick={() => setAgree(!agree)} type="checkbox" />{" "}
          <span className="agreement">
            Agree to the <a href="terms">terms</a> and{" "}
            <a href="conditions">conditions</a>.
          </span>
        </Form.Group>
        <button className="form-btn" type="submit" disabled={!agree}>
          Register
        </button>
        <p className="text-danger mt-2">{errorMessage}</p>
        <p className="form-toggle">
          Already Have an account? <Link to="/login">Please Login</Link>
        </p>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
