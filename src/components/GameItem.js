import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spotted: false,
      styleItem: ""
    }

  }

  onItemClicked = () => {
    this.setState({spotted: true});
    this.setState({styleItem: this.setClass()})
    
    if (this.props.type === "litter") {
      this.props.incrementScoreCallback()
    }
  }

  setClass = () => {
    console.log("setting style now"
    )
    return this.props.type === "litter" ? "spotted-litter" : "spotted-nature"
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type]

    return (

        <div className={"game-item " + this.state.styleItem} style={itemStyle} onClick={ this.onItemClicked }>
          <img src={icon} alt="Item" className="icon-item"/>
        </div>

    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
