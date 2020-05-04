import React from "react";
import {Col,Row} from "react-bootstrap"

function Member(props) {
  return (
    <div className="card">
      <Row>
        <Col xs="12" sm="3" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={props.image} alt="Profile" />
        </Col>
        <Col>
          <h1>{props.name}</h1>
          <p>{props.text}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Member;
