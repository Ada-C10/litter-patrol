import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super();
    this.state = {
      clicked: false,
    }
  }

  //method to update whether/not an item has been clicked
  updateState = () => {
    this.setState({ clicked: true });
  }

  //method to update the score if a) the icon is litter and b) the item hasn't been clicked already
  updateScore = () => {
    if (this.props.type === "litter" && this.state.clicked === false) {
      this.props.addPoint()
    }
  }

  //method to aggregate both of the above functions
  onClickFunctions = () => {
    this.updateScore();
    this.updateState();
   }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };


    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type]


    //start of game-item class assignments
    let gameItemClass = ["game-item"]

    //logic to see what class should be appended on the click
    if (this.state.clicked) {
      if (this.props.type === "litter") {
        gameItemClass.push('spotted-litter');
      } else {
        gameItemClass.push('spotted-nature');
      }
    }

    return (
      <div onClick = { this.onClickFunctions } className = {gameItemClass.join(' ')} style={itemStyle}>
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
