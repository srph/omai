import React from 'react';
import {StyleResolverMixin, MatchMediaItem} from 'radium';

var Container = React.createClass({
  mixins: [MatchMediaItem, StyleResolverMixin],

  render() {
    var style = this.buildStyles({
      // We'll want to add some padding for small screens.
      padding: '0 15px',
      // Provides some allowance from the
      // window's vertical edges, while at the same
      // time, center our layout
      margin: '25px auto',
      width: '100%',
      // 750 will be our max width for large screens.
      // We'll prefer to use max-width instead of media-queires
      // since we're only support screen-size `sm`
      maxWidth: 750,

      mediaQueries: [{ sm : { marginTop: 35, marginBottom: 35 } }]
    });

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
});

export default Container;