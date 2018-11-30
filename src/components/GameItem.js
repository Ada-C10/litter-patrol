import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      spotted: false
    }
  }

/* when click item happens it changes this state to true */
  clickItem = () => {
    this.setState({
      spotted: true
    });
    if (this.props.type == "litter") {
      this.props.litterCallback();
    };
  }

  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

/*this is the GameItem
  this.props are the properties the App gave to GameItem*/

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const item = this.props.type;
    const icon = ItemIcons[item];
    const iconClass = this.props.type === "litter" ? "spotted-litter" : "spotted-nature";
    const itemClass = this.state.spotted ? `game-item ${iconClass}` : "game-item";

    return (
      <div className={itemClass} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.clickItem}></img>
      </div>
    );
  }
}

export default GameItem;
