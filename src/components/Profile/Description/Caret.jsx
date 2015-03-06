import React from 'react';

/**
 * A triangle / an arrow-up or a caret element that
 * just makes the container / box look like a dialog.
 *
 * Separated from the Description (container element) component
 * due to its styling intricacy
 */
var Caret = React.createClass({
  render() {
    var style = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -8,
      marginLeft: 'auto',
      marginRight: 'auto',

      height: 0,
      width: 0,

      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderBottom: '8px solid #fff',
    };

    return (
      <span>
        <div style={style} />
      </span>
    );
  }
});

export default Caret;