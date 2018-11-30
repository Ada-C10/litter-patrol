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
      isLitter: false
    };
  }
  spotted = () => {
    // Logic here
    if (this.props.type === "litter" && !this.props.spotted) {
      console.log("this is litter");
      // TODO - Make class name be returned TODO
      this.setState({
        isLitter: true,
        spotted: true
      });
      this.className = "game-item.spotted-litter::before";
      console.log(this);
    } else if (!this.props.spotted) {
      console.log("this is not litter, get a red x");
      this.setState({
        spotted: true
      });
      this.className = "game-item.spotted-nature::before";
      console.log(this);
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
      // TODO make className dynamic
      <div className={"game-item"} style={itemStyle} onClick={this.spotted}>
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
