import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  //I want to add either a check or 'x' on icon when clicked - if icon is equal to 'litter' type; add css 'check' else add css 'x'.
  onItemSelected = () => {
    // if (this.props.type === litter) {
    // div.className.remove()
    // dive.className.add(gameItem + litter)
    //   className="spotted-litter"
    // } else {
    // div.className.remove()
    // dive.className.add(gameItem + trash)
    //   className="spotted-nature"
    // }
    // console.log(this.props.type);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;
    const icon = ItemIcons[this.props.type];
    const litter = "spotted-litter";
    const trash = "spotted-nature";
    const gameItem = "game-item";

    //Trying to add if onClick - div className is changed
    const itemChosen = icon === 'litter' ? "spotted-litter" : "spotted-nature";

    return (
      <div className={gameItem} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"
         //onClick={this.onItemSelected}
          >
        </img>
      </div>
    );
  }
}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
};

export default GameItem;
