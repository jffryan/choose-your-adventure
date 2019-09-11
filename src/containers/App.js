import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import TypeFilter from "../components/TypeFilter";
import { characters } from "../components/Characters";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredCharacters = this.state.characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Choose Your Character</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <TypeFilter />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
