import React from 'react';
import {StyleResolverMixin} from 'radium';

var Description = React.createClass({
  mixins: [StyleResolverMixin],

  render() {
    var styles = {
      'box': {
        position: 'relative',
        marginTop: 35,

        padding: 15,
        backgroundColor: '#fff',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',

        lineHeight: '1.5'
      },

      'box.caret': {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -8,
        marginLeft: 'auto',
        marginRight: 'auto',

        height: 0,
        width: 0,

        borderRadius: 6,
        // borderColor: '#fff',
        // borderWidth: 1,
        // borderStyle: 'solid',
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: '8px solid #fff',
      }
    };

    return (
      <div className="u-text-center" style={styles['box']}>
        <div style={styles['box.caret']} />
        <span className="u-text-light">
        	I do a lot of stuff. Why <span className="u-text-normal">don't you
          see my work</span> instead of reading
          this <span className="u-text-normal">boring message</span>?
        </span>
      </div>
    )
  }
});

export default Description;