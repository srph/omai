import React from 'react';

/**
 * Self removing <img> when the `src` or image
 * does not load or is unavailable.
 */
var Img = React.createClass({
  propTypes: {
    /**
     * img alt
     */
    alt: React.PropTypes.string,

    /**
     * img 
     */
    src: React.PropTypes.string
  },

  /**
   * Force update so `refs` will be available
   */
  componentDidMount() {
    this.forceUpdate();
  },

  render() {
    var { alt, src, ...other} = this.props;

    return (
      <span ref="container">
        <img src={src}
          alt={alt}
          onError={this._handleError}
          {...other} />
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