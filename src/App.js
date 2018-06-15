import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SuperHeroesContainer from "./containers/SuperHeroesContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SuperHeroesContainer />
      </div>
    );
  }
}

export default App;
