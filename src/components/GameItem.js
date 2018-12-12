import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';


class GameItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false
    };

  }
  onClicked = () => {
        // Fill this in!
    console.log(this);
    if (!this.state.clicked) {
        this.setState({clicked: true});
    }

    if (this.props.type === 'litter') {
      this.props.onClickedCallback();
    }

  };
    clickedClass = () => {
        if (this.state.clicked && this.props.type === 'litter') {
            return "game-item spotted-litter"
        } else if (this.state.clicked && this.props.type !== 'litter') {
            return "game-item spotted-nature"
        } else {
          return "game-item"
        }
    };

  render() {
    // console.log(this.props);
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display on top of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;
    const icon = ItemIcons[this.props.type];


    return (
      <div className={this.clickedClass()}
           style={itemStyle}>
        <img src={icon}
             alt="Item"
             className={"icon-item"}
             onClick={ this.onClicked }
        />
      </div>
    );
  }
}

GameItem.propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
};

export default GameItem;
