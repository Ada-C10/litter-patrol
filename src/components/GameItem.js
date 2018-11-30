import React, { Component } from "react";
import classNames from "classnames";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.type = props.type;
    this.clicked = props.clicked;
    this.state = {
      spotted: false,
      isLitter: false
    };
  }
  spotted = () => {
    console.log("BEFORE");
    console.log(this.state);
    console.log("AFTER");
    // Logic here
    if (this.props.type === "litter" && !this.state.spotted) {
      console.log("this is litter");
      this.setState({
        isLitter: true,
        spotted: true
      });
    } else if (!this.state.spotted) {
      console.log("this is not litter, get a red x");
    } else {
      console.log("do nothing");
    }

    this.setState({
      spotted: true
    });
    console.log(this.state);
  };
  // Spot method
  // If not clicked - do a green check or red x
  // If clicked already, do nothing

  render() {
    let containerClass = classNames({});
    // let testThing = [`game-item ${type}`];
    // if (this.state.clicked){
    //   testThing.push("spotted-litter::before")
    // }

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    const type = this.props.type;
    const icon = ItemIcons[type];

    return (
      <div className={`game-item`} style={itemStyle} onClick={this.spotted}>
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
  clicked: PropTypes.bool.isRequired
};

export default GameItem;
