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

  render() {

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const markAsSpotted = () => {
      if (this.props.type === 'litter') {
        this.setState({
          gameItemClass: this.state.gameItemClass + ' spotted-litter'
        });
        this.props.onItemClickedCallback();
      } else {
        this.setState({
          gameItemClass: this.state.gameItemClass + ' spotted-nature'
        });
      }
    }

    // Update this to select the correct icon for each item
    const icon = ItemIcons[`${this.props.type}`];

    return (
      <div className={ this.state.gameItemClass } style={itemStyle} onClick={ markAsSpotted }>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onItemClickedCallback: PropTypes.func.isRequired
}

export default GameItem;
