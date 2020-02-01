//General Imports
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

//Styling for the Navigation Component
import "./Navbar.scss";
import GoRendezVous from "../GoRendezVous/GoRendezVous";

function NavigationBar() {
  return (
    <Navbar className="NavigationBar" sticky="top" expand="sm">
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
        <Nav className="mr-auto">
          <Nav.Link href="#Services">Services</Nav.Link>
          <Nav.Link href="#Team">Equipes</Nav.Link>
          <Nav.Link href="#Valeurs">Valeurs</Nav.Link>
          <Nav.Link href="#Philosophie">Philosophie</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
