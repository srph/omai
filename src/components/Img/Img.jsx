import React from 'react';

/**
 * Self removing <img> when the `src` or image
 * does not load or is unavailable.
 *
 * Usage: (tip: it's how you use the <img> tag, basically)
 * <Img src={} alt={} ../..>
 */
var Img = React.createClass({
  render() {
    // Omit any passed `onError` prop so that
    // it is never overridden by mistake
    var { onError, ...other } = this.props;

    return (
      <span>
        <img {...other} onError={this._handleError} ref="img" />
      </span>
    );
  },

  /**
   * Set `state` error to true to remove the
   * the dom nodes themselves
   */
  _handleError() {
    this.refs.img.getDOMNode().src = 'https://placehold.it/346x270';
  }
});

export default Img;
