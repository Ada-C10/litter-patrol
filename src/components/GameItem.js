import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      spotted: false,
      itemStyleClass: ""
=======
      clicked: false,
      recordOf: ""
>>>>>>> parent of e826bae... callback function added for App to implement point tracking on item click events
    }

  }

  onItemClicked = () => {
<<<<<<< HEAD
    this.setState({spotted: true});
    this.setState({styleItem: this.setClass()})

    if (this.props.type === "litter") {
      this.props.incrementScoreCallback()
    }
  }

  setClass = () => {

    return this.props.type === "litter" ? "spotted-litter" : "spotted-nature"
=======
    this.setState({clicked: true});
    this.setState({recordOf: this.setClass()})
  }

  setClass = () => {
    if (this.props.type === "litter"){
      return "spotted-litter"
    } else {
      return "spotted-nature"
    }
>>>>>>> parent of e826bae... callback function added for App to implement point tracking on item click events
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[`${this.props.type}`]
    return (
<<<<<<< HEAD
        <div className={"game-item " + this.state.itemStyleClass} style={itemStyle} onClick={ this.onItemClicked }>
=======
      <button onClick={ this.onItemClicked } >
        <div className={"game-item " + this.state.recordOf} style={itemStyle}>
>>>>>>> parent of e826bae... callback function added for App to implement point tracking on item click events
          <img src={icon} alt="Item" className="icon-item"/>
        </div>
      </button>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
