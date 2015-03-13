import React from 'react';

/**
 * Self removing <img> when the `src` or image
 * does not load or is unavailable.
 *
 * Usage: (tip: it's how you use the <img> tag, basically)
 * <Img src={} alt={} ../..>
 */
var Img = React.createClass({
  /**
   * Force update so `refs` will be available
   */
  componentDidMount() {
    this.forceUpdate();
  },

  render() {
    return (
      <span ref="container">
        <img {...other} onError={this._handleError} />
      </span>
    )
  },

  /**
   * Remove itself when image is not found
   */
  _handleError() {
    this.refs.container.getDOMNode().remove();
  }
});

export default Img;