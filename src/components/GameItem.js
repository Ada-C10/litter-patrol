import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSpotted: false,
    }
  }

  onItemSpotted = () => {
    this.setState({isSpotted: true});
    this.props.onItemClickedCallback(this.props.type);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    let itemClass = "game-item";
    if (this.state.isSpotted) {
      if (this.props.type === "litter") {
        itemClass += " spotted-litter"
      } else {
        itemClass += " spotted-nature"
      }
    }

    return (
      <div className={itemClass} style={itemStyle} onClick={this.onItemSpotted}>
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
