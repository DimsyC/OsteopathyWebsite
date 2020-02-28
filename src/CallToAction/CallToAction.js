import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import GoRendezVous from "../GoRendezVous";
import background from "./Image/peaceBackground.jpg";
import "./CallToAction.scss"

function CallToAction(props) {
  return (
    <div
      style={{
        minHeight: "560px",
        height:'100vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        padding: "10.5% 20%"
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(40, 154, 198, 0.35)",
          paddingBottom: "2.5px"
        }}
      >
        <h1
          style={{
            fontSize: "4.5rem",
            textTransform: "uppercase"
          }}
        >
          Santé & Bien-Être
        </h1>
        <p>On vous Supporte. On vous Conseille. On vous Soigne.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop:'15%'}}>
        <GoRendezVous/>
      </div>
    </div>
  );
}

export default CallToAction;
