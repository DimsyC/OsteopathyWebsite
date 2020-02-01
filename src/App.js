import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./NavBar";
import VideoModal from "./VideoModal";
import GoRendezVous from "./GoRendezVous";
import Services from "./Services";
import CallToAction from "./CallToAction";
import Valeurs from "./Valeurs";
import Team from "./Team";
import Philosophie from "./Philosophie";
import Footer from "./Footer"

class App extends React.Component {
  constructor() {
    super();
    this.state = { showVideo: true };
  }

  componentDidMount() {
    //Local Variable determining if the user has  already visited the site
    let visited = localStorage["alreadyVisited"];
    if (visited) {
      this.setState({ showVideo: false });
    } else {
      //this is the first time
      localStorage["alreadyVisited"] = true;
      this.setState({ showVideo: true });
    }
  }

  hideVideo = () => {
    this.setState({ showVideo: false });
  };

  render() {
    const { showVideo } = this.state;

    return (
      <div id="App">
        <VideoModal show={showVideo} onHide={this.hideVideo} />
        <Navbar />
        <CallToAction />
        <Services />
        <Team />
        <Valeurs />
        <Philosophie/>
        <Footer/>
      </div>
    );
  }
}

export default App;
