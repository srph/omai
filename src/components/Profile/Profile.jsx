import React from 'react';
import DisplayPicture from './DisplayPicture';

var Profile = React.createClass({
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
        <DisplayPicture />
      </div>
    );
  }
});

export default Profile;