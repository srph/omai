import React from 'react';
import { StyleResolverMixin, MatchMediaItem } from 'radium';
import Thumbnail from './Thumbnail';
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
    data: React.PropTypes.object
  },

  render() {
    // Shorthand
    var { tags, url, title, thumbnail, description } = this.props.data;

    // Element styling
    var style = {
      'box': {
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 20,
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
        width: '75%',
        // We'd want to replace overflowing description
        // with an ellipsis `...`.
        height: 125,

        // For xs screens, we'll set the text below the thumbnail,
        // and also set description areas to varying sizes.
        mediaQueries: [{ xs: {
          padding: 15,
          float: 'none',
          width: '100%',
          height: 'auto'
        } }]
      })
    };

    return (
      <div style={style.box}>
        { thumbnail == undefined ? '' : <Thumbnail src={thumbnail} url={url} title={title} />}

        <div style={style.text}>
          <h5 className="u-color-highlight-alt u-fira -regular">{title}</h5>
          <p style={{ lineHeight: '1.5' }}>{description}</p>
        </div>

        { tags !== undefined ? <Bar tags={tags} /> : '' }
      </div>
    );
  }
});

export default WorkItem;