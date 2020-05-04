import React from "react";
import { Container, Row, Col, OverlayTrigger,Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneSquareAlt
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

function Footer(props) {
  let currentDate = new Date();

  return (
    <footer id="Footer" style={{ backgroundColor: "#8bcbd7 " }}>
      <Container>
        <Row className="text-center py-5" style={{ color: "white" }}>
          <Col>
            <a href="https://www.facebook.com/posturoplus/">
              <FontAwesomeIcon icon={faFacebookSquare} size="5x" />
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/posturoplus/">
              <FontAwesomeIcon icon={faInstagram} size="5x" />
            </a>
          </Col>
          <Col>
            <a href="mailto:posturoplus@gmail.com">
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip>
                    <strong>posturoplus@gmail.com</strong>.
                  </Tooltip>
                }
              >
                <FontAwesomeIcon icon={faEnvelope} size="5x" />
              </OverlayTrigger>
            </a>
          </Col>
          <Col>
            <a href="tel:+15146778887">
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip>
                    <strong>514-677-8887</strong>.
                  </Tooltip>
                }
              >
                <FontAwesomeIcon icon={faPhoneSquareAlt} size="5x" />
              </OverlayTrigger>
            </a>
          </Col>
        </Row>
        <Row>
          <Col md="12 " className="py-5">
            <div
              className="footer-copyright text-center py-3"
              style={{ color: "white" }}
            >
              {` © Posturoplus ${currentDate.getFullYear()}  - Tous droits réservés.`}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
