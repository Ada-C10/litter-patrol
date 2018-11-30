import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
  }

  markClickedClickHandler = () => {
    console.log(`They clicked a ${this.props.itemType}!`);
    this.props.markClickedCallback(this.props.index);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item - done
    // const icon = ItemIcons.rock;
      const icon = ItemIcons[this.props.itemType];

      const ifLitter = this.props.itemType == "litter" ? "spotted-litter::before": ".spotted-nature::before";
    // ItemIcons { litter, rock, bush, flower, mushroom}
    return (
      <div className={`game-item ${ifLitter}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.markClickedClickHandler}>
        </img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
