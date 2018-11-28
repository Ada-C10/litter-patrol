import React, { Component } from "react";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    // TODO Update this to select the correct icon for each item
    // console.log(ItemIcons);
    const icon = ItemIcons[this.props.type];
    // const icon = ItemIcons.rock;

    return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" />
      </div>
    );
  }
}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string
};

export default GameItem;
