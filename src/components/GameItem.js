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

  onItemClick = () => {
    this.setState({
      spotted: true
    });

    if (this.props.type === 'litter') {
      this.props.itemClickCallback();
    }

};




render() {
  const itemStyle = {
    bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
    zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    type: this.props.type
  };

  // Update this to select the correct icon for each item
  const iconGenre = itemStyle.type;
  const icon = ItemIcons[iconGenre];

  let spottedIndicator = '';
  if (this.state.spotted) {
    const didISpotLitter = iconGenre === 'litter'
    spottedIndicator = didISpotLitter ? 'spotted-litter' : 'spotted-nature';
  }



  return (
    <div className='game-item'  style={itemStyle} onClick={this.onItemClick}>
      <div className = {spottedIndicator}>
        <img src={icon} alt={iconGenre} className="icon-item"></img>
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
