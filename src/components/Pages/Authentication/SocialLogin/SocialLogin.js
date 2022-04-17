import React from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialLogin = () => {
  return (
    <div>
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

export default SocialLogin;
