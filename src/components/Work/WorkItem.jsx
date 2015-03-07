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
        marginBottom: 20,
        background: '#fff',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6
      },

      'description': { lineHeight: '1.5' }
    };

    return (
      <article style={style.box}>
        <img src={data.thumbnail} />
        <h2 className="u-color-highlight-alt">{data.title}</h2>
        <p className="u-text-light" style={style.description}>{data.description}</p>
      </article>
    );
  }
});

export default WorkItem;