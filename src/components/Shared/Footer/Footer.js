import React from "react";
import { Nav } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import logoLight from "../../../images/logoLight.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer-container">
      <div className="social-container">
        <Nav.Link href="https://www.instagram.com/" target="blank">
          <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
        </Nav.Link>
        <Nav.Link href="https://www.facebook.com/" target="blank">
          <FontAwesomeIcon className="footer-icon" icon={faFacebookSquare} />
        </Nav.Link>
        <Nav.Link href="https://www.pinterest.com/" target="blank">
          <FontAwesomeIcon className="footer-icon" icon={faPinterest} />
        </Nav.Link>
      </div>
      <div className="links-container">
        <div className="container display">
          <img src={logoLight} alt="" />
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/about">About Me</NavLink>
          </div>
        </div>
      </div>
      <div className="copy-right-conatiner">
        <p>All Rights Reserved &copy; {year} the.captured_moments</p>
      </div>
    </div>
  );
};

export default Footer;
