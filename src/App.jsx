/** @jsx React.DOM */
import * as React from 'react';
import * as Work from './Work/WorkList';
import * as Profile from './Profile/Profile';

var App = React.createClass({
  getInitialState() {
    return { active: false };
  },

  render() {
    var active = this.state.active;
    var activate = this.state._activate;

    return (
      <div className="container">
        <Profile activate={active} activateHandler={activate} />
        { active ? <WorkList /> : '' }
      </div>
    );
  },

  _activate() {
    this.setState({ active: true });
  }
});

// Yolo pls swag.
React.render(<App />, document.body);