import React from 'react';
import { StyleResolverMixin, MatchMediaItem } from 'radium';
import Thumbnail from './Thumbnail';

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
    var { url, title, thumbnail, description } = this.props.data;

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
        padding: 0,
        mediaQueries: [{ xs: { padding: 15 } }]
      })
    };

    return (
      <div style={style.box}>
        { thumbnail == undefined ? '' : <Thumbnail src={thumbnail} url={url} title={title} />}

        <div style={style.text}>
          <h5 className="u-color-highlight-alt u-fira -regular">{title}</h5>
          <p style={{ lineHeight: '1.5' }}>{description}</p>
        </div>
      </div>
    );
  }
});

export default WorkItem;