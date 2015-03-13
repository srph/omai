import React from 'react';

/**
 * Self removing <img> when the `src` or image
 * does not load or is unavailable.
 */
var Img = React.createClass({
  propTypes: {
    /**
     * img 
     */
    src: React.PropTypes.string.isRequired
  },

  /**
   * Force update so `refs` will be available
   */
  componentDidMount() {
    this.forceUpdate();
  },

  render() {
    var { src, ...other} = this.props;

    return (
      <span ref="container">
        <img src={src}
          onError={this._handleError}
          style={{backgroundColor:'gray'}}
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