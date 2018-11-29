import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  findType = (type) => {
    switch(type) {
    case "rock":
        return ItemIcons.rock;
    case "bush":
        return ItemIcons.bush;
    case "flower":
        return ItemIcons.flower;
    case "mushroom":
        return ItemIcons.mushroom;
    default:
        return ItemIcons.litter;
    }
  }


  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const icon = this.findType(this.props.type);

    return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default GameItem;
