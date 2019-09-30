import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import CharacterDetail from "../components/CharacterDetail";
import { characters, formatCharacter } from "../config/Characters";
import "../containers/App.css";

class CharacterSelect extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters.map(formatCharacter),
      searchfield: "",
      magicDisplayOnly: false,
      selectedCharacter: null
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

  setSelectedCharacter = url => {
    const selectedCharacter = this.state.characters.filter(
      el => el.url === url
    )[0];
    this.setState({ selectedCharacter });
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
      <div className="tc">
        <h1 className="f1">
          <Link className="no-decoration" to="/character-select">
            Choose Your Character
          </Link>
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        {getButton()}
        <Switch>
          <Route
            exact
            path="/character-select"
            render={() => (
              <CardList
                characters={filteredCharacters}
                onCardClick={character => this.setSelectedCharacter(character)}
              />
            )}
          />
          <Route
            path="/character-select/:url"
            render={routeProps => (
              <CharacterDetail
                selectedCharacter={this.state.selectedCharacter}
                url={routeProps.match.params.url}
                setCharacter={id => this.setSelectedCharacter(id)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default CharacterSelect;
