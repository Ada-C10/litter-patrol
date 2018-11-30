import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      clickedOn: false,
    };
  }

  onClickChange = (event) => {
    this.setState({
      clickedOn: true,
    });

    const pointsOfItems = this.props.type === "litter" ? 1 : 0;
    // function passed on from parent (App.js) through props
    //Game sends info about points by passing in data to send to parent
    this.props.onClick(pointsOfItems);
  }


  render() {
    const spotted = this.props.type === "litter" ? "spotted-litter" : "spotted-nature";


    const itemToMark = this.state.clickedOn ? spotted : null


    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className="game-item" style={itemStyle}>
        <div className= {itemToMark}>
          <img src={icon} alt="Item" className="icon-item" onClick={this.onClickChange}></img>
        </div>
      </div>
    );
  }
}

export default GameItem;
