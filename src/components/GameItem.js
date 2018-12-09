import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      className: "game-item",
      type: this.props.type
    };
  }

  markItem = (event) => {
    if (this.state.type === "litter") {
      // this.props.points += 1;
      console.log("I'm in markItem");
      this.setState({
        className: "game-item spotted-litter",
      })
      this.props.callback();
    }
    else {
      this.setState({
        className: "game-item spotted-nature"
      })
    }
 }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      type: this.props.type,
    };


    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className={this.state.className} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.markItem} ></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  // key: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

export default GameItem;
