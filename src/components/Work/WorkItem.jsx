import React from 'react';

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
        padding: 15,
        background: '#fff',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6
      }
    };

    return (
      <article className="six columns" style={style.box}>
        <img src={data.thumbnail} />
        <h2>{data.title}</h2>
        <p className="u-text-light">{data.description}</p>
      </article>
    );
  }
});

export default WorkItem;