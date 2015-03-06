import React from 'react';

var WorkItem = React.createClass({
  propTypes: {
    /**
     * Data of the item
     */
    data: React.PropTypes.object
  },

  render() {
    var data = this.props.data;

    return (
      <article>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </article>
    );
  }
});

export default WorkItem;