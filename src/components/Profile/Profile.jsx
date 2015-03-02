/** @jsx React.DOM */
import * as React from 'react';

var Profile = export React.createClass({
  propTypes: {
    /**
     * Flag for work (whether active)
     */
    active: React.PropTypes.bool,

    /**
     * Handle setting of flag for work (normally to set it as true)
     */
    activateHandler: React.PropTypes.func
  },

  render() {
    return (
      <div>
      </div>
    );
  }
});