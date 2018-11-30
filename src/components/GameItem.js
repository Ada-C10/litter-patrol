import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

// ### Wave 1 - Item Types
// For this wave you will need to update the `GameItem` component to display the correct icon for each item. Consider what data from the `App` component we have which might be useful for that code. litter, rock, bush, flower, mushroom
//
// Once you have an idea of what data is needed, update the `render` function in `App` to provide the necessary information as a prop to `GameItem`. After that, update the `render` function in `GameItem` to check the additional data and use the correct icon.

class GameItem extends Component {
  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  render() {


    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type]
    
    return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
