import React from 'react';
import { StyleResolverMixin, MatchMediaItem } from 'radium';

import Thumbnail from './Thumbnail';
import Description from './Description';
import Bar from './Bar';

var WorkItem = React.createClass({
  /**
   * For the `text` responsive stuff :)
   */
  mixins: [StyleResolverMixin, MatchMediaItem],

  propTypes: {
    /**
     * Data of the item
     */
    data: React.PropTypes.object,

    /**
     * Used to check if this item is the last in the
     * column. Used to remove margin-bottom for
     * consistency for both situations when the list is shown or hidden
     */
    isLast: React.PropTypes.bool.isRequired
  },

  render() {
    // Shorthand
    var { isLast, data } = this.props;
    var { tags, url, title, thumbnail, description } = data;

    // Element styling
    var style = {
      'box': {
        position: 'relative',
        overflow: 'hidden',
        // There should be no margin-bottom for the the last item
        // to provide consistency on the footer spacing when the 
        // list is either shown or hidden.
        marginBottom: isLast ? 0 : 20,
        background: '#fff',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
        textDecoration: 'none'
      },

      'text': this.buildStyles({
        // These styling sets the text as
        // a column next to the thumbnail
        padding: 10,
        float: 'left',
        width: '60%',
        // We'd want to replace overflowing description with an ellipsis `...`.
        maxHeight: 90,

        // For xs screens, we'll set the header and description
        // below the thumbnail, and also set description areas to varying sizes.
        mediaQueries: [{ xs: {
          padding: 15,
          float: 'none',
          width: '100%',
          // Set to dynamic heights
          maxHeight: 'none',
        } }],
      })
    };

    return (
      <div style={style.box}>
        { thumbnail == undefined ? '' : <Thumbnail src={thumbnail} url={url} title={title} />}

        <div style={style.text}>
          <h5 className="u-color-highlight-alt u-fira -regular" style={{ marginTop: 0 }}>{title}</h5>
          <Description>{description}</Description>
        </div>

        { tags !== undefined ? <Bar tags={tags} /> : '' }
      </div>
    );
  }
});

export default WorkItem;