import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTick: false,
    };
  }

  onIconClick = () => {
    this.setState({ displayTick: true });
    this.props.onItemClickedCallback(this.props.type);
  };


  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      type: this.props.type,
    };

    // Update this to select the correct icon for each item
    const iconType = itemStyle.type;
    console.log('type');
    console.log(iconType);
    const icon = ItemIcons[iconType];

    let tickDisplay = null;
    if (this.state.displayTick) {
      tickDisplay = iconType === 'litter' ? 'spotted-litter' : 'spotted-nature';
    };

    return (
      <div className="game-item" style={itemStyle} onClick={this.onIconClick}>
        <div className={tickDisplay}></div>
        <img src={icon} alt={iconType} className="icon-item"></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
