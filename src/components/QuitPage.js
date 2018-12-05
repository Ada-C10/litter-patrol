import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import './QuitPage.css';

class QuitPage extends Component {

  returnToNewGame() {
    ReactDOM.render(<App />, document.getElementById('root'));
  }

  render() {
    return (
      <div className="flex-container-for-quiet-page">
        <h1>break time, luv u!</h1>
        <div className="container-for-border-button">
          <button className="refresh-button" onClick={ this.returnToNewGame }>
            I'm feeling better and I'm ready to go back to the game!
          </button>
        </div>
        <div className="flowerpot">
          <div className="pot-top"></div>
          <div className="pot-top-shadow"></div>
          <div className="pot-bot"></div>
          <div className="plant-left"></div>
          <div className="plant-middle"></div>
          <div className="plant-right"></div>
          <div className="flower1"></div>
          <div className="blossom">
            <div className="flower-petal1 flower"></div>
            <div className="flower-petal2 flower"></div>
            <div className="flower-petal3 flower"></div>
            <div className="hflower-base"></div>
          </div>
          <div className="blossom2">
            <div className="flower-petal1 flower"></div>
            <div className="flower-petal2 flower"></div>
            <div className="flower-petal3 flower"></div>
            <div className="hflower-base"></div>
          </div>
          <div className="blossom3">
            <div className="flower-petal1 flower"></div>
            <div className="flower-petal2 flower"></div>
            <div className="flower-petal3 flower"></div>
            <div className="hflower-base"></div>
          </div>
          <div className="middle-line1"></div>
          <div className="middle-line2"></div>
          <div className="middle-line3"></div>
        </div>
      </div>
    )
  }
};

export default QuitPage;
