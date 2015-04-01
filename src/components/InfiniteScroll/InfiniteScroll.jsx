import React from 'react';

import timeout from '../../utils/timeout';

var _promise = null; // Promise flag
var _body = document.body;

var InfiniteScroll = React.createClass({
  propTypes: {
    /**
     * Flag to check if the callback should be executed
     * once the threshold / bottom has been reached.
     *
     * @default false
     */
    disabled: React.PropTypes.bool,

    /**
     * The callback to be executed once the
     * threshold / bottom has been reached
     */
    callback: React.PropTypes.func.isRequired,

    /**
     * Allowance to be scrolled, so callback is executed
     * although not actually at the bottom
     *
     * * @default 250
     */
    threshold: React.PropTypes.number,

    /**
     * Number of milliseconds to delay the execution
     * of the callback.
     *
     * @default 250
     */
    throttle: React.PropTypes.number
  },

  /**
   * Some property defaults
   */
  getDefaultProps() {
    return { disabled: false, threshold: 250, throttle: 250 };
  },

  /**
   * Run `forceUpdate` when the window
   * resizes, so the bottom is still properly calculated
   */
  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll, false);
    window.addEventListener('onresize', this._handleWindowResize);
  },

  /**
   * Unmount our `forceUpdate` bind
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('onresize', this._handleWindowResize);
  },

  /**
   * Handles our window resize. This function
   * simply executes `forceUpdate`
   */
  _handleWindowResize(evt) {
    this.forceUpdate();
  },

  render() {
    var { disabled, callback, threshold, throttle, ...other } = this.props;

    return (
      <div {...other}>
        {this.props.children}
      </div>
    );
  },

  /**
   * Handles infinite scrolling accordingly
   */
  _handleScroll(evt) {
    var { callback, disabled, threshold, throttle } = this.props;

    var height = _body.clientHeight;
    var scroll = _body.scrollTop;
    var screen = window.innerHeight;
    // var bottom = window.scrollHeight;

    if ( disabled === true || _promise !== null || scroll + threshold + screen < height ) {
      return;
    }

    _promise = timeout(throttle).then(() => {
      // We should be using `finally`, but es6-promise unfortunately
      // does not support this. Since we're not actually doing any
      // async code (and which could fail), let's just use then. Overhead
      // just to be arrogant
      Promise.resolve(callback()).then(() => { _promise = null; });
    })
  }
});

export default InfiniteScroll;
