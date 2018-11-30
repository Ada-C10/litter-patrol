import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  onItemClick = () => {
    console.log(this);
    this.setState({clicked: !this.state.clicked});

    if (this.props.type === "litter") {
      this.props.onItemClickedCallback()
    }


  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const item = this.props.type;
    const icon = ItemIcons[item];
    const itemClass = (this.props.type === "litter") ? "spotted-litter" : "spotted-nature"
    const clickedClass = this.state.clicked ? `game-item ${itemClass}` : "game-item"

    return (
      <div className={clickedClass} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.onItemClick}></img>
      </div>
    );
  }
}

export default GameItem;
