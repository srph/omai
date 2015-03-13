import React from 'react';
import Img from '../Img';

var WorkItem = React.createClass({
  propTypes: {
    /**
     * Data of the item
     */
    data: React.PropTypes.object
  },

  render() {
    var {data} = this.props;
    var style = {
      'box': {
        marginBottom: 20,
        background: '#fff',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
        textDecoration: 'none',
        display: 'hidden'
      },

      'img.container': { display: 'block' },
      'img': { width: '100%' },

      'text': { padding: 15 },
      'description': { lineHeight: '1.5' }
    };

    return (
      <div style={style.box}>
        <a href={data.url} target="_blank" style={style['img.container']}>
          { data.thumbnail == undefined ? '' : <Img src={'https://mir-cdn.behance.net/v1/rendition/projects/202/32574d24270697.54fa40784145b.png'} style={style.img} alt={`${data.title} thumbnail`} /> }
        </a>

        <div style={style.text}>
          <h5 className="u-color-highlight-alt u-fira -regular">{data.title}</h5>
          <p style={style.description}>{data.description}</p>
        </div>
      </div>
    );
  }
});

export default WorkItem;