import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logoLight from "../../../images/logoLight.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      sticky="top"
      className="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logoLight} className="logo" alt="logoLight" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/checkout">
              Check Out
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Me
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <button className="nav-btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="nav-btn" onClick={() => navigate("/register")}>
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
