import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item

    let icon = ItemIcons.litter;
    const type = this.props.type
    if (type == 'litter') {
      icon = ItemIcons.litter;
    } else if (type == 'rock') {
      icon = ItemIcons.rock;
    } else if (type == 'bush') {
      icon = ItemIcons.bush;
    } else if (type == 'flower') {
      icon = ItemIcons.flower;
    } else if (type == 'mushroom') {
      icon = ItemIcons.mushroom;
    };

    //
    // switch (type) {
    //   case 'litter':
    //     icon = ItemIcons.litter;
    //   case 'rock':
    //     icon = ItemIcons.rock;
    //   case 'bush':
    //     icon = ItemIcons.bush;
    //   case 'flower':
    //     icon = ItemIcons.flower;
    //   case 'mushroom':
    //     icon = ItemIcons.mushroom;
      // default:
      //   icon = ItemIcons.litter;
    // }


    //   case 'rock':
    //     const icon = ItemIcons.rock;
    //   case 'bush':
    //     const icon = ItemIcons.bush;
    //   case 'flower':
    //     const icon = ItemIcons.flower;
    //   case 'mushroom':
    //     const icon = ItemIcons.mushroom;
    // }
    //

    // ItemIcons.rock;

    // litter,
    // rock,
    // bush,
    // flower,
    // mushroom


    return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
