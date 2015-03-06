import React from 'react';
import {StyleResolverMixin} from 'radium';

var DisplayPicture = React.createClass({
  mixins: [StyleResolverMixin],

  render() {
    var style = this.buildStyles({
      height: 64,
      width: 64,
      borderRadius: '50%'
    });

    return (
      <div className="u-text-center">
        <img src="/dist/img/dp.jpg" style={style} />
      </div>
    );
  }
});

export default DisplayPicture;