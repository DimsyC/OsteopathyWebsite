import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Valeurs.scss";
import { Card, CardDeck } from "react-bootstrap";

function Valeurs(props) {
  return (
    <div id="Valeurs" style={{ backgroundColor: "#8bcbd7" }}>
      <div style={{paddingLeft:'3rem',paddingRight:'3rem'}}>

      <h2 className="valeur text-center">
        Les professionnels de PosturoPlus partagent les mêmes valeurs qui les
        guident tant dans l’accueil des clients que dans les soins qu’ils
        prodiguent. Ils veulent aider le plus grand nombre à atteindre et
        maintenir santé et bien-être.
      </h2>
      </div>
      <h1 style={{ color: "white",textAlign:'center',marginBottom:'15px',paddingTop:'3rem',paddingBottom:'3rem' }}>
        Chez Posturo Plus, la cliente ou le client est:
      </h1>
      <CardDeck style={{marginBottom:'2.5rem'}}>
        <Card>
          <Card.Body>
            <Card.Text>
            Accueilli(e) avec empathie et respect.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
            Est assuré(e) qu’on portera une grande attention à sa condition
          personnelle et à ses besoins et objectifs spécifiques.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
            Est assuré(e) qu’on vérifiera tout au cours du processus d’aide ou de
          soin son état, son confort, ses réactions.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Text>
            Bénéficie toujours des soins appropriés inspirés des plus récentes
          données scientifiques relatives à la thérapie manuelle, à l’activité
          physique, aux soins en santé générale et aux soins aux athlètes et en
          nutrition.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
            Reçoit les conseils utiles pour garder et préserver une bonne
          posture ; la posture est la clé de la santé.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      {/* <Col className="valeurs">
        <Row className="avantage">Accueilli(e) avec empathie et respect.</Row>
        <Row className="avantage">
          Est assuré(e) qu’on portera une grande attention à sa condition
          personnelle et à ses besoins et objectifs spécifiques.
        </Row>
        <Row className="avantage">
          Est assuré(e) qu’on vérifiera tout au cours du processus d’aide ou de
          soin son état, son confort, ses réactions.
        </Row>
        <Row className="avantage">
          Bénéficie toujours des soins appropriés inspirés des plus récentes
          données scientifiques relatives à la thérapie manuelle, à l’activité
          physique, aux soins en santé générale et aux soins aux athlètes et en
          nutrition.
        </Row>
        <Row className="avantage">
          Reçoit les conseils utiles pour garder et préserver une bonne
          posture ; la posture est la clé de la santé.
        </Row>
      </Col>
      <p className="valeur">
        Les professionnels de PosturoPlus partagent les mêmes valeurs qui les
        guident tant dans l’accueil des clients que dans les soins qu’ils
        prodiguent. Ils veulent aider le plus grand nombre à atteindre et
        maintenir santé et bien-être.
      </p> */}
    </div>
  );
}

export default Valeurs;
