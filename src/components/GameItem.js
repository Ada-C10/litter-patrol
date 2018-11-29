import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super(props);
    this.state= {
      isSpotted: false,
    };
  }

  onItemClick = () => {
    // console.log(this.props.type);
    this.setState({
      isSpotted: true,
    });
  }



  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
    let itemClass = "game-item";

    if (this.state.isSpotted) {
      itemClass = `game-item spotted-${this.props.type === 'litter' ? 'litter' : 'nature'} `
    }

    // console.log(this.props.type);
    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className={itemClass} style={itemStyle} onClick={ this.onItemClick }>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

export default GameItem;
