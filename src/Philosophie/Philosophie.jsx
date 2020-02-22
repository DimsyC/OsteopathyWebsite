import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Philosophie.scss'

function Philosophie(props) {
    return (
        <Container id="Philosophie" style={{marginTop:'5%',marginBottom:"5%"}}>
        <Row>
          <Col className="mx-auto" lg="8" md="10">
            <h2
              style={{
                fontSize: "4rem",
                fontWeight: "700",
                color:'#8bcbd7',
              }}
            >Philosophie</h2>
            <p>
              Le fondement premier de PosturoPlus est la croyance profonde
              qu’il est possible d’atteindre et de maintenir une bonne santé
              générale et un état de bien-être par de saines habitudes de vie,
              par l’activité physique régulière, par une nutrition adéquate.
            </p>
            <p>
              PosturoPlus veut offrir support et conseil à tous ceux et celles
              qui s’appliquent à rechercher une vie saine et qui y
              investissent temps et efforts quel que soit leurs conditions.
              PosturoPlus sera votre ressource pour vous aider à récupérer
              votre complète énergie et mobilité quand votre corps réagira à
              vos efforts physiques par la douleur ou les limitations.
              PosturoPlus vous guide toujours et vous soigne quand il le faut.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Philosophie;
  