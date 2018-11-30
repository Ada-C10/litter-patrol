import React, { Component } from "react";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      divClass: "game-item"
    };
  }

  //GameItem component is the only one that can actually handle the click event for that specific item, so you will need to write code to connect the two components.
  changedToCheck = event => {
    if (!this.state.checked) {
      this.setState({
        checked: true
      });

      if (this.props.type === "litter") {
        this.setState({
          divClass: "game-item spotted-litter",
          points: this.state.points
        });
      } else {
        this.setState({
          divClass: "game-item spotted-nature"
        });
      }
    }
  };

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    const icon = ItemIcons[`${this.props.type}`];
    console.log(icon);

    return (
      <div
        className={this.state.divClass}
        style={itemStyle}
        id={this.props.index}
        onClick={this.changedToCheck}
        points={this.state.points}
      >
        <img src={icon} alt="Item" className="icon-item" />
      </div>
    );
  }
}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired
};

export default GameItem;
