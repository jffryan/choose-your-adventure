import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "../pages/Home";
import CharacterSelect from "../pages/CharacterSelect";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/character-select" render={() => <CharacterSelect />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
