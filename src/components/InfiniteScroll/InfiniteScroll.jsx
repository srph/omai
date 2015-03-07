import React from 'react';

import timeout from '../../utils/timeout';

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

  getInitialState() {
    return {
      /**
       * Our promise flag.
       */
      promise: null
    };
  },

  render() {
    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  },

  /**
   * Handles infinite scrolling accordingly
   */
  _handleScroll(evt) {
    var { promise } = this.state;
    var { callback, disabled, threshold, throttle } = this.props;

    if ( disabled === true || promise !== null ) return;

    promise = timeout(callback, throttle).finally( => this.setState({ promise: null }) );
    this.setState({ promise: promise });
  }
});