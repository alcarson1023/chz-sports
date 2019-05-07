import React, { Component } from "react";
import "./components/styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class SignupTwo extends Component {
  render() {
    return (
      <Router>
        <div id="signupPage">
          <div id="signupBackground" />
          <div className="transparent" />
          <input
            className="input"
            id="secondInput1"
            placeholder="PARENT PHONE"
          />
          <input
            className="input"
            id="secondInput2"
            placeholder="PARENT EMAIL"
          />
          <input
            className="input"
            id="secondInput3"
            placeholder="MAILING ADDRESS"
          />
          <div id="wrapWrap">
            <div id="wrap1">
              <input className="input" id="secondInput4" placeholder="CITY" />
            </div>
            <div id="wrap2">
              <input className="input" id="secondInput6" placeholder="STATE" />
              <input className="input" id="secondInput7" placeholder="ZIP" />
            </div>
            <button id="mailingInfo">
              <Link className="routerLink" to="/signup-2">
                PAYMENT INFO
              </Link>
            </button>
          </div>
        </div>
      </Router>
    );
  }
}
