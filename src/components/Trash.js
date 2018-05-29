import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  render() {
    return (
      <div className="bin">
        <img src={ TrashIcon } alt="Trash" className="trash"></img>
      </div>
    );
  }
}

export default Trash;
