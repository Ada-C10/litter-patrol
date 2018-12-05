import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import ItemIcons from '../ItemIcons.js';

class GameItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemClass: ''
    };
  }

  handleItemClick = () => {
    const itemClickedClass = (this.props.itemType === 'litter')
      ? 'spotted-litter'
      : 'spotted-nature';
    this.setState({ itemClass: itemClickedClass });
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    //Update this to select the correct icon for each item
    //const icon = ItemIcons.rock;
    const icon = ItemIcons[this.props.itemType];

    return (
      <div
        className={`game-item ${this.state.itemClass}`}
        style={itemStyle}
        onClick={this.handleItemClick}
      >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

GameItem.propTypes = {
  itemType: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
