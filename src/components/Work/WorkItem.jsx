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
        display: 'block',
        padding: 15,
        marginBottom: 20,
        background: '#fff',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
        textDecoration: 'none'
      },

      'img': {
        width: '100%'
      },

      'description': { lineHeight: '1.5' }
    };

    return (
      <a href={data.url} target="_blank" style={style.box}>
        { data.thumbnail == undefined ? '' : <Img src={`dist/thumbs/${data.thumbnail}`} style={style.img} /> }
        <h2 className="u-color-highlight-alt">{data.title}</h2>
        <p className="u-text-light" style={style.description}>{data.description}</p>
      </a>
    );
  }
});

export default WorkItem;