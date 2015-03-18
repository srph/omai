import React from 'react/addons';
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import PaginationMixin from './PaginationMixin';
import WorkItem from './WorkItem/WorkItem';
import split from '../../utils/split';

var WorkList = React.createClass({
  mixins: [PaginationMixin],

  render() {
    var { data, isLoading, isDisabled } = this.state;
    var style = { marginBottom: 20 };
    var splitted = split(data);

    return (
      <div>
        <h2 className="u-color-highlight-alt u-text-center" style={style}>
          My Work
        </h2>

        <InfiniteScroll callback={this._paginate} disabled={isLoading || isDisabled} className="u-clearfix">
          <div className="six columns">
            <CSSTransitionGroup transitionName="a">
              {splitted[0].map((data, i) => {
                return <WorkItem key={`data2469_${i}`}
                  data={data} isLast={i == splitted[0].length - 1} />
              })}
            </CSSTransitionGroup>
          </div>

          <div className="six columns">
            <CSSTransitionGroup transitionName="a">
              {splitted[1].map((data, i) => {
                return <WorkItem key={`data2468_${i}`}
                  data={data} isLast={i == splitted[1].length - 1} />
              })}
            </CSSTransitionGroup>
          </div>
        </InfiniteScroll>

        <CSSTransitionGroup transitionName="a">
          { isLoading ? <div className="loader"></div> : '' }
        </CSSTransitionGroup>
      </div>
    );
  }
});

export default WorkList;