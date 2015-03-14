import React from 'react';

var Bar = React.createClass({
  propTypes: {
    /**
     * Tags of the work item
     */
    tags: React.PropTypes.arrayOf(React.PropTypes.object)
  },
  render() {
    // Element Styling
    var style ={
      // Bar / Container of the tags
      container: {
        width: '100%',
        padding: '5px 10px',
        background: '#5D6669'
      },
      //
      tag: { color: '#fff' }
    };

    // Shorthand 
    var { tags } = this.props;

    return (
      <div className="u-text-truncate" style={style.container}>
        { tags.map( (tag, i) => {
          return (
            <span>
              #<span style={style.tag} className="h6">{tag}</span>
              &nbsp;
            </span>
          );
        }) }
      </div>
    );
  }
});

export default Bar;