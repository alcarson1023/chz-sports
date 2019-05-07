import React, { Component } from "react";
import "./components/styles.css";

export default class About extends Component {
  render() {
    return (
      <div id="aboutPage">
        <div id="aboutBackground" />
        <div className="transparent" />
        <div id="aboutFirstParagraph">
          Introducing CollageHeadz Sports... an interactive way to showcase your
          true FANdemonium with take home memorabilia. Our services include:
          <br />
          <br />• PROFESSIONAL PHOTOS
          <br />
          <br />• ACTION SHOTS
          <br />
          <br />• GAME DAY POSTERS
          <br />
          <br />• TEAM PHOTOS & BANNERS
        </div>
      </div>
    );
  }
}
