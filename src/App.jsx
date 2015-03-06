import React from 'react';

/* Second-level components */
import Container from './components/Container/Container';
import Work from './components/Work/WorkList';
import Profile from './components/Profile/Profile';

/**
 * Initialize MatchMediaBase
 * https://github.com/FormidableLabs/radium/blob/master/docs/guides/media-queries.md
 */
import {MatchMediaBase} from 'radium';
MatchMediaBase.init({ sm: '(min-width: 768px)' });

var App = React.createClass({
  // MatchMediaBase allows all of this components this descendants
  // to acquire the sizes we initialized (see top )
  mixins: [MatchMediaBase],

  getInitialState() {
    return { active: false };
  },

  render() {
    var active = this.state.active;
    var activate = this.state._activate;

    return (
      <Container>
        <Profile activate={active} activateHandler={activate} />
        { active ? <WorkList /> : '' }
      </Container>
    );
  },

  _activate() {
    this.setState({ active: true });
  }
});

// Yolo pls swag.
React.render(<App />, document.body);