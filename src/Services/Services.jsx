import React, { useState } from "react";
import "./Services.scss";
import { Collapse } from "react-bootstrap";

//Service Images
import osteopathy_img from "./Image/osteopathy.jpg";
import kinesiology_img from "./Image/kinesiology.jpg";
import kinesitherapy_img from "./Image/kinesitherapy.jpg";
import cupping_img from "./Image/cupping.jpg";
import correctionPostural_img from "./Image/correction.jpg";

function Osteopathie() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="col service card-effect"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        backgroundImage: `url(${osteopathy_img})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        color: "white"
      }}
    >
      <div
        className="title"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Ostéopathie
      </div>

      <Collapse in={open}>
        <p>
          L’ostéopathie est une thérapie manuelle qui évalue chaque individu
          dans sa globalité et son environnement en tenant compte de chaque
          système (musculo-squelettique, viscérale, circulatoire et
          cranio-sacrée) pour l’aider à retrouver son homéostasie et le soulager
          de toutes limitations physiques.
        </p>
      </Collapse>
    </div>
  );
}

function Kinesiologie() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="col service card-effect"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        backgroundImage: `url(${kinesiology_img})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        color: "white"
      }}
    >
      <div
        className="title"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Kinésiologie
      </div>

      <Collapse in={open}>
        <p>
          La kinésiologie évalue la condition physique et l’hygiène de vie de
          chaque individu qu’il soit un athlète ou une personne qui aimerais se
          remettre à l’activité physique ; il propose des suivis individualisés
          ou en petit groupe et des programmes d'entraînement personnalisés à
          chacun pour aider à la réadaptation physique, au conditionnement et la
          remise en forme.
        </p>
      </Collapse>
    </div>
  );
}

function Kinesitherapie() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="col service card-effect"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        backgroundImage: `url(${kinesitherapy_img})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        color: "white"
      }}
    >
      <div
        className="title"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Massothérapie Sportif / Kinésithérapie
      </div>

      <Collapse in={open}>
        <p>
          La kinésithérapie et la massothérapie sportive permettent à chaque
          personne d’atteindre leur plein potentiel dans leur activités
          physiques en diminuant les risques de blessures musculo-squelettiques.
          Les effets du traitement; améliore la mobilité articulaire et
          musculaire, relâche les muscles tendus, augmente la récupération et
          amène une détente globale autant au niveau physique que psychique.
        </p>
      </Collapse>
    </div>
  );
}

function Cupping() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="col service card-effect"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        backgroundImage: `url(${cupping_img})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        color: "white"
      }}
    >
      <div
        className="title"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Thérapie par ventouse (Cupping)
      </div>

      <Collapse in={open}>
        <p>
          La thérapie par ventouse est adaptée pour chaque individu qui cherche
          la relaxation et la récupération physique. Ses effets sont, le
          relâchement musculaire, réduit les adhérences tissulaires, évacue de
          l’inflammation et favorise le drainage lymphatique.
        </p>
      </Collapse>
    </div>
  );
}

function CorrectionPostural() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="col service card-effect"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        backgroundImage: `url(${correctionPostural_img})`,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        color: "white"
      }}
    >
      <div
        className="title"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Correction posturale
      </div>

      <Collapse in={open}>
        <p>
          La correction posturale chez PosturoPlus, est un produit conçu par
          l’équipe et le fondateur de PosturoPlus qui combine thérapie manuelle,
          exercice physique et coaching. Notre produit, permet d’évaluer, de
          corriger la posture, d’éduquer et modifier l’environnement dans les
          activités de la vie de tous les jours afin permettre une meilleur
          hygiène de vie chez chaque individu.
        </p>
      </Collapse>
    </div>
  );
}

class Services extends React.Component {
  render() {
    return (
      <div id='Services'>
          <h1 className='services-header'>Nos Services</h1>
        <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
          <Osteopathie />
          <Kinesiologie />
          <Kinesitherapie />
          <Cupping />
          <CorrectionPostural />
        </div>
      </div>
    );
  }
}

export default Services;
