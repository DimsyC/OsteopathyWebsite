import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function ContactUs() {
  return <h2>Contact Us</h2>;
}

export default App;
