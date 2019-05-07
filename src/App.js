import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import Home from "./pages/Home/index.js";
import MissingPage from "./pages/MissingPage/index";
import About from "./pages/About/index";
import SignupOne from "./pages/SignupOne/index";
import SignupTwo from "./pages/SignupTwo/index";
import Login from "./pages/Login/index";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/signup-1" component={SignupOne} />
            <Route path="/signup-2" component={SignupTwo} />
            <Route path="/login" component={Login} />
            <Route component={MissingPage} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
