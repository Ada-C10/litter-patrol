import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

// ### Wave 2 - Spotting Items
// For this wave you will begin to implement the game logic by allowing the player to spot items as they scroll by. Players can "spot" an item by clicking on it, and the game gives immediate feedback on whether the item was litter.
//
// * When a player clicks on a game item that has not yet been clicked upon, the item displays either:
//     * a green check, if the item has type 'litter'
//     * a red X, otherwise
// * When a player clicks on a game item that has already been clicked upon, nothing changes with the item's display
//
// Each `GameItem` component should track whether it has been spotted using an event handler. You will need to update the `render` function as well to use the appropriate CSS classes to indicate whether the spotted item was litter or not.

class GameItem extends Component {

  constructor(props) {
    super(props);
    this.state = props.state; //change prop state
    this.clicked = false;
}

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onMarkLitterClick = () => {
    console.log(this);
    //change state here
    this.clicked = true;
    if (this.props.type === "litter") {
      this.props.spotLitterCallback(this.props.type);
    }
  }

  setItemClass = () => {
    if (this.clicked == true) {
      return this.props.type === "litter" ? "game-item spotted-litter" : "game-item spotted-nature"
    } else if (this.clicked == false) {
      return "game-item";
    }
  }

  render() {

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type]
    const itemType = this.props.type
    const itemTypeClass = this.setItemClass();


    return (
      <div className={itemTypeClass} style={itemStyle} onClick={this.onMarkLitterClick}>
        <img src={icon} alt={itemType} ></img>
      </div>
    );
  }
}

export default GameItem;
