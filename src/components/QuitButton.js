import React, { Component } from 'react';
import './QuitButton.css';
import PropTypes from 'prop-types';

class QuitButton extends Component {

  makeItStop = () => {
    this.props.toggleGameplayCallback();
    this.props.enableSpawnerCallback(false);
    this.props.clearItemsCallback();
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

QuitButton.propTypes = {
  toggleGameplayCallback: PropTypes.func.isRequired,
  enableSpawnerCallback: PropTypes.func.isRequired,
  clearItemsCallback: PropTypes.func.isRequired
}

export default QuitButton;
