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
