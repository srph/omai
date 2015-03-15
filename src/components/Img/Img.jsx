import React from 'react';

/**
 * Self removing <img> when the `src` or image
 * does not load or is unavailable.
 *
 * Usage: (tip: it's how you use the <img> tag, basically)
 * <Img src={} alt={} ../..>
 */
var Img = React.createClass({
  // We'll set `error` to false to load and display the image,
  // only will it be true when an error occurs
  getInitialState() { 
    return { error: false }
  },

  render() {
    // Omit any passed `onError` prop so that
    // it is never overridden by mistake
    var { onError, ...other } = this.props;

    return !this.state.error ? (
      <span>
        <img {...other} onError={this._handleError} />
      </span>
    ) : null;
  },

  /**
   * Set `state` error to true to remove the
   * the dom nodes themselves
   */
  _handleError() {
    this.setState({ error: true });
  }
});

export default Img;