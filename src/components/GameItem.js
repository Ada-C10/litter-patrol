import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props){
    super(props)

    this.state = {
      style: "game-item"
    }
  }


  onItemButtonClick = () => {
    // console.log("Does this work???");

    let finalStyle = "";
    let propType = this.props.type
    this.props.type === "litter" ? finalStyle = 'game-item spotted-litter' : finalStyle = 'game-item spotted-nature';

    this.setState({
      style: `${finalStyle}`
    })


    this.props.getPointsCallback(this.props.type);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;
    const icon = ItemIcons[this.props.type];


    return (
      <div className={this.state.style}
        style={itemStyle}
        onClick={this.onItemButtonClick}>
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
