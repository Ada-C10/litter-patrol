import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  };

  onIconClicked = () => {
    this.setState({
      isClicked: true
    });
    this.props.onItemClickedCallback(this.props.type);
  };

  render() {
    let clickType;
    if (this.state.isClicked) {
      clickType = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
    };

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      iconType: this.props.type,
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[itemStyle.iconType];

    return (
      <div className={"game-item " + clickType} style={itemStyle} onClick={ this.onIconClicked }>
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
