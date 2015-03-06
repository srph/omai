import React from 'react';

import DisplayPicture from './DisplayPicture';
import Title from './Title';
import Description from './Description';

var Profile = React.createClass({
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
    var {active, activationHandler} = this.props;
    return (
      <div>
        <DisplayPicture />
        <Title />
        <Description active={active} activationHandler={activationHandler} />
      </div>
    );
  }
});

export default Profile;