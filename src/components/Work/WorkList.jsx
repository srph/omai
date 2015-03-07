import React from 'react/addons';
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

import WorkItem from './WorkItem';
import list from './data';

var WorkList = React.createClass({
  render() {
    var style = { marginBottom: 20 };

    return (
      <div>
        <h2 className="u-color-highlight-alt u-text-center" style={style}>
          My Work
        </h2>

        <CSSTransitionGroup transitionName="a">
          {list.map((data, i) => {
            return <WorkItem data={data} key={`data2469_${i}`} />
          })}
        </CSSTransitionGroup>
      </div>
    );
  }
});

export default WorkList;