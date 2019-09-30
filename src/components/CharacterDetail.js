import React, { Component } from "react";
import { Link } from "react-router-dom";
import Statbox from "./Statbox";

export default class CharacterDetail extends Component {
  componentDidMount() {
    const { selectedCharacter: character, url, setCharacter } = this.props;
    if (!character) {
      setCharacter(url);
    }
  }

  render() {
    const { selectedCharacter: character } = this.props;
    if (!character)
      return (
        <div>
          <h2>You fucked something up!</h2>
        </div>
      );
    const { name, id, stats } = character;
    return (
      <section className="character-detail tc">
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <h2 className="character-name">{name}</h2>
          <div className="flex-container">
            <div className="col-1-2">
              <img src={`https://robohash.org/${id}?200x200`} alt={name}></img>
            </div>
            <div className="col-1-2">
              <Statbox stats={stats} />
            </div>
          </div>
          <div className="spacing">
            <Link to="/" className="default-button start-game">
              Pick me!
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
