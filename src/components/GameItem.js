import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSpotted: false
    };
  }

  onSpottedItem = () => {

    this.setState({
      isSpotted: true
    });

    this.props.itemClickCallBack();

    console.log('button clicked!');

  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    let spottedClass = ''
    if (this.props.type === 'litter'){
      spottedClass = 'spotted-litter';
    } else {
      spottedClass = 'spotted-nature'
    }

    const itemClass = this.state.isSpotted ? 'game-item '+ spottedClass : 'game-item';

    return (
      <div className={itemClass} style={itemStyle}>
        <img src={icon} alt="Item" className='icon-item' onClick={ this.onSpottedItem }></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
