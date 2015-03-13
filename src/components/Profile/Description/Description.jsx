import React from 'react';
import {MatchMediaItem} from 'radium';

import Caret from './Caret';
import SeeWorkButton from './SeeWorkButton';

var Description = React.createClass({
  mixins: [MatchMediaItem],

  propTypes: {
    /**
     * Flag for work (whether active)
     */
    active: React.PropTypes.bool.isRequired,

    /**
     * Handle setting of flag for work (normally to set it as true)
     */
    activationHandler: React.PropTypes.func.isRequired
  },

  render() {
    // Prop
    var {active, activationHandler} = this.props;

    var styles = {
      // The container element
      'box': {
        // Set to relative since our caret (absolute positioned)
        // mainly depends on this element container.
        position: 'relative',
        // Spacing for the DP, Title
        marginTop: 35,
        // Center teh shit
        marginLeft: 'auto',
        marginRight: 'auto',

        padding: '0px 10px',
        // Add swag
        backgroundColor: '#fff',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
      },

      // Description text
      'text': {
        // Space swag!
        paddingTop: 20, paddingBottom: 20,
        // Improve for readability
        lineHeight: '1.5'
      },
    };

    return (
      <div className="u-text-center" style={styles.box}>
        <Caret />
        
        <div className="u-text-light" style={styles.text}>
          I do a lot of stuff. Why <span className="u-text-normal">don't you
          see my work</span> instead of reading this&nbsp;
          <span className="u-text-normal">boring message</span>?
        </div>

        <SeeWorkButton active={active} activationHandler={activationHandler} />
      </div>
    );
  }
});

export default Description;