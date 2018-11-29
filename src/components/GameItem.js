import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  // itemClass set to empty string for div lassName={`game-item ${this.state.itemClass}`}. Default value
  constructor(props) {
    super(props);
    this.state = {
      itemClass: ''
    }
  }

  // when item is clicked itemClass is set to .spotted-litter or .spotted-nature depending on if it is litter or not. this.setState changes the state of the item. Created a function onGameItemClick which is accessed in App.js as onItemClicked. This updates the score if item === "litter"
  onItemClicked = () => {
    // console.log(this.props.type);
    const itemClass = this.props.type === "litter" ? 'spotted-litter' : 'spotted-nature';
    this.setState({ itemClass });
    if (this.props.onGameItemClick) {
      this.props.onGameItemClick(this.props.type);
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // Added onClick method to the div container, rather than img (makes area larger to click on)
    const icon = ItemIcons[this.props.type];

    return (
        <div
          className={`game-item ${this.state.itemClass}`}
          style={itemStyle}
          onClick={this.onItemClicked}
        >
          <img src={icon} alt="Item" className="icon-item"></img>
        </div>
    );
  }
}

// Added props here of type and onGameItemClick which is a function.
GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onGameItemClick: PropTypes.func,
};

export default GameItem;
