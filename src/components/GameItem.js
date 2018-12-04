import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
      super(props);
      this.state = {
        cssType: ''
      }
    }

  markClickedClickHandler = () => {
    const cssType = this.props.type === "litter" ? 'spotted-litter' : 'spotted-nature';
    this.setState({ cssType });
    this.props.markClickedCallback(this.props.type);
   }


  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const type = ItemIcons[this.props.type];



    return (
      <section>
      <div className={`game-item ${this.state.cssType}`} style={itemStyle}>
        <img src={type} alt="Item" className="icon-item" onClick={this.markClickedClickHandler}></img>
      </div>
    </section>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  markClickedCallback: PropTypes.func.isRequired,
}

export default GameItem;
