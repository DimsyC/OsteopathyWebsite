import React from "react";
import GoRendezVous from "../GoRendezVous";
import background from "./Image/peaceBackground.jpg";
import "./CallToAction.scss"

function CallToAction(props) {
  return (
    <div className='callToAction'
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
      <div className="sportEtBienEtre">
        <h1
          style={{
            fontSize: "4.5rem",
            textTransform: "uppercase"
          }}
        >
          {"Sport & Bien-Être"}
        </h1>
        <p>{"On vous Supporte. On vous Conseille."}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop:'15%'}}>
        <GoRendezVous/>
      </div>
    </div>
  );
}

export default CallToAction;
