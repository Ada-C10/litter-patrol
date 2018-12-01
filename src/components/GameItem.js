import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      spotted: false,
    };
  }

  spottedItem = (event) => {
    // console.log(`a ${this.props.type} with ID ${this.props.index} was clicked`);
    this.props.markClickedCallback(this.props.index)
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    let icon;
    let isSpotted = "game-item";

    if (this.props.type === 'bush') {
      icon = ItemIcons.bush;
    } else if (this.props.type === 'litter') {
      icon = ItemIcons.litter;
    } else if (this.props.type === 'rock') {
      icon = ItemIcons.rock;
    } else if (this.props.type === 'flower'){
      icon = ItemIcons.flower;
    } else if (this.props.type === 'mushroom'){
      icon = ItemIcons.mushroom;
    };

    if ( this.props.spotted === true && this.props.type === 'litter') {
      isSpotted = "game-item spotted-litter";
    } else if ( this.props.spotted === true && this.props.type !== 'litter') {
      isSpotted = "game-item spotted-nature";
    };

    return (
      <div className={isSpotted} style={itemStyle} >
        <img src={icon} alt="Item" className="icon-item" onClick={this.spottedItem}></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
};

export default GameItem;
