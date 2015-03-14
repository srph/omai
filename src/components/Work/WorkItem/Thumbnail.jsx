import React from 'react';
import { StyleResolverMixin, BrowserStateMixin, MatchMediaItem } from 'radium';

import Img from '../../Img/Img';

var Thumbnail = React.createClass({
  /**
   * Used for the `hover` state and for the layout
   * cascading (responsive design stuff)
   */
  mixins: [StyleResolverMixin, BrowserStateMixin, MatchMediaItem],

  propTypes: {
    /**
     * Thumbnail src (<img src={src})
     */
    src: React.PropTypes.string.isRequired,

    /**
     * URL of the thumbnail (<a href={}>)
     */
    url: React.PropTypes.string.isRequired,

    /**
     * Title, to be used for the alt
     */
    title: React.PropTypes.string.isRequired
  },

  render() {
    // Element Styling
    var style = this.buildStyles({
      // Layout cascading
      position: 'absolute',
      width: '100%',
      height: '100%',
      // Border Radius
      borderRadiusTopLeft: 6,
      borderRadiusTopRight: 6,
      // --

      // To make the 'lightening' a little smoother
      // Since the background is white, setting the
      // element to a lower opacity makes it lighter.
      // - Captain Obvious
      transition: 'opacity 0.2s',
      states: [{ hover: { opacity: '0.8' } }],
      // We'll use `xs` here since we'd want to retain
      // the 2-column layout only for small screens
      mediaQueries: [{ xs: { position: 'relative' }}]
    });

    // container element styling.
    // used for the layout cascading for smaller screens
    var container = this.buildStyles({
      // We'd want our absolutely-positioned children (the image itself)
      // to use this container as its base
      position: 'relative',
      //  Our container element is an anchor
      display: 'block',
      // We'd want the thumbnail to be at the same column
      // as the text / w/e
      float: 'left',
      // So sizes are properly rendered
      paddingBottom: '25%',
      width: '25%',
      // --
      // We'll use `xs` here since we'd want to retain
      // the 2-column layout only for small screens
      mediaQueries: [{ xs: { float: 'none', paddingBottom: 0, width: '100%' } }]
    });

    // Shorthand
    var { src, url, title } = this.props;

    return (
      <a href={url} target="_blank" style={container}>
        <Img src={'https://mir-cdn.behance.net/v1/rendition/projects/202/32574d24270697.54fa40784145b.png'}
          alt={`${title} thumbnail`}
          {...this.getBrowserStateEvents()}
          style={style} />
      </a>
    );
  }
})

export default Thumbnail;