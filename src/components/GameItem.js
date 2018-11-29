import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  };

  onItemClicked = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
    console.log(this.state.isClicked);
    // console.log('I am here');
    // console.log(this.props.type);
  };

  render() {
    let clickType;
    if (this.state.isClicked) {
      clickType = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
    };

    // console.log("game-item " + clickType);

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      iconType: this.props.type,
    };

    // console.log(itemStyle);
    // Update this to select the correct icon for each item
    const icon = ItemIcons[itemStyle.iconType];//ItemIcons.rock;

    return (
      <div className={"game-item " + clickType} style={itemStyle} onClick={ this.onItemClicked }>
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
