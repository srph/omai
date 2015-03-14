import React from 'react';
import {StyleResolverMixin, MatchMediaItem} from 'radium';

var Container = React.createClass({
  mixins: [MatchMediaItem, StyleResolverMixin],

  render() {
    var style = this.buildStyles({
      padding: '0 15px',
      margin: '25px auto',
      mediaQueries: [{ sm : { width: 750, marginTop: 35, marginBottom: 35 } }]
    });

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
});

export default Container;