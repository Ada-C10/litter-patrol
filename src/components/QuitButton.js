import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuitPage from './QuitPage.js';
import './QuitButton.css';

class QuitButton extends Component {

  stopGameButton() {
    return (
      <div className="hexagon">
        <span className="e-brake" onClick={ this.makeItStop }>
          <p>nope nope nope</p>
          <p>make it</p>
          <p>stop</p>
        </span>
      </div>
    )
  }

  makeItStop() {
    ReactDOM.render(<QuitPage />, document.getElementById('root'));
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
