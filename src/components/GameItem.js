import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTagged: false,
    };
  }

  onIconClick = () => {
    this.setState({ isTagged: true});

    if (this.props.type === "litter") {
      this.props.updatePointsCallback();
    }
  };

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      type: this.props.type,
    };

    // Update this to select the correct icon for each item
    const item = itemStyle.type;
    const icon = ItemIcons[item];

    let checkIcon = undefined

    if (this.state.isTagged) {
      this.props.type === "litter" ? checkIcon = "spotted-litter" : checkIcon = "spotted-nature";
    }

    return (
      <div className="game-item {checkIcon}" style={itemStyle} onClick={this.onIconClick}>
        <div className={checkIcon}></div>
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
