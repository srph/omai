import React from 'react';
import { StyleResolverMixin, MatchMediaItem } from 'radium';

var Description = React.createClass({
  /**
   * We'll add these mixins since our
   * description layout cascades  for large screens
   */
  mixins: [StyleResolverMixin, MatchMediaItem],

  render() {
    var style = this.buildStyles({
      // We'll limit the description to a single line with ending
      // ellipsis for the remaining text to save space.
      textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',

      // For large screens, yolo pls swag.
      mediaQueries: [{ xs: {
        lineHeight: '1.5', textOverflow: 'initial', overflow: 'initial', whiteSpace: 'initial'
      } }]
    });

    return (
      <p style={style}>
        { this.props.children }
      </p>
    );
  }
});

export default Description;