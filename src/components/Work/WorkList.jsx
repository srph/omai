import React from 'react';
import WorkItem from './WorkItem';
import list from './data';

var WorkList = React.createClass({
  render() {
    return (
      <div>
        {list.map((data, i) => {
          return <WorkItem data={data} key={`data2469_${i}`} />
        })}
      </div>
    );
  }
});

export default WorkList;