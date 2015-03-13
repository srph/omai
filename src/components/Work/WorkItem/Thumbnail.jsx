import React from 'react';
import { StyleResolverMixin, BrowserStateMixin } from 'radium';

import Img from '../../Img';

var Thumbnail = React.createClass({
  /**
   * Used for the `hover` state
   */
  mixins: [StyleResolverMixin, BrowserStateMixin],

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
      width: '100%',
      // Border Radius
      borderRadiusTopLeft: 6,
      borderRadiusTopRight: 6,
      // --

      // To make the 'lightening' a little smoother
      // Since the background is white, setting the
      // element to a lower opacity makes it lighter.
      // - Captain Obvious
      transition: 'opacity 0.2s',
      states: [{ hover: { opacity: '0.8' } }]
    });

    // Shorthand
    var { src, url, title } = this.props;

    return (
      <a href={url} target="_blank">
        <Img src={'https://mir-cdn.behance.net/v1/rendition/projects/202/32574d24270697.54fa40784145b.png'}
          alt={`${title} thumbnail`}
          {...this.getBrowserStateEvents()}
          style={style} />
      </a>
    );
  }
})

export default Thumbnail;