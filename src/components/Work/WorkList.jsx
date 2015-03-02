/** @jsx React.DOM  */
import * as React from 'react';
import * as WorkItem from './WorkItem';
import * as list from './data';

var WorkList = export React.createClass({
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