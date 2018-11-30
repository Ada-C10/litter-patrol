import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  clickCallback = (e) => {
    console.log("An item was clicked!");
    console.log(this.props.index);
    this.props.onClickCallback(this.props.index);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    let icon;
    let className = "game-item";

    switch(this.props.type) {
      case 'litter':
        icon = ItemIcons.litter;
        break;
      case 'rock':
        icon = ItemIcons.rock;
        break;
      case 'bush':
        icon = ItemIcons.bush;
        break;
      case 'flower':
        icon = ItemIcons.flower;
        break;
      default:
        icon = ItemIcons.mushroom;
    };

    if (this.props.type === "litter" && this.props.wasSpotted) {
      className = "game-item spotted-litter"
    } else if (this.props.wasSpotted) {
      className = "game-item spotted-nature";
    }

    return (
      <div className={className} style={itemStyle} onClick={this.clickCallback}>
        <img src={icon} alt="Item" className="icon-item" />
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string,
}

export default GameItem;
