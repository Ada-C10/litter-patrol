import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  // create prop types based
  propTypes = {
    height: PropTypes.number,
    layer: PropTypes.number,
    type: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      spotted: false,
    };
  }
  // click event thing needs to be an arrow function
  onClickChange = (event) => {
    if(!this.state.spotted) {
      this.setState({ spotted: true});
      this.props.onClick(this.props.type);
    }
    const pointsOfItems = this.props.type === "litter" ? 1 : 0;
    this.props.onClick(pointsOfItems);
  }


  render() {
    const spotted = this.props.type === "litter" ? "spotted-litter" : "spotted-nature";
    const itemToMark = this.state.clickedOn ? spotted : null
    const itemStyle = {
      // charles made this part
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const classNames = ['game-item'];
    // use this. props type
    const icon = ItemIcons[this.props.type];

    if(this.state.spotted) {
      const style = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
      classNames.push(style);
    }

    return (
      <div className="game-item" style={itemStyle}>
        <div className={itemToMark}>
          <img src={icon} alt="Item" className="icon-item" onClick={this.onClickChange}></img>
          <img src={icon} alt="Item" className="icon-item"></img>
        </div>
      </div>
    );
  }
}


// GameItem.propTypes = {
//   height: PropTypes.number.isRequired,
//   layer: PropTypes.number.isRequired,
// }

export default GameItem;
