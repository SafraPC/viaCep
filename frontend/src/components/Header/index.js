import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="headerStyles">
      <Navbar.Brand className="headerTitle ">
        <Link to="/">
          <label>VIACEP</label>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
}

export default Header;
