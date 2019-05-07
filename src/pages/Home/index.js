import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./components/styles.css";

// import Home from "./pages/Home/index.js";

class Home extends Component {
  render() {
    return (
      <Router>
        <div id="homePage">
          <div id="homeBackground" />
          <div className="transparent" />
          <div id="homeContent">
            <input id="homeSearch" placeholder="SEARCH TEAM..." />
            <div className="button" id="homeSignup">
              <Link className="routerLink" to="/signup-1">
                SIGN UP
              </Link>
            </div>
            <div className="button" id="homeOrder">
              ORDER NOW
            </div>
          </div>
          <div id="homeFooter">
            <div id="footerTop">
              <div id="link">
                <Link className="routerLink" to="/">
                  HOME
                </Link>
              </div>
              <div id="link">
                <Link className="routerLink" to="/about">
                  ABOUT
                </Link>
              </div>
              <div id="link">TOUR DATES</div>
              <div id="link">
                <Link className="routerLink" to="/login">
                  SIGN IN
                </Link>
              </div>
            </div>
            <div id="footerBottom">
              <p>
                ©2019 CHZSports.com | 10333 Harwin Drive Suite 550 Houston, TX
                77030
              </p>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;
