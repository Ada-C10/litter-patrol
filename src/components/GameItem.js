import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  //side question: can you have a constuctor without an inherante?
  constructor(props) {

    super(props);

    // this.state = {
    //   name: this.props.name,
    //   type: this.props.type,
    // };
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
    const type = this.props.type
    // console.log(type)



    // Update this to select the correct icon for each item


    //const icon = `ItemIcons.${type}` // does not evaluate
    const icon =ItemIcons[type]
    console.log(icon)

    return (
      <div className="game-item" style={itemStyle}>
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
