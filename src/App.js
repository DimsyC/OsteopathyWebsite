import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div>
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
        </div>
      </Router>
    </div>
  );
}

function Home() {
  const videoURL = "/Videos/IMG_5474.mp4"

  return <video controls muted loop autoPlay>
  <source src={videoURL} type="video/mp4" />
  <source src={videoURL} type="video/ogg" />
  Your browser does not support the video tag.
</video>;
}

function About() {
  return <h2>About</h2>;
}

function ContactUs() {
  return <h2>Contact Us</h2>;
}

export default App;
