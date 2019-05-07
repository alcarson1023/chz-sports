import React, { Component } from "react";
import "./components/styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <Router>
        <div id="signupPage">
          <div id="signupBackground" />
          <div className="transparent" />
          <input
            className="input"
            id="loginInput1"
            placeholder="EMAIL ADDRESS"
          />
          <input className="input" id="loginInput2" placeholder="PASSWORD" />
        </div>
        <button id="signInButton">
          <Link className="routerLink" to="/">
            SIGN IN
          </Link>
        </button>
      </Router>
    );
  }
}
