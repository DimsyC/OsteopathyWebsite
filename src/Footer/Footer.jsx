import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(props) {
  return (
    <footer
      className="page-footer font-small cyan darken-3"
      style={{ backgroundColor: "#8bcbd7 " }}
    >
      <Container>
        <Row>
          <Col md="12 " className="py-5">
            <div className="footer-copyright text-center py-3" style={{color:'white'}}>
              © Posturoplus 2020 - Tous droits réservés.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
