import React, { Component } from "react";

class GoRendezVous extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=" +
      (
        Math.floor(new Date().getTime() / (1000 * 60 * 30)) *
        (1000 * 60 * 30)
      ).toString();
    document.body.appendChild(script);
  }

  render() {
    return (
      <div
        data-professionalpagename=""
        data-bookingwidgeturlparams="companyId=116165"
        data-language="fr"
        data-label="Get Started"
        data-url="https://www.gorendezvous.com/"
        class="gorendezvous-button"
        data-buttoncolor="info"
        data-width="280px"
        data-height="50px"
      >
        <a
          href="https://www.gorendezvous.com/homepage/116165?companyId=116165"
          target="GOrendezvous"
        >
          Get Started
        </a>
      </div>
    );
  }
}

export default GoRendezVous;
