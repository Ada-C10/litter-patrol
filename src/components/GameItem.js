import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  //side question: can you have a constuctor without an inherante?
  constructor(props) {

    super(props);

    this.state = {
      name: this.props.name,
      type: this.props.type,
    };
  }


  // item was clicked!
  onClick = () => {
    console.log(this)
    //
    if (this.state.type === "litter") {
      // and increse score by one by calling function in onItemClicked in App because app contains score

      this.setState({ class: "spotted-litter" });
    } else {
      this.setState({ class: "spotted-nature" });
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // define icon
    const type = this.props.type
    const icon =ItemIcons[type]

    // define class
    const originalClass = "game-item";
    const mark = this.state.class

    return (
      <div className={originalClass + " " + mark } style={itemStyle} >
        <img src={icon} alt="Item" className="icon-item" onClick={ this.onClick }></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
