import React from 'react';
import Img from '../Img';

/**
 * Just a component for the DisplayPicture
 */
var DisplayPicture = React.createClass({
  render() {
    var style = {
      height: 64,
      width: 64,
      borderRadius: '50%'
    };

    return (
      <div className="u-text-center">
        <Img src="dist/img/dp.jpg" style={style} />
      </div>
    );
  }
});

export default DisplayPicture;