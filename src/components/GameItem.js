import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';
// import App from '../src/App.js'


class GameItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      divClass: "game-item"
    }
  }

  changedToCheck = (event) => {
    if (!this.state.checked){
      this.setState({
        checked: true,
      });
      if (this.props.itemType === "litter") {
        this.setState({
          divClass: "game-item spotted-litter"
        })
      }
      else{
        this.setState({
          divClass: "game-item spotted-nature"
        })
      }
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // // Update this to select the correct icon for each item
    const icon = ItemIcons[`${this.props.itemType}`];

    return (
      <div className={this.state.divClass} style={itemStyle} id={this.props.index} onClick={this.changedToCheck}>
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
