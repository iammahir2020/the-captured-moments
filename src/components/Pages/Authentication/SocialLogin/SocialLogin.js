import React, { useEffect, useState } from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  useEffect(() => {
    if (googleError || githubError || facebookError) {
      setMessage(
        googleError?.message || githubError?.message || facebookError?.message
      );
    } else {
      setMessage("");
    }
  }, [googleError, githubError, facebookError]);

  if (googleUser || githubUser || facebookUser) {
    // console.log(googleUser || githubUser);
    navigate("/");
  }
  // if (googleLoading || githubLoading) {
  //   return <Spinner></Spinner>;
  // }
  return (
    <div>
      <div className="or-line">
        <div className="line"></div>
        <p className="or">OR</p>
        <div className="line"></div>
      </div>
      <div className="social-login">
        <p className="text-danger">{message}</p>

        <button onClick={() => signInWithGoogle()} className="btn-google">
          <FontAwesomeIcon className="footer-icon" icon={faGoogle} />
          Continue with Google
        </button>
        <button onClick={() => signInWithGithub()} className="btn-github">
          <FontAwesomeIcon className="footer-icon" icon={faGithub} />
          Continue with Github
        </button>
        <button onClick={() => signInWithFacebook()} className="btn-facebook">
          <FontAwesomeIcon className="footer-icon" icon={faFacebookSquare} />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
