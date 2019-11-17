//General Imports
import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";

//Styling for the Navigation Component
import "./Navbar.scss";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {'Posturo+'}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Page1</Nav.Link>
          <Nav.Link href="#link">Page2</Nav.Link>
          <Nav.Link href="#link">Page3</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
