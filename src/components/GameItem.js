import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props){
   super(props);

   this.state ={
     clickStatus: false,
   };
}

  onIconClick = () => {
      if( this.state.clickStatus === false ) {
         this.setState({clickStatus: true});
         if(this.props.type === "litter"){
           this.props.onItemClickedCallback();
         }
       }
  }

  renderItemClass=()=> {
    if (this.state.clickStatus && this.props.type === "litter") {
        return "game-item spotted-litter"

    }else if (this.state.clickStatus && this.props.type !== "litter"){
      return "game-item spotted-nature"

    }else {
       return "game-item"

    }
  }


  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;

     let icon = undefined;
      if(this.props.type === 'rock') {
        icon = ItemIcons.rock;
      }
      if(this.props.type === 'litter') {
        icon = ItemIcons.litter;
      }
      if(this.props.type === 'flower') {
        icon = ItemIcons.flower;
      }
      if(this.props.type === 'bush') {
        icon = ItemIcons.bush;
      }
      if(this.props.type === 'mushroom') {
        icon = ItemIcons.mushroom;
      }


    return (
      <div className={this.renderItemClass()} style={itemStyle}>

        <img onClick={this.onIconClick} src={icon} alt="Item" className="icon-item"></img>

      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
