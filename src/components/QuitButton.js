import React, { Component } from 'react';
import './QuitButton.css';

class QuitButton extends Component {

  makeItStop = () => {
    this.props.toggleGameplay();
    this.props.enableSpawner(false);
    this.props.clearItems();
  }

  stopGameButton() {
    return (
      <div className="hexagon">
        <span className="e-brake" onClick={ this.makeItStop }>
          <p>stop</p>
          <p>b4 i</p>
          <p>puke</p>
        </span>
      </div>
    )
  }

  render() {
    return (
      <section className="flex-container-for-hex">
        { this.stopGameButton() }
      </section>
    )
  }
};

export default QuitButton;
