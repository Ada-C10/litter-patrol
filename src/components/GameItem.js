import React, { Component } from 'react';
import style from '../App.css';
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

  // it does not toggle, once it is changed, it stays changed - mark absent
  // the change is: a green check, if the item has type 'litter', otherwise an X
        // find css:
          // * Assign this class when a non-litter item is clicked */
          //.spotted-nature::before
          // /* Assign this class when a litter item is clicked */
          //.spotted-litter::before
        // and increse score by one by calling function in onItemClicked in App because app contains score

  // item was clicked!
  onClick = () => {
    console.log(this)
    //
    if (this.state.type === "litter") {
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

    const type = this.props.type
    const icon =ItemIcons[type]
    const originalClass = "game-item";

    const mark = this.state.class
    //console.log(headerColor)
    //<div className={this.state.class === "spotted-litter::before" || "spotted-nature::before"? header + " " + headerColor: header} style={itemStyle} >

    //const mark = this.props.type === "litter" ? "spotted-litter::before" : "spotted-nature::before";
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
