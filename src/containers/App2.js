import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { characters, formatCharacter } from "../config/Characters";
import "./App.css";

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters.map(formatCharacter),
      searchfield: "",
      magicDisplayOnly: false
    };
  }
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  toggleMagicType = () => {
    this.setState({
      magicDisplayOnly: !this.state.magicDisplayOnly
    });
  };

  render() {
    const { magicDisplayOnly, characters, searchfield } = this.state;
    const matchesName = character =>
      character.name.toLowerCase().includes(searchfield.toLowerCase());
    const isMagic = character => character.magic === true;
    const filters = [matchesName];
    if (magicDisplayOnly) filters.push(isMagic);
    const filteredCharacters = characters.filter(char =>
      filters.every(filter => filter(char))
    );
    const getButton = () => (
      <button
        className="default-button shadow-5"
        id="magic-button"
        onClick={this.toggleMagicType}
      >
        Magic
      </button>
    );
    return (
      <Router>
        <div className="tc">
          <h1 className="f1">Choose Your Character</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {getButton()}
          <CardList characters={filteredCharacters} />
        </div>
      </Router>
    );
  }
}

export default App2;
