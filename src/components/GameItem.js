import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

constructor(props) {
  super(props);
  this.state = {
    spotted: false
  };
}

clickItem = () => {
  this.setState({
    spotted: true
  });

  if (this.props.type === "litter") {
    this.props.litterClick();
  }


}



  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };


    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    const iconClass = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
    const itemClass = this.state.spotted ? `game-item + ${iconClass}` : 'game-item';

    return (
      <div className={itemClass} style={itemStyle}>
        <img src={icon} alt="Item" className='icon-item' onClick={this.clickItem}></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
