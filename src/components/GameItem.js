import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenClicked: false,
    };
  }



  markClickedClickHandler = () => {
    console.log(`They clicked a ${this.props.itemType}!`);
    this.props.markClickedCallback(this.props.index);
    this.setState({hasBeenClicked: true})

  }



  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item - done
      const icon = ItemIcons[this.props.itemType];


      // const ifLitter = this.props.itemType === "litter" && this.state.hasBeenClicked? "spotted-litter": "spotted-nature";
      // giveOverlay = () => {
        let overlay = "game-item";
        if (this.state.hasBeenClicked && this.props.itemType === "litter") {
            overlay = "game-item spotted-litter";
        } else if (this.state.hasBeenClicked) {
            overlay = "game-item spotted-nature"

      };
        // return overlay;
      // }

    // ItemIcons { litter, rock, bush, flower, mushroom}
    return (
      <div className={overlay} style={itemStyle}>
        <img src={icon} alt="Item" className={"icon-item"} onClick={this.markClickedClickHandler}>
        </img>
      </div>
    );
  }
}
// <img src={icon} alt="Item" className={`icon-item ${ifLitter}`}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
