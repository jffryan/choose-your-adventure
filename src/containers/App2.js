import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import TypeFilter from "../components/TypeFilter";
import { characters } from "../components/Characters";
import "./App.css";

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters,
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
    const filteredCharacters = this.state.characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    const displayMagicCharacters = this.state.characters.filter(character => {
      return character.magic === true;
    });
    return (
      <div className="tc">
        <h1 className="f1">Choose Your Character</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <TypeFilter onClick={this.toggleMagicType} /> */}
        <button onClick={this.toggleMagicType}>Magic</button>
        {!this.state.magicDisplayOnly && (
          <CardList characters={filteredCharacters} />
        )}
      </div>
    );
  }
}

export default App2;
