import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class GameItem extends Component {


  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    ;

    return (
      <div className="game-item" style={itemStyle}>
        <img src={this.props.icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
}

export default GameItem;
