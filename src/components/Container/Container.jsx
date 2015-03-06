import React from 'react';
import {StyleResolverMixin, MatchMediaItem} from 'radium';

var Container = React.createClass({
  mixins: [MatchMediaItem, StyleResolverMixin],

  render() {
    var style = this.buildStyles({
      paddingRight: 15,
      paddingLeft: 15,
      marginTop: 25,
      marginBottom: 25,
      marginLeft: 'auto',
      marginRight: 'auto',

      mediaQueries: [{
        sm : { width: 750, marginTop: 35, marginBottom: 35 }
      }]
    });

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
});

export default Container;