import React from 'react/addons';
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

import WorkItem from './WorkItem';
import list from './data';

import split from '../../utils/split';

var WorkList = React.createClass({
  render() {
    var style = { marginBottom: 20 };
    var splitted = split(list);
    return (
      <div>
        <h2 className="u-color-highlight-alt u-text-center" style={style}>
          My Work
        </h2>

        <section>
          <div className="six columns">
            <CSSTransitionGroup transitionName="a">
              {splitted[0].map((data, i) => {
                return <WorkItem data={data} key={`data2469_${i}`} />
              })}
            </CSSTransitionGroup>
          </div>

          <div className="six columns">
            <CSSTransitionGroup transitionName="a">
              {splitted[1].map((data, i) => {
                return <WorkItem data={data} key={`data2468_${i}`} />
              })}
            </CSSTransitionGroup>
          </div>
        </section>
      </div>
    );
  }
});

export default WorkList;