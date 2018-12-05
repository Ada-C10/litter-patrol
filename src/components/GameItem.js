import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();

    this.state = {
      gameItemClass: "game-item",
    };
  }

  markAsSpotted() {
    if (this.props.type === 'litter') {
      this.setState({
        gameItemClass: this.state.gameItemClass + ' spotted-litter'
      });
    } else {
      this.setState({
        gameItemClass: this.state.gameItemClass + ' spotted-nature'
      });
    }
  }

  render() {

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[`${this.props.type}`];

    return (
      <div className={ this.state.gameItemClass } style={itemStyle} onClick={ this.markAsSpotted.bind(this) }>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
