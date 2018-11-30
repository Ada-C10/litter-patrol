import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isclicked: false
    };
  }

  clickItem = () => {
    this.setState({
      isclicked: true
    });

    if (this.props.type === "litter") {
      this.props.itemclickCallback();
    }

  }


  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const item = this.props.type
    const icon = ItemIcons[item];

    let itemClass = "";

    if (this.state.isclicked) {
      if (item === "litter") {
        itemClass = "spotted-litter"
      }else{
        itemClass = "spotted-nature"
      }
    }

    // const itemClass = item === "litter" && this.state.isclicked ? "spotted-litter" : "spotted-nature";

    return (
      <div className="game-item" style={itemStyle} onClick={this.clickItem}>
        <div className={itemClass}>
          <img src={icon} alt="Item" className="icon-item"></img>
        </div>
      </div>

    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
