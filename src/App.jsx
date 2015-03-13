import {polyfill} from "es6-promise";
polyfill();

import React from 'react/addons';
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

/* Second-level components */
import Container from './components/Container/Container';
import WorkList from './components/Work/WorkList';
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
    var { active } = this.state;
    var activate = this._activate;

    return (
      <Container>
        <Profile active={active} activationHandler={activate} />

        <CSSTransitionGroup transitionName="a">
          { active ? <WorkList /> : '' }
        </CSSTransitionGroup>

        <h5 className="u-text-center u-fira -regular" style={{ marginTop: 25 }}>
          <a href="//github.com/srph/omai" className="u-color-highlight">Omai</a>&#8202;
          &copy; 2015+, &#8202;
          <a href="//github.com/srph/omai" className="u-color-highlight">Kier Borromeo (srph)</a>.
        </h5>
      </Container>
    );
  },

  _activate() {
    this.setState({ active: true });
  }
});

// Yolo pls swag.
React.render(<App />, document.body);