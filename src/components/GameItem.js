import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import ItemIcons from '../ItemIcons.js';

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemClass: ''
    };
  }
// need event handler for when its clicked and it's trash and hasnt been clicked befre
onClickHandler = () => {

  const itemClickedClass = (this.props.type === 'litter')
    ? 'spotted-litter'
    : 'spotted-nature';
  this.setState({itemClass: itemClickedClass});

  if (this.props.onItemClick){
    this.props.onItemClick(this.props.type)
  }
}

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div
        className={`game-item ${this.state.itemClass}`}
        style={itemStyle}
        onClick={this.onClickHandler}
        >

        <img src={icon} alt="Item" className="icon-item" ></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default GameItem;
