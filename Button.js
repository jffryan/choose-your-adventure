import React, { Component } from "react";
import "./Button.css";

class FilterMagic extends Component {
  filterMagicType() {
    console.log("Alert!");
  }
  render() {
    return (
      <button
        className="default br3 ma2 grow shadow-5"
        onClick={this.filterMagicType}
      >
        Magic
      </button>
    );
  }
}

export default FilterMagic;
