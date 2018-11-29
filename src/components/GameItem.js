import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  onItemClicked = () => {
    this.props.markClickedCallback(this.props.index);
  }

  markImage = (icon) => {
    if (this.props.isClicked) {
      if (icon === "litter") {
        return "spotted-litter"
      } else {
        return "spotted-nature"
      }
    } else {
      return ""
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const icon = ItemIcons[this.props.type];
    console.log(this.markImage(icon));

    return (
      <div className={"game-item " + this.markImage(icon)} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={ this.onItemClicked }></img>
      </div>
    );
  }
}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default GameItem;
