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

  onSpot = () => {
    this.setState({spotted: true});
    this.props.itemType === 'litter' && this.props.markLitterCallback(this.props.index);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.itemType];

    let spottedStyle = ''

    if (this.state.spotted) {
      this.props.itemType === 'litter' ? spottedStyle = " spotted-litter" : spottedStyle = " spotted-nature";
    }

    return (
      <div className={`game-item${spottedStyle}`} style={itemStyle} onClick={this.onSpot}>
        <img src={icon} alt={this.props.itemType} className="icon-item" onClick={this.onSpot}></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  index: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  itemType: PropTypes.string.isRequired,
  markLitterCallback: PropTypes.func.isRequired
}

export default GameItem;
