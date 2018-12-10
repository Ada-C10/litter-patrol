import React, { Component } from "react";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.type = props.type;
    this.state = {
      spotted: false,
      isLitter: false,
      itemClassName: ""
    };
  }
  spotted = () => {
    // Logic here
    // If object is litter/has not been clicked before
    if (this.props.type === "litter" && !this.props.spotted) {
      console.log("this is litter");
      // Update isLitter and spotted to true
      this.setState({
        isLitter: true,
        spotted: true,
        itemClassName: "spotted-litter"
      });
      // If not spotted/not litter
    } else if (!this.props.spotted) {
      console.log("this is not litter, get a red x");
      // Update spotted to true
      this.setState({
        spotted: true,
        itemClassName: "spotted-nature"
      });
      // console.log(this);
      // Else - Nothing to do other than update spotted
    } else {
      console.log("do nothing");
      this.setState({
        spotted: true
      });
    }
  };

  markClicked = () => {
    this.props.clicked = true;
  };

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    const type = this.props.type;
    const icon = ItemIcons[type];

    return (
      <div
        className={`game-item ${this.state.itemClassName}`}
        style={itemStyle}
        onClick={this.spotted}
      >
        <img src={icon} alt="Item" className="icon-item" />
      </div>
    );
  }
}

GameItem.defaultProps = {
  clicked: false
};

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string,
  clicked: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};

export default GameItem;
