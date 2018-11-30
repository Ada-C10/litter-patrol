import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props){
    super(props);

    this.state = {
      thing: props.thing,
      style: "game-item",
    }
  }

  markIcon = () => {
    console.log("In Game Item Handler");
    console.log(this.state.thing);

    let finalStyle = "";
    this.state.thing === "litter"? finalStyle = "game-item spotted-litter" : finalStyle = "game-item spotted-nature";

    this.setState({style: `${finalStyle}`});
    this.props.itemClickedCallback(this.state.thing);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };



    // Update this to select the correct icon for each item
    let icon = "";
    if(this.state.thing === "litter"){
      icon = ItemIcons.litter;
    }
    else if(this.state.thing === "rock"){
      icon = ItemIcons.rock;
    }
    else if(this.state.thing === "bush"){
      icon = ItemIcons.bush;
    }
    else if(this.state.thing === "flower"){
      icon = ItemIcons.flower;
    }
    else if(this.state.thing === "mushroom"){
      icon = ItemIcons.mushroom;
    }

    return (
      <div className={this.state.style} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.markIcon}></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
