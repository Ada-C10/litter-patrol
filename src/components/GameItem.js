import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      displayTick: false,
    };
  }

  onIconClick = () => {
    this.setState({ displayTick: true});
    console.log('heerre');
    console.log(this.state.displayTick);
  };

  render() {

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      type: this.props.type,
    };

    // Update this to select the correct icon for each item
    const iconType = itemStyle.type;
    console.log(iconType);
    const icon = ItemIcons[iconType];

    let tickDisplay = null;
    //  check if it's been clicked!
    // check it it's not clicked!
    if (this.state.displayTick) {
      tickDisplay = iconType === 'litter' ? 'spotted-litter' : 'spotted-nature';
    };

    console.log(tickDisplay);

    return (
      <div className="game-item" style={itemStyle} onClick={this.onIconClick}>
        <div className={tickDisplay}></div>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
};


export default GameItem;
