//General Imports
import React from "react";
import {Navbar,Nav} from "react-bootstrap";

//Styling for the Navigation Component
import "./Navbar.scss";

function NavigationBar() {
  return (
    <Navbar className='NavigationBar' expand="md">
      <Navbar.Brand href="#home">
      <img
        alt=""
        src="/Images/logo_posturoplus_sports_bien_etre.svg"
        width="200"
        height="50"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact-us">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
