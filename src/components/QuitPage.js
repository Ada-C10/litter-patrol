import React, { Component } from 'react';
import './QuitPage.css';
import PropTypes from 'prop-types';

class QuitPage extends Component {

  returnToGame = () => {
    this.props.toggleGameplayCallback();
    this.props.enableSpawnerCallback(true);
  }

  render() {
    return (
      <div className="flex-container-for-quiet-page">
        <h1>break time, luv u!</h1>
        <h4>we saved ur score btw.</h4>
        <div className="container-for-border-button">
          <button className="refresh-button" onClick={ this.returnToGame }>
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

QuitPage.propTypes = {
  toggleGameplayCallback: PropTypes.func.isRequired,
  enableSpawnerCallback: PropTypes.func.isRequired
}

export default QuitPage;
