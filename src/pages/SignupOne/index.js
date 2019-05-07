import React, { Component } from "react";
import "./components/styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class SignupOne extends Component {
  render() {
    return (
      <Router>
        <div id="signupPage">
          <div id="signupBackground" />
          <div className="transparent" />
          <input className="input" id="input1" placeholder="SEARCH TEAM..." />
          <input
            className="input"
            id="input2"
            placeholder="ATHLETE FIRST NAME"
          />
          <input
            className="input"
            id="input3"
            placeholder="ATHLETE LAST NAME"
          />
          <div id="wrapWrap">
            <div id="wrap1">
              <input className="input" id="input4" placeholder="ORDER SIZE" />
              <input className="input" id="input5" placeholder="QTY" />
            </div>
            {/* <p className="rant">
          What the fuck is wrong with this stupid god damned code, I've written
          everything exactly the way it should be written and this stupid piece
          of shit isn't working at all. I don't need this fucking stress in my
          life. I can get another fucking job. But I've got too much fucking
          debt to change my plan now, and I'm too fucking young to be saying
          shit like this. I'm barely fucking 20. I'm not even old enough to
          drink my fucking problems away, what kind of bull shit is that?
        </p> */}
            <div id="wrap2">
              <input className="input" id="input6" placeholder="EXTRA COPIES" />
              <input className="input" id="input7" placeholder="QTY" />
            </div>
            <button id="mailingInfo">
              <Link className="routerLink" to="/signup-2">
                MAILING INFO
              </Link>
            </button>
          </div>
        </div>
      </Router>
    );
  }
}
