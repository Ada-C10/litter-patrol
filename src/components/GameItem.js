import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
  super(props)

  this.state = {
    className: "game-item",
    itemType: this.props.itemType
  };
}

  markItem = (event) => {
   if (this.state.itemType === "litter") {
     this.setState({
       className: "game-item spotted-litter",
     })
     this.props.callback(true);
   }
   else {
     this.setState({
       className: "game-item spotted-nature"
     })
     this.props.callback(false);
   }
}



  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background

    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.itemType]


    return (
      <div className={this.state.className} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.markItem}></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
