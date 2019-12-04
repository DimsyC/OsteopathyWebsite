import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//Components
import {Image} from "react-bootstrap"
import Navbar from "./NavBar";
import VideoModal from "./VideoModal";

class App extends React.Component {
  constructor() {
    super();
    this.state = { showVideo: false };
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
    this.setState({ showVideo: false })
  }

  render() {
    const { showVideo } = this.state;

    return (
      <div id="App">
        <VideoModal show = {showVideo} onHide={this.hideVideo}/>
        <Navbar />
        <Router>
          <>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function ContactUs() {
  return <h2>Contact Us</h2>;
}

export default App;
