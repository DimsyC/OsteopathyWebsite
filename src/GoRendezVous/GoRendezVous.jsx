import React, { Component } from "react";

class GoRendezVous extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
    "https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=" + (Math.floor(new Date().getTime()/(1000*60*30))*(1000*60*30)).toString()
    document.body.appendChild(script);
  }

  render() {
    return (
      <div
      data-professionalpagename="Posturoplus" data-bookingwidgeturlparams="companyId=113036" data-language="fr" data-label="Prendre un rendez-vous" data-url="https://www.gorendezvous.com/" class="gorendezvous-button" data-buttoncolor="custom" data-width="300px" data-height="50px"
      >
        <a
          href="https://www.gorendezvous.com/Posturoplus?companyId=113036" target="GOrendezvous"
        >
          Get Started
        </a>
      </div>
    );
  }
}

export default GoRendezVous;
