//3rd party apps first
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import ItemIcons from '../ItemIcons.js';

class GameItem extends Component {
//always send constructor and super props
  constructor(props) {
    super(props);
//this is how you declare state on a variable, key = variable and value = empty string per PropTypes
    this.state = { //state is managed by child
      itemClass: '' //setting state for .css class selected
    };
  }
//variable set to booleen - if prop type is litter select class litter else nature
  handleItemClick = () => {
    const itemClickedClass = (this.props.itemType === 'litter')
      ? 'spotted-litter'
      : 'spotted-nature';
    this.setState({ itemClass: itemClickedClass }); // if varaible name same as state then just {itemClass}

    //callback to app.js
    if (this.props.onItemClick) {//onItemClick passed as prop to GameItem
      this.props.onItemClick(this.props.itemType);//passing itemType prop to app.js
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    //Update this to select the correct icon for each item
    //const icon = ItemIcons.rock;
    const icon = ItemIcons[this.props.itemType]; //imported itemIcons key/value ItemIcons by prop type

    return (
      <div
        className={`game-item ${this.state.itemClass}`} //gave the class two .css styles
        style={itemStyle} //itemClass is the state litter or nature .css
        onClick={this.handleItemClick} //function defined above render
      >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

GameItem.propTypes = { //props come from parent
  itemType: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
